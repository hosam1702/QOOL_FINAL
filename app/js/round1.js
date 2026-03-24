/* ============================================================
   QOOL — Round 1: Ping-Pong Battle
   ============================================================ */

let _r1Timer = null;
const R1_TIMER_SECS = 20;

function initRound1() {
  const s = GameState;
  s.resetR1();
  const limit = s.getR1Limit();
  const allQ  = getQuestions('round1', s.categories);
  s.r1.questions = allQ.slice(0, limit);
  if (s.r1.questions.length === 0) {
    showToast(i18n.t('no_questions'), 'wrong');
    Router.go('setup'); return;
  }
  s.r1.activeTeam = 'A';
  renderRound1();
}

/* ──────────── RENDER ──────────── */
function renderRound1() {
  const s  = GameState;
  const r1 = s.r1;
  const q  = s.currentQ1();

  if (!q || r1.done) { finishRound1(); return; }

  _stopR1Timer();

  const lang = i18n.lang;

  /* Active team banner */
  const activeColor = s.teamColor(r1.activeTeam);
  document.getElementById('r1-active-badge').textContent = i18n.t('your_turn');
  document.getElementById('r1-active-name').textContent  = s.teamName(r1.activeTeam);
  document.getElementById('r1-active-name').style.color  = activeColor;

  // Double-answer indicator
  const dbl = document.getElementById('r1-double-banner');
  if (r1.doubleAnswerRequired) {
    dbl.style.display = 'flex';
    const remaining = 2 - r1.doubleAnswerCount;
    dbl.textContent = `⚔️ ${i18n.t('attack_double')} (${remaining} ${i18n.lang === 'ar' ? 'متبقية' : 'left'})`;
  } else {
    dbl.style.display = 'none';
  }

  /* Question */
  document.getElementById('r1-q-number').textContent   = `${i18n.t('current_question')} ${r1.questionIndex + 1} / ${s.r1.questions.length}`;
  document.getElementById('r1-q-category').textContent = i18n.t('cat_' + q.category);

  // Parse question text (format: "question text\n(الإجابة: ...)")
  const rawText = lang === 'ar' ? q.ar : q.en;
  const parts   = rawText.split('\n');
  document.getElementById('r1-q-text').textContent = parts[0];

  /* Build answer tiles from the question answers field */
  _buildAnswerTiles(q, r1);

  /* Scores & strikes */
  renderR1Scores();

  /* Action buttons */
  const btnValid  = document.getElementById('r1-btn-found');
  const btnStrike = document.getElementById('r1-btn-strike');
  const btnAttack = document.getElementById('r1-btn-attack');

  // "Found" button disabled until an answer tile is selected
  btnFound_setSelected(null);

  btnStrike.textContent = i18n.t('add_strike');
  btnStrike.onclick = () => handleR1Strike();

  // Attack button
  const attackUsed = r1.activeTeam === 'A' ? r1.attackUsedA : r1.attackUsedB;
  btnAttack.textContent = attackUsed ? i18n.t('attack_used') : i18n.t('attack_btn');
  btnAttack.disabled    = attackUsed || r1.doubleAnswerRequired;
  btnAttack.onclick     = () => handleR1Attack();

  // Sudden death mode
  const sdSection = document.getElementById('r1-sudden-death');
  if (r1.suddenDeathTeam) {
    sdSection.classList.remove('hidden');
    document.getElementById('r1-sd-team').textContent = s.teamName(r1.suddenDeathTeam);
    document.getElementById('r1-sd-correct').onclick = () => handleR1SuddenDeath(true);
    document.getElementById('r1-sd-wrong').onclick   = () => handleR1SuddenDeath(false);
    document.getElementById('r1-normal-actions').classList.add('hidden');
    _stopR1Timer();
  } else {
    sdSection.classList.add('hidden');
    document.getElementById('r1-normal-actions').classList.remove('hidden');
    
    // Only start timer if it wasn't manually paused or stopped
    if (!r1.timerPaused && !_r1Timer) {
      _startR1Timer();
    }
  }

  /* Header buttons */
  document.getElementById('btn-theme-r1').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-r1').onclick  = () => { i18n.toggleLang(); refreshAllText(); renderRound1(); };
  document.getElementById('btn-end-r1').onclick   = () => confirmEndRound(() => finishRound1());

  /* ── REFEREE DASHBOARD CONTROLS ── */
  // Manual Turn Control
  document.getElementById('r1-card-a').onclick = () => { if (!r1.suddenDeathTeam) { r1.activeTeam = 'A'; renderRound1(); } };
  document.getElementById('r1-card-b').onclick = () => { if (!r1.suddenDeathTeam) { r1.activeTeam = 'B'; renderRound1(); } };

  // Timer Controls
  document.getElementById('r1-btn-pause-timer').onclick = () => {
    r1.timerPaused = !r1.timerPaused;
    if (r1.timerPaused) { _stopR1Timer(); document.getElementById('r1-btn-pause-timer').innerHTML = '<span class="material-symbols-outlined" style="font-size:14px">play_arrow</span>'; }
    else { _startR1Timer(); document.getElementById('r1-btn-pause-timer').innerHTML = '<span class="material-symbols-outlined" style="font-size:14px">pause</span>'; }
  };
  document.getElementById('r1-btn-reset-timer').onclick = () => {
    _stopR1Timer(); _r1TimeLeft = R1_TIMER_SECS; r1.timerPaused = true;
    document.getElementById('r1-btn-pause-timer').innerHTML = '<span class="material-symbols-outlined" style="font-size:14px">play_arrow</span>';
    _updateTimerDisplay();
  };

  // Score Controls
  document.getElementById('r1-btn-score-up-a').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r1.scoreA += 10; renderRound1(); };
  document.getElementById('r1-btn-score-dn-a').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r1.scoreA = Math.max(0, r1.scoreA - 10); renderRound1(); };
  document.getElementById('r1-btn-score-up-b').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r1.scoreB += 10; renderRound1(); };
  document.getElementById('r1-btn-score-dn-b').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r1.scoreB = Math.max(0, r1.scoreB - 10); renderRound1(); };

  // Strike Undo
  document.getElementById('r1-btn-undo-strike-a').onclick = (e) => { e.stopPropagation(); r1.strikesA = Math.max(0, r1.strikesA - 1); renderRound1(); };
  document.getElementById('r1-btn-undo-strike-b').onclick = (e) => { e.stopPropagation(); r1.strikesB = Math.max(0, r1.strikesB - 1); renderRound1(); };

  // Steal/Attack Token Ability Triggers
  document.getElementById('r1-steal-a').onclick = (e) => { e.stopPropagation(); handleR1LifelineSteal('A'); };
  document.getElementById('r1-steal-b').onclick = (e) => { e.stopPropagation(); handleR1LifelineSteal('B'); };
  document.getElementById('r1-attack-a').onclick = (e) => { e.stopPropagation(); handleR1Attack('A'); };
  document.getElementById('r1-attack-b').onclick = (e) => { e.stopPropagation(); handleR1Attack('B'); };

  // Next Question Manual Advance
  document.getElementById('r1-btn-next-q').onclick = () => nextR1Question();
  const skipBtnR1 = document.getElementById('r1-btn-skip-q');
  if (skipBtnR1) skipBtnR1.onclick = () => {
    if (GameState.skipCurrentQuestion(1)) {
      showToast('⏭️ ' + (i18n.t('skip_question') || 'تم تغيير السؤال'), 'warn', 1500);
      _stopR1Timer();
      _r1TimeLeft = R1_TIMER_SECS;
      GameState.r1.timerPaused = true;
      renderRound1();
    } else {
      showToast('⚠️ لا يوجد أسئلة إضافية في هذا القسم', 'wrong', 2000);
    }
  };

  // Custom Correct Answer
  document.getElementById('r1-btn-force-correct').onclick = () => {
    const r1 = GameState.r1;
    Audio.correct();
    _stopR1Timer();
    
    // Double-answer mode tracking
    if (r1.doubleAnswerRequired) {
      r1.doubleAnswerCount++;
      if (r1.doubleAnswerCount >= 2) {
        r1.doubleAnswerRequired = false;
        r1.doubleAnswerCount = 0;
        // Switch turn back to the team that used the attack
        r1.activeTeam = r1.activeTeam === 'A' ? 'B' : 'A';
      }
      // If only 1 of 2 answered, stay on same team
    } else {
      // Normal: switch turn
      r1.activeTeam = r1.activeTeam === 'A' ? 'B' : 'A';
    }

    _r1TimeLeft = R1_TIMER_SECS;
    r1.timerPaused = true;
    showToast(i18n.t('custom_correct') || '✅ إجابة مخصصة', 'correct', 1500);
    renderRound1();
  };
}

