/* ============================================================
   QOOL — Game State Manager
   ============================================================ */

// Predefined team color palette (hex values)
const TEAM_COLORS = [
  { name: 'teal',   hex: '#1dcd93' },
  { name: 'blue',   hex: '#3b82f6' },
  { name: 'purple', hex: '#a855f7' },
  { name: 'red',    hex: '#f43f5e' },
  { name: 'amber',  hex: '#f59e0b' },
  { name: 'pink',   hex: '#ec4899' },
];

const GameState = {
  // Setup
  teamA: { name: 'الفريق أ', color: '#1dcd93', hasUsedSteal: false, roundScores: [0,0,0] },
  teamB: { name: 'الفريق ب', color: '#3b82f6', hasUsedSteal: false, roundScores: [0,0,0] },
  categories: [],
  currentRound: 0,
  gameLength: 'quick', // 'quick' or 'epic'

  // Round 1
  r1: {
    questions: [],
    questionIndex: 0,
    activeTeam: 'A',
    strikesA: 0,
    strikesB: 0,
    scoreA: 0,
    scoreB: 0,
    attackUsedA: false,
    attackUsedB: false,
    doubleAnswerRequired: false,   // Attack mode: next team must answer twice
    doubleAnswerCount: 0,
    suddenDeathTeam: null,         // Which team is in sudden death
    revealedAnswers: [],           // Answers already revealed this question
    timerPaused: true,
    done: false,
  },

  // Round 2
  r2: {
    questions: [],
    questionIndex: 0,
    activeTeam: null,              // null until face-off resolved
    strikesActive: 0,
    revealedAnswers: [],
    currentBank: 0,
    scoreA: 0,
    scoreB: 0,
    stealPhase: false,
    stealTeam: null,
    multiplier: 1,
    done: false,
  },

  // Round 3
  r3: {
    questions: [],
    questionIndex: 0,
    scoreA: 0,
    scoreB: 0,
    lockedOutTeam: null,           // Team locked out on current question
    clutchMode: false,
    pointsPerQ: 1,
    done: false,
  },

  // Global stats for the final screen
  stats: {
    r1StrikesA: 0, r1StrikesB: 0,
    r2BankWonA: 0, r2BankWonB: 0,
    stealsAttemptedA: 0, stealsAttemptedB: 0,
    stealsSuccessA: 0,  stealsSuccessB: 0,
  },

  reset() {
    this.teamA = { name: 'الفريق أ', color: '#1dcd93', hasUsedSteal: false, roundScores: [0,0,0] };
    this.teamB = { name: 'الفريق ب', color: '#3b82f6', hasUsedSteal: false, roundScores: [0,0,0] };
    this.categories = [];
    this.currentRound = 0;
    this.gameLength = 'quick';
    this.resetR1();
    this.resetR2();
    this.resetR3();
    this.stats = { r1StrikesA:0, r1StrikesB:0, r2BankWonA:0, r2BankWonB:0, stealsAttemptedA:0, stealsAttemptedB:0, stealsSuccessA:0, stealsSuccessB:0 };
    this.coinFlipWinner = null;
  },

  resetR1() {
    this.r1 = { questions:[], questionIndex:0, activeTeam:'A', strikesA:0, strikesB:0, scoreA:0, scoreB:0, attackUsedA:false, attackUsedB:false, doubleAnswerRequired:false, doubleAnswerCount:0, suddenDeathTeam:null, revealedAnswers:[], timerPaused:true, done:false };
  },
  resetR2() {
    this.r2 = { questions:[], questionIndex:0, activeTeam:null, strikesActive:0, revealedAnswers:[], currentBank:0, scoreA:0, scoreB:0, stealPhase:false, stealTeam:null, multiplier:1, done:false };
  },
  resetR3() {
    this.r3 = { questions:[], questionIndex:0, scoreA:0, scoreB:0, lockedOutTeam:null, clutchMode:false, pointsPerQ:1, done:false };
  },

  restore(data) {
    if (!data) return;
    if (data.teamA) this.teamA = data.teamA;
    if (data.teamB) this.teamB = data.teamB;
    if (data.categories) this.categories = data.categories;
    if (data.currentRound !== undefined) this.currentRound = data.currentRound;
    if (data.gameLength) this.gameLength = data.gameLength;
    if (data.r1) this.r1 = data.r1;
    if (data.r2) this.r2 = data.r2;
    if (data.r3) this.r3 = data.r3;
    if (data.stats) this.stats = data.stats;
    // Re-apply team colors
    applyTeamColors();
  },

  getTotalScore(team) {
    return team === 'A'
      ? this.r1.scoreA + this.r2.scoreA + this.r3.scoreA
      : this.r1.scoreB + this.r2.scoreB + this.r3.scoreB;
  },

  getWinner() {
    const a = this.getTotalScore('A');
    const b = this.getTotalScore('B');
    if (a > b) return 'A';
    if (b > a) return 'B';
    return 'DRAW';
  },

  teamName(team) {
    return team === 'A' ? this.teamA.name : this.teamB.name;
  },

  teamColor(team) {
    return team === 'A' ? this.teamA.color : this.teamB.color;
  },

  currentQ1() { return this.r1.questions[this.r1.questionIndex] || null; },
  currentQ2() { return this.r2.questions[this.r2.questionIndex] || null; },
  currentQ3() { return this.r3.questions[this.r3.questionIndex] || null; },

  // How many questions per round based on game length
  getR1Limit() { return this.gameLength === 'epic' ? 8 : 5; },
  getR3Limit() { return this.gameLength === 'epic' ? 15 : 10; },

  skipCurrentQuestion(roundNum) {
    const rKey = 'r' + roundNum;
    const rData = this[rKey];
    if (!rData || !rData.questions || rData.questionIndex >= rData.questions.length) return false;
    
    // Attempt to grab a new question that isn't already queued
    const cats = roundNum === 2 ? ['general'] : this.categories;
    const allQs = typeof getQuestions === 'function' ? getQuestions('round' + roundNum, cats) : [];
    const currentQList = rData.questions.map(q => q.ar);
    
    let replacement = allQs.find(q => !currentQList.includes(q.ar));
    if (replacement) {
      rData.questions[rData.questionIndex] = replacement;
      return true;
    }
    return false;
  }
};

