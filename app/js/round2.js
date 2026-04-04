/* ============================================================
   QOOL — Round 2: Family Feud (Authentic rules with Bank)
   ============================================================ */

function initRound2() {
  const s = GameState;
  s.resetR2();
  const allQ = getQuestions('round2', GameState.categories.length ? GameState.categories : ['general']);
  s.r2.questions = allQ.slice(0, 3);
  if (s.r2.questions.length === 0) {
    showToast(i18n.t('no_questions'), 'wrong');
    finishRound2(); return;
  }
  s.r2.activeTeam   = null;  // Face-off first
  s.r2.multiplier   = 1;
  renderRound2();
}

function renderRound2() {
  const s  = GameState;
  const r2 = s.r2;
  const q  = s.currentQ2();
  if (!q || r2.done) { finishRound2(); return; }

  const lang    = i18n.lang;
  const answers = lang === 'ar' ? q.answers_ar : q.answers_en;

  /* Question */
  document.getElementById('r2-q-text').textContent = lang === 'ar' ? q.ar : q.en;

  /* Multiplier badge */
  const mulEl = document.getElementById('r2-multiplier');
  if (mulEl) {
    mulEl.textContent = r2.multiplier + 'x';
    mulEl.style.display = r2.multiplier > 1 ? 'inline-flex' : 'none';
  }

  /* Bank */
  const bankEl = document.getElementById('r2-bank-value');
  if (bankEl) bankEl.textContent = r2.currentBank;

  /* Face-off phase removed — gameplay board is visible immediately */
  const faceOffSection = document.getElementById('r2-face-off');
  const gameplaySection = document.getElementById('r2-gameplay-section');
  if (faceOffSection) faceOffSection.classList.add('hidden');
  if (gameplaySection) gameplaySection.classList.remove('hidden');
  


  /* Build feud board */
  const board = document.getElementById('r2-feud-board');
  board.innerHTML = '';
  answers.forEach((ans, idx) => {
    const revealed = r2.revealedAnswers.includes(idx);
    const pts = q.points[idx] * r2.multiplier;
    const tile = document.createElement('div');
    tile.className = 'feud-tile' + (revealed ? ' revealed' : ' hidden-tile');
    if (revealed) {
      tile.innerHTML = `
        <div class="feud-rank">${idx + 1}</div>
        <div class="feud-answer-text">${ans}</div>
        <div class="feud-points">${pts} ${i18n.t('points')}</div>`;
    } else {
      tile.innerHTML = `
        <div class="feud-rank">${idx + 1}</div>
        <div class="feud-answer-text secret-answer" style="font-size:0.9rem;">${ans}</div>
        <button class="feud-reveal-btn referee-only" onclick="revealAnswer(${idx})">
          <span class="material-symbols-outlined" style="font-size:16px">visibility</span>
        </button>`;
    }
    board.appendChild(tile);
  });

  /* Team scores */
  document.getElementById('r2-name-a').textContent  = s.teamA.name;
  document.getElementById('r2-name-b').textContent  = s.teamB.name;
  document.getElementById('r2-score-a').textContent = r2.scoreA;
  document.getElementById('r2-score-b').textContent = r2.scoreB;

  /* Active highlight */
  const cardA = document.getElementById('r2-card-a');
  const cardB = document.getElementById('r2-card-b');
  cardA.className = 'score-card team-a-card r2-strip-team' + (r2.activeTeam === 'A' && !r2.stealPhase ? ' active-team' : '');
  cardB.className = 'score-card team-b-card r2-strip-team' + (r2.activeTeam === 'B' && !r2.stealPhase ? ' active-team' : '');

  /* Strikes */
  renderStrikeDots('r2-strikes-row', r2.strikesActive, 3);

  /* Steal phase UI */
  const stealSection  = document.getElementById('r2-steal-section');
  const normalSection = document.getElementById('r2-normal-section');

  if (r2.stealPhase) {
    stealSection.classList.remove('hidden');
    normalSection.classList.add('hidden');
    document.getElementById('steal-team-name').textContent        = s.teamName(r2.stealTeam);
    document.getElementById('btn-steal-correct').textContent = i18n.t('steal_correct');
    document.getElementById('btn-steal-wrong').textContent   = i18n.t('steal_wrong');
    document.getElementById('btn-steal-correct').onclick = () => handleSteal(true);
    document.getElementById('btn-steal-wrong').onclick   = () => handleSteal(false);
  } else {
    stealSection.classList.add('hidden');
    normalSection.classList.remove('hidden');
    document.getElementById('r2-btn-strike').textContent = i18n.t('add_strike');
    document.getElementById('r2-btn-strike').onclick     = () => handleR2Strike();
    document.getElementById('r2-btn-next-q').textContent = i18n.t('next_q');
    document.getElementById('r2-btn-next-q').onclick     = () => { Audio.uiClick(); nextR2Question(); };
    
    const skipBtnR2 = document.getElementById('r2-btn-skip-q');
    if (skipBtnR2) skipBtnR2.onclick = () => {
      if (GameState.skipCurrentQuestion(2)) {
        showToast('⏭️ ' + (i18n.t('skip_question') || 'تم تغيير السؤال'), 'warn', 1500);
        r2.revealedAnswers = [];
        r2.strikesActive  = 0;
        r2.stealPhase     = false;
        r2.stealTeam      = null;
        r2.activeTeam     = null;
        r2.currentBank    = 0;
        renderRound2();
      } else {
        showToast('⚠️ لا يوجد أسئلة إضافية في هذا القسم', 'wrong', 2000);
      }
    };
  }

  /* ── REFEREE DASHBOARD CONTROLS ── */
  document.getElementById('r2-btn-score-up-a').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r2.scoreA += 10; renderRound2(); };
  document.getElementById('r2-btn-score-dn-a').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r2.scoreA = Math.max(0, r2.scoreA - 10); renderRound2(); };
  document.getElementById('r2-btn-score-up-b').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r2.scoreB += 10; renderRound2(); };
  document.getElementById('r2-btn-score-dn-b').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r2.scoreB = Math.max(0, r2.scoreB - 10); renderRound2(); };

  // Editable score for referee
  makeScoreEditable('r2-score-a',
    () => GameState.r2.scoreA,
    (v) => { GameState.r2.scoreA = v; renderRound2(); }
  );
  makeScoreEditable('r2-score-b',
    () => GameState.r2.scoreB,
    (v) => { GameState.r2.scoreB = v; renderRound2(); }
  );
  
  const undoStBtn = document.getElementById('r2-btn-undo-strike');
  if (undoStBtn) undoStBtn.onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r2.strikesActive = Math.max(0, r2.strikesActive - 1); renderRound2(); };

  // Manual Turn Swap
  document.getElementById('r2-card-a').onclick = () => { r2.activeTeam = 'A'; renderRound2(); };
  document.getElementById('r2-card-b').onclick = () => { r2.activeTeam = 'B'; renderRound2(); };

  document.getElementById('btn-end-r2').onclick   = () => confirmEndRound(() => finishRound2());
  document.getElementById('btn-theme-r2').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-r2').onclick  = () => { i18n.toggleLang(); refreshAllText(); renderRound2(); };
}