/* ── Parse embedded answers from question text ── */
// Format: "question\n(الإجابة: A — B — C)" or "(Answer: A — B — C)"
function _parseAnswers(q) {
  // Prefer structured arrays if present
  const lang = i18n.lang;
  if (lang === 'ar' && q.answers_ar && q.answers_ar.length) return q.answers_ar;
  if (lang === 'en' && q.answers_en && q.answers_en.length) return q.answers_en;

  // Fall back to parsing the text (both ar & en text are the same in current data)
  const raw = q.ar || q.en || '';
  // Match content inside parentheses that contains الإجابة: or Answer:
  const match = raw.match(/[\(](الإجابة:|Answer:)\s*([^\)]+)[\)]/i);
  if (match) {
    return match[2]
      .split(/\s*[—\-,،]\s*/)
      .map(a => a.trim())
      .filter(Boolean);
  }
  return [];
}

/* ── Build clickable answer tiles ── */
let _selectedAnswerIdx = null;
function _buildAnswerTiles(q, r1) {
  _selectedAnswerIdx = null;
  const container = document.getElementById('r1-answers-board');
  if (!container) return;
  container.innerHTML = '';

  const answers = _parseAnswers(q);
  if (!answers.length) {
    container.innerHTML = `<div style="color:var(--text-secondary);font-size:0.9rem;padding:8px;">${i18n.t('skip_answer')}</div>`;
    return;
  }

  answers.forEach((ans, idx) => {
    if (r1.revealedAnswers && r1.revealedAnswers.includes(idx)) {
      const chip = document.createElement('div');
      chip.className = 'answer-chip found';
      chip.textContent = ans;
      container.appendChild(chip);
    } else {
      const chip = document.createElement('div');
      chip.className = 'answer-chip';
      chip.innerHTML = `<span class="secret-answer">${ans}</span>`;
      chip.onclick = () => {
        container.querySelectorAll('.answer-chip:not(.found)').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        _selectedAnswerIdx = idx;
        document.getElementById('r1-btn-found').disabled = false;
        document.getElementById('r1-btn-found').onclick  = () => handleR1AnswerFound(idx);
      };
      container.appendChild(chip);
    }
  });

  document.getElementById('r1-btn-found').disabled = true;
}