/* ─── Apply Team Colors to CSS Variables ─────────────────── */
function applyTeamColors() {
  const root = document.documentElement;
  root.style.setProperty('--clr-team-a', GameState.teamA.color);
  root.style.setProperty('--clr-team-b', GameState.teamB.color);
}

/* ─── Simple Router ───────────────────────────────────────── */
const Router = {
  current: 'home',
  history: [],

  go(screenId) {
    if (typeof Audio !== 'undefined' && Audio.stopAmbient) Audio.stopAmbient();

    // Deactivate ALL currently active screens (belt-and-suspenders)
    document.querySelectorAll('.screen.active').forEach(s => {
      s.classList.remove('active');
      s.scrollTop = 0;
    });
    const next = document.getElementById('screen-' + screenId);
    if (!next) { console.error('[Router.go] Screen not found:', screenId); return; }
    next.classList.add('active');
    next.scrollTop = 0;
    this.history.push(this.current);
    this.current = screenId;
  },

  back() {
    if (this.history.length > 0) {
      const prev = this.history.pop();
      // Navigate without pushing to history again
      document.querySelectorAll('.screen.active').forEach(s => {
        s.classList.remove('active');
        s.scrollTop = 0;
      });
      const target = document.getElementById('screen-' + prev);
      if (target) { target.classList.add('active'); target.scrollTop = 0; }
      this.current = prev;
    }
  }
};

/* ─── Toast Notification ──────────────────────────────────── */
function showToast(msg, type = '', duration = 2000) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast' + (type ? ' toast-' + type : '');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ─── Confetti ────────────────────────────────────────────── */
function fireConfetti(count = 60) {
  const colors = [GameState.teamA.color, GameState.teamB.color, '#f59e0b', '#fff', '#f43f5e', '#a855f7'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -20px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 10}px;
      height: ${6 + Math.random() * 10}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.8}s;
    `;
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

/* ─── Animated Score Counter ──────────────────────────────── */
function animateCount(el, target, duration = 800) {
  const start = parseInt(el.textContent) || 0;
  const diff = target - start;
  if (diff === 0) return;
  const steps = 20;
  const step = diff / steps;
  let current = start;
  let count = 0;
  const interval = setInterval(() => {
    count++;
    current += step;
    el.textContent = Math.round(count < steps ? current : target);
    if (count >= steps) clearInterval(interval);
  }, duration / steps);
}

/* ─── Editable Score ──────────────────────────────────────── */
/**
 * Makes a score display element directly editable by the referee.
 * Click → an <input> overlay appears → Enter or blur saves the value.
 * @param {string}   elId    - ID of the score display element
 * @param {function} getVal  - () => currentValue (number)
 * @param {function} setVal  - (n) => sets state and re-renders
 */
function makeScoreEditable(elId, getVal, setVal) {
  const el = document.getElementById(elId);
  if (!el) return;

  // Avoid double-wiring on every render
  if (el._scoreEditWired) return;
  el._scoreEditWired = true;

  el.style.cursor = 'text';
  el.title = i18n.lang === 'ar' ? 'انقر لتعديل النتيجة' : 'Click to edit score';

  el.addEventListener('click', (e) => {
    e.stopPropagation();
    if (el.querySelector('input')) return; // already open

    const current = getVal();
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.value = current;
    input.style.cssText = `
      width: 90%; max-width: 80px;
      font-size: inherit; font-weight: inherit; font-family: inherit;
      text-align: center; background: rgba(255,255,255,0.15);
      border: 2px solid var(--clr-primary); border-radius: 8px;
      color: inherit; padding: 2px 4px; outline: none;
    `;

    el.textContent = '';
    el.appendChild(input);
    input.focus();
    input.select();

    let isCancelled = false;
    const save = () => {
      if (isCancelled) return;
      const raw = parseInt(input.value, 10);
      const val = isNaN(raw) || raw < 0 ? current : raw;
      el._scoreEditWired = false; // allow re-wire on next render
      setVal(val);
    };

    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') { ev.preventDefault(); input.blur(); }
      if (ev.key === 'Escape') { 
        isCancelled = true;
        el._scoreEditWired = false; 
        setVal(current); 
      }
    });
    input.addEventListener('blur', save);
  });
}

/* ─── Theme Manager ───────────────────────────────────────── */
const Theme = {
  current: localStorage.getItem('qool_theme') || 'dark',

  apply(theme) {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qool_theme', theme);
    document.querySelectorAll('.theme-icon').forEach(el => {
      el.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    });
  },

  toggle() {
    this.apply(this.current === 'dark' ? 'light' : 'dark');
  }
};
