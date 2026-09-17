// Ambient Audio synthesis for Captain Chai (Procedural Web Audio API)

let audioCtx = null;
let isSoundEnabled = true;

const getAudioContext = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const toggleAudio = (enabled) => {
  isSoundEnabled = enabled !== undefined ? enabled : !isSoundEnabled;
  try {
    localStorage.setItem('captain_chai_sound', isSoundEnabled ? 'true' : 'false');
  } catch {
    // Ignore
  }
  return isSoundEnabled;
};

export const getSoundEnabled = () => {
  try {
    const stored = localStorage.getItem('captain_chai_sound');
    if (stored !== null) return stored === 'true';
  } catch {
    // Ignore
  }
  return true;
};

// 1. Subtle atmospheric breath / steam wisp sound
export const playSteamWhoosh = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const bufferSize = ctx.sampleRate * 0.5;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(300, now);
  filter.frequency.exponentialRampToValueAtTime(800, now + 0.2);
  filter.frequency.exponentialRampToValueAtTime(150, now + 0.5);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.06, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + 0.5);
};

// 2. Gentle tactile tumbler clink
export const playGlassClink = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(1800, now);
  osc.frequency.exponentialRampToValueAtTime(1200, now + 0.2);

  gain.gain.setValueAtTime(0.04, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.2);
};

// 3. Subtle message pop
export const playMessageTone = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(540, now);
  osc.frequency.exponentialRampToValueAtTime(720, now + 0.08);

  gain.gain.setValueAtTime(0.04, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.1);
};

// 4. Sincere confirmation chime
export const playConfirmationChime = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [440, 554.37, 659.25];
  notes.forEach((freq, idx) => {
    const now = ctx.currentTime + idx * 0.12;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.8);
  });
};

// 5. Resonant brass stall bell chime
export const playBrassBellChime = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const harmonics = [
    { freq: 880, gain: 0.14, decay: 2.2 },
    { freq: 1760, gain: 0.08, decay: 1.6 },
    { freq: 2640, gain: 0.04, decay: 1.1 },
    { freq: 528, gain: 0.07, decay: 2.8 },
  ];

  harmonics.forEach(({ freq, gain: gLevel, decay }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(gLevel, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + decay);
  });
};

// 6. Hyper-velocity Kinetic Boom & Distress Pulse
export const playEmergencyDistressPulse = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Sub-bass impact shockwave
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(140, now);
  osc.frequency.exponentialRampToValueAtTime(32, now + 0.6);

  gain.gain.setValueAtTime(0.35, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.7);

  // High distress flare resonance
  const flare = ctx.createOscillator();
  const flareGain = ctx.createGain();
  flare.type = 'sawtooth';
  flare.frequency.setValueAtTime(980, now);
  flare.frequency.exponentialRampToValueAtTime(440, now + 0.4);

  flareGain.gain.setValueAtTime(0.08, now);
  flareGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

  flare.connect(flareGain);
  flareGain.connect(ctx.destination);
  flare.start(now);
  flare.stop(now + 0.5);
};

// 7. Tactical Radar Sonar Sweep
export const playRadarSweepPing = () => {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(950, now);
  osc.frequency.exponentialRampToValueAtTime(1400, now + 0.15);
  osc.frequency.exponentialRampToValueAtTime(700, now + 0.35);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.5);
};