function btnFound_setSelected(idx) {
  const btn = document.getElementById('r1-btn-found');
  if (!btn) return;
  btn.disabled = (idx === null);
  btn.textContent = i18n.t('answer_found');
}

/* ── Adjustable Timer ── */
function _startR1Timer() {
  if (typeof _r1TimeLeft === 'undefined') _r1TimeLeft = R1_TIMER_SECS;
  _updateTimerDisplay();
  Audio.startAmbient();
  _r1Timer = setInterval(() => {
    _r1TimeLeft--;
    _updateTimerDisplay();
    if (_r1TimeLeft <= 5) {
      Audio.timerLow();
      const el = document.getElementById('r1-timer-bar');
      if (el) el.style.background = 'var(--clr-wrong)';
    } else {
      Audio.tick();
    }
    if (_r1TimeLeft <= 0) {
      _stopR1Timer();
      Audio.bombExplosion();
      // Time is up. We let the referee decide what to do manually (no popup).
    }
  }, 1000);
}
function _stopR1Timer() {
  clearInterval(_r1Timer);
  _r1Timer = null;
  Audio.stopAmbient();
}

function _updateTimerDisplay() {
  const el = document.getElementById('r1-timer-value');
  const bar = document.getElementById('r1-timer-bar');
  if (el)  el.textContent = _r1TimeLeft;
  if (bar) {
    const pct = (_r1TimeLeft / R1_TIMER_SECS) * 100;
    bar.style.width = pct + '%';
    bar.style.background = _r1TimeLeft <= 5 ? '#f43f5e' : _r1TimeLeft <= 10 ? '#f59e0b' : 'var(--clr-primary)';
    
    if (_r1TimeLeft <= 5 && _r1TimeLeft > 0 && !_r1TimerPaused()) {
      bar.classList.add('tension-pulse');
    } else {
      bar.classList.remove('tension-pulse');
    }
  }
}

