import { NextResponse } from 'next/server';

const RETELL_API_BASE = 'https://api.retellai.com';

/** Retell agent IDs are long alphanumeric strings (e.g. oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD). */
function looksLikeAgentId(value: string): boolean {
  return value.length >= 20 && /^[a-zA-Z0-9_-]+$/.test(value);
}

/**
 * Resolve agent ID from name by listing agents and matching agent_name.
 */
async function getAgentIdByName(apiKey: string, agentName: string): Promise<string | null> {
  const res = await fetch(`${RETELL_API_BASE}/list-agents`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) {
    console.error('Retell list-agents status:', res.status, await res.text());
    return null;
  }
  const list = (await res.json()) as Array<{ agent_id: string; agent_name: string | null }>;
  const want = agentName.toLowerCase().trim();
  const match = list?.find((a) => {
    const n = a.agent_name?.toLowerCase().trim() ?? '';
    return n === want || n.replace(/\s+/g, '-') === want || n.replace(/-/g, ' ') === want.replace(/-/g, ' ');
  });
  return match?.agent_id ?? null;
}

/**
 * Creates a Retell web call. Uses RETELL_AGENT_ID if it looks like a real ID;
 * otherwise resolves RETELL_AGENT_ID or RETELL_AGENT_NAME (e.g. "Website-demo") via List Agents API.
 */
export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  const envAgentId = process.env.RETELL_AGENT_ID?.trim() || null;
  const agentName = process.env.RETELL_AGENT_NAME?.trim() || null;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Retell API not configured. Set RETELL_API_KEY in .env.local' },
      { status: 503 }
    );
  }

  let agentId: string | null = null;

  if (envAgentId && looksLikeAgentId(envAgentId)) {
    agentId = envAgentId;
  } else {
    const nameToResolve = envAgentId || agentName;
    if (nameToResolve) {
      try {
        agentId = await getAgentIdByName(apiKey, nameToResolve);
      } catch (e) {
        console.error('Retell list-agents error:', e);
      }
    }
  }

  if (!agentId) {
    return NextResponse.json(
      {
        error: envAgentId || agentName
          ? `No agent found with name "${envAgentId || agentName}". In Retell dashboard → Voice Agents, copy the agent ID (long string like oBeDLo...) and set RETELL_AGENT_ID to that in .env.local.`
          : 'Set RETELL_AGENT_ID (agent ID from dashboard) or RETELL_AGENT_NAME (e.g. Website-demo) in .env.local',
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`${RETELL_API_BASE}/v2/create-web-call`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = (await res.json()) as {
      access_token?: string;
      call_id?: string;
      agent_name?: string;
      detail?: string;
      message?: string;
    };

    if (!res.ok) {
      return NextResponse.json(
        { error: data.detail || data.message || 'Failed to create web call' },
        { status: res.status }
      );
    }

    return NextResponse.json({
      access_token: data.access_token,
      call_id: data.call_id,
      agent_name: data.agent_name,
    });
  } catch (err) {
    console.error('Retell create-web-call error:', err);
    return NextResponse.json(
      { error: 'Failed to start voice call' },
      { status: 500 }
    );
  }
}
