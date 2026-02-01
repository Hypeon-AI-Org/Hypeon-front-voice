/**
 * In-memory rate limiter (per serverless instance).
 * Use for abuse prevention; for distributed limits consider Upstash Redis.
 */

const store = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute

function prune(key: string, now: number, windowMs: number): number[] {
  const timestamps = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  if (timestamps.length === 0) store.delete(key);
  else store.set(key, timestamps);
  return timestamps;
}

/**
 * Returns true if the request is within limits, false if rate limited.
 * @param key - Identifier (e.g. client IP)
 * @param maxRequests - Max requests allowed in the window
 * @param windowMs - Window in milliseconds (default 60s)
 */
export function rateLimit(
  key: string,
  maxRequests: number,
  windowMs: number = WINDOW_MS
): boolean {
  const now = Date.now();
  const timestamps = prune(key, now, windowMs);
  if (timestamps.length >= maxRequests) return false;
  timestamps.push(now);
  store.set(key, timestamps);
  return true;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() ?? request.headers.get('x-real-ip') ?? null;
  return ip ?? 'unknown';
}