function _r1TimerPaused() {
  return GameState && GameState.r1 && GameState.r1.timerPaused;
}

/* ── Render Score / Strike panels ── */
function renderR1Scores() {
  const s  = GameState;
  const r1 = s.r1;

  document.getElementById('r1-score-a').textContent = r1.scoreA;
  document.getElementById('r1-score-b').textContent = r1.scoreB;
  document.getElementById('r1-name-a').textContent  = s.teamA.name;
  document.getElementById('r1-name-b').textContent  = s.teamB.name;

  // Active highlight
  const isActive = (team) => r1.activeTeam === team && !r1.suddenDeathTeam;
  document.getElementById('r1-card-a').className = 'score-card team-a-card' + (isActive('A') ? ' active-team' : '');
  document.getElementById('r1-card-b').className = 'score-card team-b-card' + (isActive('B') ? ' active-team' : '');

  // Strikes (3 max)
  renderStrikeDots('r1-strikes-a', r1.strikesA, 3);
  renderStrikeDots('r1-strikes-b', r1.strikesB, 3);

  // Steal tokens
  _renderStealToken('r1-steal-a', s.teamA.hasUsedSteal);
  _renderStealToken('r1-steal-b', s.teamB.hasUsedSteal);

  // Attack availability
  const attackAvailA = !r1.attackUsedA;
  const attackAvailB = !r1.attackUsedB;
  const elAA = document.getElementById('r1-attack-a');
  const elAB = document.getElementById('r1-attack-b');
  if (elAA) elAA.className = 'attack-token' + (attackAvailA ? '' : ' used');
  if (elAB) elAB.className = 'attack-token' + (attackAvailB ? '' : ' used');
}

function renderStrikeDots(containerId, count, max) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  for (let i = 0; i < max; i++) {
    const dot = document.createElement('span');
    dot.className = 'tracker-dot' + (i < count ? ' filled-wrong' : '');
    dot.innerHTML = i < count ? '<span class="material-symbols-outlined" style="font-size:13px">close</span>' : '';
    el.appendChild(dot);
  }
}

function _renderStealToken(elId, used) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.className = 'steal-token-badge' + (used ? ' used' : ' available');
  el.textContent = used ? i18n.t('steal_token_used') : '☠️ ' + i18n.t('steal_token');
}

/* ──────────── HANDLERS ──────────── */

