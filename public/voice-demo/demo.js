/**
 * Voice conversation demo controller.
 * Plays scripted conversation steps sequentially using a single <audio> element.
 * No hardcoded durations — uses audio.onended to advance.
 */

(function () {
  'use strict';

  // Conversation data: speaker, subtitle text, audio path (mapped to existing files)
  const conversation = [
    { speaker: 'agent', text: 'Hi, thanks for calling BrightSmile Dental Clinic. How can I help?', audio: '/audio/Agent-1.mp3' },
    { speaker: 'customer', text: 'Hi, I\'d like to book an appointment.', audio: '/audio/user-1.mp3' },
    { speaker: 'agent', text: 'Sure. Is this your first visit with our clinic?', audio: '/audio/Agent-2.mp3' },
    { speaker: 'customer', text: 'Yes, it is.', audio: '/audio/User-2.mp3' },
    { speaker: 'agent', text: 'Great. May I know what kind of appointment you\'re looking for?', audio: '/audio/Agent-3.mp3' },
    { speaker: 'customer', text: 'Just a regular check-up.', audio: '/audio/User-3.mp3' },
    { speaker: 'agent', text: 'Got it — a general dental check-up.', audio: '/audio/Agent-4.mp3' },
    { speaker: 'agent', text: 'Do you have a preferred date or time?', audio: '/audio/Agent-5.mp3' },
    { speaker: 'customer', text: 'Sometime this Friday, in the morning.', audio: '/audio/User-4.mp3' },
    { speaker: 'agent', text: 'Okay, Friday morning works.', audio: '/audio/Agent-6.mp3' },
    { speaker: 'agent', text: 'I\'ve scheduled your check-up for Friday morning. You\'re all set!', audio: '/audio/Agent-7.mp3' },
    { speaker: 'agent', text: 'Thank you for calling BrightSmile Dental Clinic. We look forward to seeing you.', audio: '/audio/Agent-7.mp3' }
  ];

  const SUBTITLE_DELAY_MS = 300;

  let currentIndex = 0;
  let isPlaying = false;

  const el = {
    playBtn: null,
    subtitleBox: null,
    audio: null
  };

  function getEl(id) {
    return document.getElementById(id);
  }

  /**
   * Show one subtitle. Applies speaker-based alignment and style via class.
   */
  function showSubtitle(text, speaker) {
    const box = el.subtitleBox;
    if (!box) return;
    box.textContent = text;
    box.className = 'voice-demo-subtitle voice-demo-subtitle--visible voice-demo-subtitle--' + speaker;
  }

  /**
   * Hide subtitle with exit animation, then optional callback after animation.
   */
  function hideSubtitle(callback) {
    const box = el.subtitleBox;
    if (!box) {
      if (callback) callback();
      return;
    }
    box.classList.remove('voice-demo-subtitle--visible');
    box.classList.add('voice-demo-subtitle--exit');
    setTimeout(function () {
      box.classList.remove('voice-demo-subtitle--exit');
      box.textContent = '';
      if (callback) callback();
    }, 280);
  }

  /**
   * Play the next step: hide current subtitle, short delay, show next subtitle and play its audio.
   */
  function playStep(index) {
    if (index >= conversation.length) {
      endPlayback();
      return;
    }

    const step = conversation[index];
    currentIndex = index;

    function showAndPlay() {
      showSubtitle(step.text, step.speaker);
      const audio = el.audio;
      if (!audio) {
        playStep(index + 1);
        return;
      }
      audio.src = step.audio;
      audio.load();
      audio.play().catch(function () {
        playStep(index + 1);
      });
    }

    // First line: show immediately. Later lines: hide current, then delay, then show next.
    if (index === 0 && !el.subtitleBox.textContent) {
      showAndPlay();
      return;
    }

    hideSubtitle(function () {
      setTimeout(showAndPlay, SUBTITLE_DELAY_MS);
    });
  }

  function endPlayback() {
    isPlaying = false;
    hideSubtitle(function () {});
    if (el.playBtn) {
      el.playBtn.disabled = false;
      el.playBtn.textContent = 'Play Demo';
    }
  }

  function startPlayback() {
    if (isPlaying) return;
    isPlaying = true;
    if (el.playBtn) {
      el.playBtn.disabled = true;
      el.playBtn.textContent = 'Playing…';
    }
    currentIndex = 0;
    playStep(0);
  }

  function bindAudioEnded() {
    const audio = el.audio;
    if (!audio) return;
    audio.onended = function () {
      playStep(currentIndex + 1);
    };
  }

  function init() {
    el.playBtn = getEl('voice-demo-play');
    el.subtitleBox = getEl('voice-demo-subtitle');
    el.audio = getEl('voice-demo-audio');

    if (el.playBtn) {
      el.playBtn.addEventListener('click', startPlayback);
    }

    bindAudioEnded();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