/* ── Reveal an answer: add to Bank, not score ── */
function revealAnswer(idx) {
  const r2 = GameState.r2;
  const q  = GameState.currentQ2();
  if (!q || r2.revealedAnswers.includes(idx)) return;

  r2.revealedAnswers.push(idx);
  const pts = q.points[idx] * r2.multiplier;
  r2.currentBank += pts;
  Audio.reveal();
  showToast(`+${pts} → 🏦 ${i18n.t('bank')}: ${r2.currentBank}`, 'correct', 1500);

  // If we are in the Steal Phase, finding an answer means Steal was Successful!
  // It automatically sweeps the board and awards the bank.
  if (r2.stealPhase) {
    r2.stealPhase = false;
    renderRound2();
    setTimeout(() => handleSteal(true), 1200);
    return;
  }

  // All answers revealed normally
  const answerCount = (q.answers_ar || q.answers_en || []).length;
  if (r2.revealedAnswers.length >= answerCount) {
    renderRound2();
    setTimeout(() => {
      showToast('🌟 ' + i18n.t('board_cleared') + '!', 'correct', 2500);
      _awardBank(r2.activeTeam || r2.stealTeam || 'A');
    }, 1200);
  } else {
    renderRound2();
  }
}

/* ── Award the entire bank to a team ── */
function _awardBank(team) {
  const r2  = GameState.r2;
  const pts = r2.currentBank;
  if (team === 'A') { r2.scoreA += pts; GameState.stats.r2BankWonA += pts; }
  else              { r2.scoreB += pts; GameState.stats.r2BankWonB += pts; }
  Audio.bankCash();
  showToast(`💰 ${GameState.teamName(team)} +${pts}!`, 'correct', 2500);
  r2.currentBank = 0;
  renderRound2();
  setTimeout(() => nextR2Question(), 2500);
}