function handleR1AnswerFound(idx) {
  _stopR1Timer();
  const r1 = GameState.r1;
  if (!r1.revealedAnswers) r1.revealedAnswers = [];
  r1.revealedAnswers.push(idx);
  Audio.correct();
  showToast('✅ ' + i18n.t('answer_found'), 'correct', 1000);

  // Double-answer mode tracking
  if (r1.doubleAnswerRequired) {
    r1.doubleAnswerCount++;
    if (r1.doubleAnswerCount >= 2) {
      r1.doubleAnswerRequired = false;
      r1.doubleAnswerCount = 0;
      // Switch turn back to the team that used the attack
      r1.activeTeam = r1.activeTeam === 'A' ? 'B' : 'A';
    }
    // If only 1 of 2 answered, stay on same team
  } else {
    // Normal: switch turn
    r1.activeTeam = r1.activeTeam === 'A' ? 'B' : 'A';
  }

  // Check if all answers found — resolve by strikes
  const q = GameState.currentQ1();
  const totalAnswers = q ? _parseAnswers(q).length : 0;
  if (totalAnswers && r1.revealedAnswers.length >= totalAnswers) {
    _resolveByStrikes();
    return;
  }
  
  _r1TimeLeft = R1_TIMER_SECS;
  r1.timerPaused = true;
  renderRound1();
}

function handleR1Strike() {
  _stopR1Timer();
  const r1 = GameState.r1;
  if (r1.activeTeam === 'A') {
    r1.strikesA++;
    GameState.stats.r1StrikesA++;
  } else {
    r1.strikesB++;
    GameState.stats.r1StrikesB++;
  }
  Audio.wrong();

  // If 3 strikes — knockout
  if ((r1.activeTeam === 'A' && r1.strikesA >= 3) ||
      (r1.activeTeam === 'B' && r1.strikesB >= 3)) {
    _handleR1Knockout();
    return;
  }

  // Reset double-answer if they failed
  if (r1.doubleAnswerRequired) {
    r1.doubleAnswerRequired = false;
    r1.doubleAnswerCount = 0;
    r1.activeTeam = r1.activeTeam === 'A' ? 'B' : 'A'; // switch back
  } else {
    r1.activeTeam = r1.activeTeam === 'A' ? 'B' : 'A';
  }

  _r1TimeLeft = R1_TIMER_SECS;
  r1.timerPaused = true;
  renderRound1();
}

function handleR1Attack(attackingTeam) {
  const r1 = GameState.r1;
  const t = attackingTeam || r1.activeTeam;
  
  // Ignore if already used or if it's not their turn 
  // (Attack only makes sense when it IS your turn and you pass the burn to them)
  if (t === 'A' && r1.attackUsedA) return;
  if (t === 'B' && r1.attackUsedB) return;
  
  _stopR1Timer();
  Audio.attack();
  
  if (t === 'A') {
    r1.attackUsedA = true;
    r1.activeTeam = 'B';
  } else {
    r1.attackUsedB = true;
    r1.activeTeam = 'A';
  }
  Audio.steal();

  // Mark that next team must answer twice
  r1.doubleAnswerRequired = true;
  r1.doubleAnswerCount = 0;
  showToast('⚔️ ' + i18n.t('attack_double'), 'warn', 2000);
  
  _r1TimeLeft = R1_TIMER_SECS;
  r1.timerPaused = true;
  renderRound1();
}

function handleR1LifelineSteal(stealingTeam) {
  const s = GameState;
  const r1 = s.r1;
  
  if (stealingTeam === 'A' && s.teamA.hasUsedSteal) return;
  if (stealingTeam === 'B' && s.teamB.hasUsedSteal) return;
  
  _stopR1Timer();
  
  if (stealingTeam === 'A') s.teamA.hasUsedSteal = true;
  else s.teamB.hasUsedSteal = true;
  
  Audio.siren();
  r1.suddenDeathTeam = stealingTeam;
  
  const stealMsg = i18n.lang === 'ar' ? 'تدخل للسرقة!' : 'Intercepted for a Steal!';
  showToast('☠️ ' + GameState.teamName(stealingTeam) + ' — ' + stealMsg, 'warn', 3000);
  renderRound1();
}

