/* ============================================================
   QOOL — Audio Engine (Web Audio API — no external files needed)
   ============================================================ */

const Audio = (() => {
  let ctx = null;
  let muted = false;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  function playTone(freq, type, duration, vol = 0.3, delay = 0) {
    if (muted) return;
    try {
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain);
      gain.connect(c.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, c.currentTime + delay);
      gain.gain.setValueAtTime(vol, c.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
      osc.start(c.currentTime + delay);
      osc.stop(c.currentTime + delay + duration);
    } catch(e) {}
  }

  let ambientOsc = null;
  let ambientGain = null;

  function stopAmbient() {
    if (ambientOsc) {
      try {
        const c = getCtx();
        if (ambientGain) ambientGain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.5);
        ambientOsc.stop(c.currentTime + 0.5);
      } catch(e) {}
      ambientOsc = null;
      ambientGain = null;
    }
  }

  function startAmbient() {
    if (muted || ambientOsc) return;
    try {
      const c = getCtx();
      ambientOsc = c.createOscillator();
      ambientGain = c.createGain();
      ambientOsc.connect(ambientGain);
      ambientGain.connect(c.destination);
      
      ambientOsc.type = 'triangle'; // rough edge drone
      ambientOsc.frequency.setValueAtTime(55, c.currentTime); // Low bass Bb
      
      // Fade in
      ambientGain.gain.setValueAtTime(0.001, c.currentTime);
      ambientGain.gain.exponentialRampToValueAtTime(0.1, c.currentTime + 2.0);
      
      ambientOsc.start(c.currentTime);
    } catch(e) {}
  }

  return {
    get muted() { return muted; },

    toggle() {
      muted = !muted;
      if (muted) stopAmbient();
      return muted;
    },

    startAmbient,
    stopAmbient,

    correct() {
      playTone(523, 'sine', 0.12, 0.4);
      playTone(784, 'sine', 0.2, 0.4, 0.1);
    },

    wrong() {
      playTone(200, 'sawtooth', 0.3, 0.5);
      playTone(150, 'sawtooth', 0.3, 0.5, 0.15);
    },

    tick() {
      playTone(880, 'square', 0.05, 0.15);
    },

    timerLow() {
      // Rapid ticking for last 3 seconds
      for (let i = 0; i < 4; i++) {
        playTone(1100, 'square', 0.06, 0.3, i * 0.25);
      }
    },

    bombExplosion() {
      playTone(80, 'sawtooth', 0.6, 0.8);
      playTone(60, 'sawtooth', 0.6, 0.8, 0.1);
    },

    steal() {
      // Rising dramatic tone
      playTone(300, 'sine', 0.1, 0.4);
      playTone(400, 'sine', 0.1, 0.4, 0.1);
      playTone(550, 'sine', 0.2, 0.4, 0.2);
    },

    siren() {
      // Alternating tones for clutch mode
      for (let i = 0; i < 6; i++) {
        playTone(i % 2 === 0 ? 880 : 660, 'sawtooth', 0.15, 0.3, i * 0.16);
      }
    },

    victory() {
      // Fanfare
      const notes = [523, 659, 784, 1047];
      notes.forEach((f, i) => playTone(f, 'sine', 0.35, 0.5, i * 0.18));
      setTimeout(() => {
        const notes2 = [784, 880, 1047];
        notes2.forEach((f, i) => playTone(f, 'sine', 0.5, 0.6, i * 0.2));
      }, 900);
    },

    coinFlip() {
      for (let i = 0; i < 8; i++) {
        playTone(600 + i * 80, 'square', 0.05, 0.2, i * 0.07);
      }
      playTone(1200, 'sine', 0.3, 0.5, 0.6);
    },

    reveal() {
      playTone(440, 'sine', 0.08, 0.3);
      playTone(660, 'sine', 0.12, 0.25, 0.08);
    },

    bankCash() {
      // Cha-ching!
      playTone(880, 'sine', 0.08, 0.4);
      playTone(1100, 'sine', 0.12, 0.3, 0.1);
      playTone(1320, 'sine', 0.2, 0.4, 0.2);
    },
  };
})();