function handleR2Strike() {
  const r2 = GameState.r2;
  r2.strikesActive++;
  Audio.wrong();
  showToast('❌ Strike!', 'wrong', 1200);

  if (r2.strikesActive >= 3) {
    r2.stealPhase = true;
    r2.stealTeam  = r2.activeTeam === 'A' ? 'B' : 'A';
    r2.strikesActive = 0;
    Audio.steal();
    showToast('⚡ ' + i18n.t('steal_phase'), 'warn', 2000);
  }
  renderRound2();
}

function handleSteal(correct) {
  const r2 = GameState.r2;
  // Guard against double calling
  if (!r2.stealTeam) return;

  const currentStealTeam = r2.stealTeam;

  // Track stats
  if (currentStealTeam === 'A') GameState.stats.stealsAttemptedA++;
  else GameState.stats.stealsAttemptedB++;

  // Award logic
  if (correct) {
    if (currentStealTeam === 'A') GameState.stats.stealsSuccessA++;
    else GameState.stats.stealsSuccessB++;
    showToast('✅ ' + i18n.t('steal_correct'), 'correct', 2000);
    setTimeout(() => _awardBank(currentStealTeam), 1000);
  } else {
    const originalTeam = currentStealTeam === 'A' ? 'B' : 'A';
    showToast('✗ ' + i18n.t('steal_wrong'), 'wrong', 2000);
    setTimeout(() => _awardBank(originalTeam), 1000);
  }

  // Sweep the remaining board for the audience (DO NOT ADD POINTS)
  const q = GameState.currentQ2();
  if (q) {
    const ansCount = (q.answers_ar || q.answers_en || []).length;
    for (let i = 0; i < ansCount; i++) {
      if (!r2.revealedAnswers.includes(i)) {
        r2.revealedAnswers.push(i);
      }
    }
  }

  r2.stealPhase = false;
  r2.stealTeam  = null;
  renderRound2();
}

function nextR2Question() {
  const r2 = GameState.r2;
  r2.questionIndex++;
  r2.revealedAnswers = [];
  r2.strikesActive  = 0;
  r2.stealPhase     = false;
  r2.stealTeam      = null;
  r2.activeTeam     = null;  // Reset to face-off
  r2.currentBank    = 0;

  // Auto-increase multiplier
  if (r2.questionIndex === 2) r2.multiplier = 2;
  else r2.multiplier = 1;

  if (r2.questionIndex >= r2.questions.length) { finishRound2(); return; }
  renderRound2();
}

function finishRound2() {
  GameState.r2.done = true;
  showScoreboard(2);
}