function _handleR1Knockout() {
  const r1 = GameState.r1;
  const knockedTeam    = r1.activeTeam;                       // team that got 3 strikes
  const survivingTeam  = knockedTeam === 'A' ? 'B' : 'A';

  // No steal token required anymore — surviving team wins points automatically if 3 strikes hit
  if (survivingTeam === 'A') r1.scoreA += 10;
  else r1.scoreB += 10;
  showToast('🏆 ' + GameState.teamName(survivingTeam) + ' — ' + i18n.t('question_won'), 'correct', 2500);
  
  // Clean up and move on
  r1.strikesA = 0; r1.strikesB = 0;
  setTimeout(() => nextR1Question(), 2000);
}

function handleR1SuddenDeath(correct) {
  const r1 = GameState.r1;
  const stealingTeam  = r1.suddenDeathTeam;
  const originalTeam  = stealingTeam === 'A' ? 'B' : 'A';
  const stealingObj   = stealingTeam === 'A' ? GameState.teamA : GameState.teamB;
  stealingObj.hasUsedSteal = true;

  if (stealingTeam === 'A') GameState.stats.stealsAttemptedA++;
  else GameState.stats.stealsAttemptedB++;

  if (correct) {
    if (stealingTeam === 'A') { r1.scoreA += 20; GameState.stats.stealsSuccessA++; }
    else { r1.scoreB += 20; GameState.stats.stealsSuccessB++; }
    Audio.victory ? Audio.correct() : Audio.correct();
    showToast('🎉 ' + i18n.t('steal_success') + ' (+20)', 'correct', 2500);
  } else {
    // Draw — nobody wins the point
    Audio.wrong();
    showToast('🤝 ' + i18n.t('steal_fail'), 'warn', 2500);
  }

  r1.suddenDeathTeam = null;
  setTimeout(() => nextR1Question(), 2000);
}

function _resolveByStrikes() {
  const r1 = GameState.r1;
  showToast(i18n.t('all_found'), 'correct', 1000);
  Audio.correct();

  // Referee has full manual score control now.
  // We just highlight the Next Question button.
  const nqBtn = document.getElementById('r1-btn-next-q');
  if (nqBtn) {
    nqBtn.style.animation = 'pulse 1s infinite alternate';
  }
}

function nextR1Question() {
  // Clear any pulse animation
  const nqBtn = document.getElementById('r1-btn-next-q');
  if (nqBtn) nqBtn.style.animation = 'none';
  
  const r1 = GameState.r1;
  _stopR1Timer();
  _r1TimeLeft = R1_TIMER_SECS;
  r1.timerPaused = true;
  r1.questionIndex++;
  r1.strikesA = 0;
  r1.strikesB = 0;
  r1.attackUsedA = false;
  r1.attackUsedB = false;
  r1.doubleAnswerRequired = false;
  r1.doubleAnswerCount = 0;
  r1.suddenDeathTeam = null;
  r1.revealedAnswers = [];
  if (r1.questionIndex >= r1.questions.length) { finishRound1(); return; }
  renderRound1();
}

function finishRound1() {
  _stopR1Timer();
  GameState.r1.done = true;
  showScoreboard(1);
}

/* ─── Confirm End Round Dialog ────────────────────────────── */
function confirmEndRound(onConfirm) {
  const overlay = document.getElementById('confirm-overlay');
  document.getElementById('confirm-message').textContent = i18n.t('end_round') + '?';
  document.getElementById('confirm-yes').textContent = i18n.t('confirm');
  document.getElementById('confirm-no').textContent  = i18n.t('cancel');
  overlay.style.display = 'flex';

  document.getElementById('confirm-yes').onclick = () => {
    overlay.style.display = 'none';
    onConfirm();
  };
  document.getElementById('confirm-no').onclick = () => { overlay.style.display = 'none'; };
}
