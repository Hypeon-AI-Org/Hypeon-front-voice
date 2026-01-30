'use client';

import Image from 'next/image';
import { Zap, CheckCircle, FileText, Phone, Play, Square } from 'lucide-react';
import { useRef, useState, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';

// Conversation data: speaker, subtitle text, audio path (mapped to existing files)
const CONVERSATION = [
  { speaker: 'agent' as const, text: 'Hi, thanks for calling BrightSmile Dental Clinic. How can I help?', audio: '/audio/Agent-1.mp3' },
  { speaker: 'customer' as const, text: "Hi, I'd like to book an appointment.", audio: '/audio/user-1.mp3' },
  { speaker: 'agent' as const, text: 'Sure. Is this your first visit with our clinic?', audio: '/audio/Agent-2.mp3' },
  { speaker: 'customer' as const, text: 'Yes, it is.', audio: '/audio/User-2.mp3' },
  { speaker: 'agent' as const, text: "Great. May I know what kind of appointment you're looking for?", audio: '/audio/Agent-3.mp3' },
  { speaker: 'customer' as const, text: 'Just a regular check-up.', audio: '/audio/User-3.mp3' },
  { speaker: 'agent' as const, text: 'Got it, A general dental check-up.', audio: '/audio/Agent-4.mp3' },
  { speaker: 'agent' as const, text: 'Do you have a preferred date or time?', audio: '/audio/Agent-4-2.mp3' },
  { speaker: 'customer' as const, text: 'Sometime this Friday, in the morning.', audio: '/audio/User-4.mp3' },
  { speaker: 'agent' as const, text: 'Okay, Friday morning works.', audio: '/audio/Agent-5.mp3' },
  { speaker: 'agent' as const, text: "I've scheduled your check-up for Friday morning. You're all set!", audio: '/audio/Agent-6.mp3' },
  { speaker: 'agent' as const, text: 'Thank you for calling BrightSmile Dental Clinic.\nWe look forward to seeing you.', audio: '/audio/Agent-7.mp3' },
];

const SUBTITLE_DELAY_MS = 300;

interface AIPhoneSupportSectionProps {
  openVoiceModal?: () => void;
}

const AIPhoneSupportSection = ({ openVoiceModal }: AIPhoneSupportSectionProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const stepTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const currentStepIndexRef = useRef<number | null>(null);
  const transcriptContainerRef = useRef<HTMLDivElement>(null);
  const wordRefsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [subtitle, setSubtitle] = useState<{ text: string; speaker: 'agent' | 'customer'; exiting?: boolean } | null>(null);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(-1);
  const [highlightRect, setHighlightRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const words = useMemo(
    () => (subtitle?.text ? subtitle.text.split(/\s+/).filter(Boolean) : []),
    [subtitle?.text]
  );

  // Lines for display (split on \n so some steps can show on multiple lines)
  const lineWords = useMemo(
    () => (subtitle?.text ? subtitle.text.split('\n').map((l) => l.split(/\s+/).filter(Boolean)) : []),
    [subtitle?.text]
  );

  // Sync word highlight to audio playback (proportional to currentTime / duration)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !subtitle?.text || words.length === 0) return;

    const onTimeUpdate = () => {
      const duration = audio.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const t = audio.currentTime;
      const idx = Math.min(Math.floor((t / duration) * words.length), words.length - 1);
      setHighlightedWordIndex(idx);
    };

    const onLoadedMetadata = () => {
      setHighlightedWordIndex(-1);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, [subtitle?.text, words.length]);

  // Position the moving highlighter over the current word (text stays static)
  useLayoutEffect(() => {
    if (highlightedWordIndex < 0 || !transcriptContainerRef.current) {
      setHighlightRect(null);
      return;
    }
    const el = wordRefsRef.current[highlightedWordIndex];
    const container = transcriptContainerRef.current;
    if (!el) {
      setHighlightRect(null);
      return;
    }
    const pad = 4;
    const wordRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setHighlightRect({
      top: wordRect.top - containerRect.top - pad,
      left: wordRect.left - containerRect.left - pad,
      width: wordRect.width + pad * 2,
      height: wordRect.height + pad * 2,
    });
  }, [highlightedWordIndex, subtitle?.text]);

  const endPlayback = useCallback(() => {
    currentStepIndexRef.current = null;
    setIsPlaying(false);
    setSubtitle(null);
    setHighlightedWordIndex(-1);
    setHighlightRect(null);
  }, []);

  const stopPlayback = useCallback(() => {
    stepTimeoutsRef.current.forEach((id) => clearTimeout(id));
    stepTimeoutsRef.current = [];
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    setIsPlaying(false);
  }, []);

  const resumePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (audio?.src) {
      setIsPlaying(true);
      audio.play().catch(() => {});
    }
  }, []);

  const playStep = useCallback((index: number) => {
    if (index >= CONVERSATION.length) {
      endPlayback();
      return;
    }

    const step = CONVERSATION[index];

    const showAndPlay = () => {
      currentStepIndexRef.current = index;
      setSubtitle({ text: step.text, speaker: step.speaker });
      setHighlightedWordIndex(-1);
      const audio = audioRef.current;
      if (audio) {
        audio.src = step.audio;
        audio.load();
        audio.onended = () => playStep(index + 1);
        audio.play().catch(() => playStep(index + 1));
      } else {
        playStep(index + 1);
      }
    };

    const hasCurrentSubtitle = subtitle != null;

    if (index === 0 && !hasCurrentSubtitle) {
      showAndPlay();
      return;
    }

    // Exit current subtitle, then after delay show next
    setSubtitle((prev) => (prev ? { ...prev, exiting: true } : null));

    const hideThenShow = () => {
      setSubtitle(null);
      const id2 = setTimeout(showAndPlay, SUBTITLE_DELAY_MS);
      stepTimeoutsRef.current.push(id2);
    };

    const id1 = setTimeout(hideThenShow, hasCurrentSubtitle ? 280 : 0);
    stepTimeoutsRef.current.push(id1);
  }, [endPlayback, subtitle]);

  const startPlayback = useCallback(() => {
    if (isPlaying) return;
    setIsPlaying(true);
    setSubtitle(null);
    playStep(0);
  }, [isPlaying, playStep]);

  const handlePlayStopClick = useCallback(() => {
    if (isPlaying) {
      stopPlayback();
    } else if (currentStepIndexRef.current !== null && audioRef.current?.src) {
      resumePlayback();
    } else {
      startPlayback();
    }
  }, [isPlaying, stopPlayback, resumePlayback, startPlayback]);

  return (
    <section className="py-32 bg-white relative">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Title Left, Description Right */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                <span className="block">AI Phone Support That</span>
                <span className="block">Sounds Remarkably Human.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With HypeOn-Voice, your callers never get stiff, scripted, or robotic responses. Your AI Receptionist speaks naturally, adapts to context, and responds with the warmth and clarity your customers expect.
              </p>
            </div>
          </div>

          {/* Central Card — Agent box with voice demo */}
          <div className="w-full bg-white/40 backdrop-blur-xl rounded-[30px] p-5 md:p-6 mb-20 relative overflow-hidden border border-white/50" style={{ boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)' }}>
            <div className="grid md:grid-cols-2 gap-3 items-stretch relative">
              {/* Left Side — Agent label, transcript, Play button (stays in left column, wraps at spaces) */}
              <div className="relative z-10 flex flex-col justify-center min-w-0">
                <div className="mb-3">
                  <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                    {subtitle ? (subtitle.speaker === 'agent' ? 'Agent' : 'User') : 'Agent'}
                  </span>
                </div>

                {/* Transcript: text static; highlighter moves over current word */}
                <div className="relative mb-5 w-full min-w-0" ref={transcriptContainerRef}>
                  {subtitle ? (
                    <>
                      {/* Moving highlighter pill (behind text) */}
                      {highlightRect && (
                        <span
                          className={`absolute rounded-md pointer-events-none transition-all duration-150 ease-out z-0 ${
                            subtitle.speaker === 'agent'
                              ? 'bg-emerald-400/75 border border-emerald-500/70'
                              : 'bg-emerald-100/90 border border-emerald-300/60'
                          }`}
                          style={{
                            top: highlightRect.top,
                            left: highlightRect.left,
                            width: highlightRect.width,
                            height: highlightRect.height,
                          }}
                          aria-hidden
                        />
                      )}
                      {/* Static text — no movement */}
                      <p
                        className={`relative z-10 w-full max-w-full text-2xl md:text-3xl font-normal leading-tight text-black bg-transparent transition-opacity duration-200 ${
                          subtitle.exiting
                            ? 'opacity-0'
                            : 'opacity-100 animate-subtitle-in'
                        }`}
                        aria-live="polite"
                      >
                        {lineWords.map((line, lineIndex) => (
                          <span key={lineIndex} className="block">
                            {line.map((word, j) => {
                              const globalIndex = lineWords
                                .slice(0, lineIndex)
                                .reduce((s, l) => s + l.length, 0) + j;
                              return (
                                <span
                                  key={globalIndex}
                                  ref={(el) => {
                                    wordRefsRef.current[globalIndex] = el;
                                  }}
                                >
                                  {word}{j < line.length - 1 ? '\u00A0' : ''}
                                </span>
                              );
                            })}
                          </span>
                        ))}
                      </p>
                    </>
                  ) : !isPlaying ? (
                    <p className="text-2xl md:text-3xl font-normal text-gray-900 leading-tight">
                      Hi, thanks for calling BrightSmile Dental Clinic. How can I help?
                    </p>
                  ) : (
                    <span className="text-gray-400 text-sm" aria-hidden="true">&nbsp;</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handlePlayStopClick}
                  className="w-fit px-5 py-2.5 bg-gray-800 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-700 transition-colors shadow-md text-sm"
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                      Stop
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-white flex-shrink-0" />
                      Play Demo
                    </>
                  )}
                </button>
              </div>

              {/* Right Side - Image */}
              <div className="relative flex items-center justify-end">
                <div className="h-[180px] w-full max-w-[520px] min-w-[400px] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/asserts/AI Phone_image.png"
                    alt="AI Phone Support"
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover scale-[1.15]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hidden audio element — single element, one file per line, onended triggers next */}
          <audio ref={audioRef} preload="metadata" className="hidden" />

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <Zap className="w-6 h-6 text-gray-900 mb-2" strokeWidth={2} />
              <h3 className="text-base font-normal text-gray-900 mb-2">Fast, Thoughtful Responses</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                Always available and always personal. Your receptionist replies with warmth and clarity on every call.
              </p>
            </div>
            <div>
              <CheckCircle className="w-6 h-6 text-gray-900 mb-2" strokeWidth={2} />
              <h3 className="text-base font-normal text-gray-900 mb-2">Aligned With Your Business</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                Armed with your services, policies, and preferences, it gives every caller clear, on-brand support.
              </p>
            </div>
            <div>
              <FileText className="w-6 h-6 text-gray-900 mb-2" strokeWidth={2} />
              <h3 className="text-base font-normal text-gray-900 mb-2">Integrated Into Your Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                Automates scheduling, changes, lead intake, and updating your records — freeing your team from admin.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => openVoiceModal?.()}
              className="px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Start A Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPhoneSupportSection;
