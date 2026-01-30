'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { X, Phone, PhoneOff, Loader2, Mic } from 'lucide-react';

interface RetellVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CallStatus = 'idle' | 'connecting' | 'connected' | 'ended' | 'error';

const RetellVoiceModal = ({ isOpen, onClose }: RetellVoiceModalProps) => {
  const [status, setStatus] = useState<CallStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [tokenReady, setTokenReady] = useState(false);
  const tokenRef = useRef<string | null>(null);
  const clientRef = useRef<{ startCall: (c: { accessToken: string }) => Promise<void>; stopCall: () => void; on: (e: string, fn: () => void) => void } | null>(null);

  const stopCall = useCallback(() => {
    if (clientRef.current) {
      try {
        clientRef.current.stopCall();
      } catch (_) {}
      clientRef.current = null;
    }
    setStatus('ended');
  }, []);

  const handleClose = useCallback(() => {
    stopCall();
    setStatus('idle');
    setError(null);
    tokenRef.current = null;
    setTokenReady(false);
    onClose();
  }, [onClose, stopCall]);

  /** Pre-fetch token when modal opens so "Start call" only runs SDK (mic request right after click). */
  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setTokenReady(false);
    tokenRef.current = null;
    fetch('/api/retell-create-web-call', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled || !data.access_token) return;
        tokenRef.current = data.access_token;
        setTokenReady(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  /**
   * Request microphone in the same user gesture as the click, then start Retell.
   * This avoids NotAllowedError from the browser blocking mic when the SDK requests it later.
   */
  const handleStartCall = useCallback(async () => {
    setError(null);
    const token = tokenRef.current;
    if (!token) {
      setError('Not ready yet. Please wait a moment and click Start live demo again.');
      return;
    }

    setStatus('connecting');

    // 1. Request mic immediately on this click so the permission prompt is tied to user gesture
    let preStream: MediaStream | null = null;
    try {
      if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
        preStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Release our stream; Retell will request mic again and get it without a second prompt
        preStream.getTracks().forEach((t) => t.stop());
      }
    } catch (micErr) {
      const isDenied = micErr instanceof Error && micErr.name === 'NotAllowedError';
      setError(isDenied ? 'MIC_DENIED' : micErr instanceof Error ? micErr.message : 'Microphone access denied');
      setStatus('error');
      return;
    }

    // 2. Start Retell call (mic already granted for this origin)
    try {
      const { RetellWebClient } = await import('retell-client-js-sdk');
      const client = new RetellWebClient();
      clientRef.current = client;

      client.on('call_started', () => setStatus('connected'));
      client.on('call_ended', () => setStatus('ended'));
      client.on('error', (err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err);
        const isDenied = err instanceof Error && err.name === 'NotAllowedError';
        setError(isDenied ? 'MIC_DENIED' : msg);
        setStatus('error');
      });

      await client.startCall({ accessToken: token });
      tokenRef.current = null;
    } catch (err) {
      const isDenied = err instanceof Error && err.name === 'NotAllowedError';
      setError(isDenied ? 'MIC_DENIED' : err instanceof Error ? err.message : 'Failed to start call');
      setStatus('error');
    }
  }, []);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setError(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const statusLabel =
    status === 'connecting'
      ? 'Connecting…'
      : status === 'connected'
        ? 'In call'
        : status === 'ended'
          ? 'Call ended'
          : status === 'error'
            ? 'Error'
            : '';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-sm bg-white border border-emerald-200 rounded-3xl shadow-2xl shadow-emerald-500/20 animate-slideUp">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6">
          <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 text-center mb-2">Live demo</h2>
          <p className="text-gray-600 text-sm text-center mb-3">
            Ask questions about how HypeOn works, or speak with an example dental receptionist.
          </p>

          {status === 'idle' && (
            <>
              <div className="flex justify-center mb-4">
                <button
                  type="button"
                  onClick={handleStartCall}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
                >
                  <Mic className="w-4 h-4" />
                  Start live demo
                </button>
              </div>
              <p className="text-gray-500 text-xs text-center mb-3">
                Please allow mic permissions when prompted. If nothing happens, double-check your browser mic settings.
              </p>
              <p className="text-gray-400 text-xs text-center">
                This demo uses an AI assistant and records/transcribes your call. See our{' '}
                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline" onClick={(e) => e.stopPropagation()}>
                  Privacy Policy
                </Link>{' '}
                for details.
              </p>
            </>
          )}

          {(status === 'connecting' || status === 'connected') && (
            <p className="text-gray-600 text-sm text-center mb-3">
              You can speak now. The agent will hear you.
            </p>
          )}

          {(status === 'connecting' || status === 'connected') && (
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
              {status === 'connecting' && <Loader2 className="w-4 h-4 animate-spin" />}
              <span className="text-sm font-medium">{statusLabel}</span>
            </div>
          )}

          {status === 'error' && error && (
            <div className="mb-4 space-y-2">
              {error === 'MIC_DENIED' ? (
                <>
                  <p className="text-red-600 text-sm font-medium text-center">
                    Microphone access was denied.
                  </p>
                  <div className="text-gray-600 text-xs text-left bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="font-semibold text-gray-700 mb-1">If you already set Microphone to Allow:</p>
                    <ul className="list-disc list-inside space-y-1 mb-2">
                      <li>Do a <strong>hard refresh</strong> (Ctrl+Shift+R or Cmd+Shift+R).</li>
                      <li>Use the <strong>exact same URL</strong> you allowed (e.g. <code className="bg-gray-200 px-1 rounded">http://localhost:3000</code> — not <code className="bg-gray-200 px-1 rounded">http://127.0.0.1:3000</code>).</li>
                      <li>Close other tabs that might be using the microphone.</li>
                    </ul>
                    <p className="font-semibold text-gray-700 mb-1">To allow the microphone:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Click the <strong>lock</strong> or <strong>info</strong> icon in the address bar.</li>
                      <li>Set <strong>Microphone</strong> to <strong>Allow</strong>, then refresh the page.</li>
                    </ol>
                    <p className="text-gray-600 mt-2">Microphone only works on <strong>HTTPS</strong> or <strong>localhost</strong>. If you use an IP or <code className="bg-gray-200 px-1 rounded">http://</code>, try <code className="bg-gray-200 px-1 rounded">http://localhost:3000</code>.</p>
                  </div>
                </>
              ) : (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}
            </div>
          )}

          {status === 'ended' && (
            <p className="text-gray-600 text-sm text-center mb-4">Call ended. You can close this window.</p>
          )}

          <div className="flex gap-3 flex-wrap justify-center">
            {status === 'connected' && (
              <button
                type="button"
                onClick={stopCall}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors"
              >
                <PhoneOff className="w-4 h-4" />
                End call
              </button>
            )}
            {(status === 'error' || status === 'ended') && (
              <button
                type="button"
                onClick={handleStartCall}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
              >
                <Mic className="w-4 h-4" />
                Start live demo
              </button>
            )}
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-200 text-gray-800 font-semibold text-sm hover:bg-gray-300 transition-colors min-w-[100px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetellVoiceModal;
