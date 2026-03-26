/* ============================================================
   QOOL — Round 3: Fast Questions / Clutch Finale
   ============================================================ */

const R3_NORMAL_PTS    = 20;
const R3_CLUTCH_PTS    = 50;

function initRound3() {
  const s = GameState;
  s.resetR3();
  const limit = s.getR3Limit();
  const allQ  = getQuestions('round3', s.categories);
  s.r3.questions = allQ.slice(0, limit);
  if (s.r3.questions.length === 0) {
    showToast(i18n.t('no_questions'), 'wrong');
    finishRound3(); return;
  }
  renderRound3();
}

function renderRound3() {
  const s  = GameState;
  const r3 = s.r3;
  const q  = s.currentQ3();
  const total = s.r3.questions.length;

  if (!q || r3.done || r3.questionIndex >= total) {
    finishRound3(); return;
  }
  
  Audio.startAmbient();

  const lang = i18n.lang;

  /* Clutch mode detection (last 3 questions!) */
  const isClutch = r3.questionIndex >= (total - 3);
  if (isClutch && !r3.clutchMode) {
    r3.clutchMode    = true;
    r3.pointsPerQ    = R3_CLUTCH_PTS;
    document.getElementById('screen-round3').classList.add('clutch-active');
    Audio.siren();
    showToast('🔴 ' + i18n.t('clutch_mode'), 'warn', 3000);
  } else if (!isClutch) {
    document.getElementById('screen-round3').classList.remove('clutch-active');
    r3.pointsPerQ = R3_NORMAL_PTS;
  }

  /* Progress */
  const qNum = r3.questionIndex + 1;
  document.getElementById('r3-q-counter').textContent =
    `${i18n.t('question_progress')} ${qNum} ${i18n.t('of')} ${total}`;
  const pct = (r3.questionIndex / total) * 100;
  document.getElementById('r3-progress-fill').style.width = pct + '%';

  /* Clutch badge */
  const clutchBadge = document.getElementById('r3-clutch-badge');
  if (clutchBadge) {
    clutchBadge.style.display = isClutch ? 'flex' : 'none';
    clutchBadge.textContent   = i18n.t('clutch_mode');
  }

  /* Points label */
  const ptsLabel = document.getElementById('r3-pts-label');
  if (ptsLabel) ptsLabel.textContent = `+${r3.pointsPerQ}`;

  /* Question */
  document.getElementById('r3-q-category').textContent = i18n.t('cat_' + q.category);
  document.getElementById('r3-q-text').textContent = lang === 'ar' ? q.ar : q.en;

  /* Scores */
  document.getElementById('r3-name-a').textContent  = s.teamA.name;
  document.getElementById('r3-name-b').textContent  = s.teamB.name;
  document.getElementById('r3-score-a').textContent = r3.scoreA;
  document.getElementById('r3-score-b').textContent = r3.scoreB;

  /* Lockout state */
  const lockedA = r3.lockedOutTeam === 'A';
  const lockedB = r3.lockedOutTeam === 'B';

  const zoneA = document.getElementById('r3-zone-a');
  const zoneB = document.getElementById('r3-zone-b');
  if (zoneA) zoneA.classList.toggle('locked-out', lockedA);
  if (zoneB) zoneB.classList.toggle('locked-out', lockedB);

  /* Big score buttons */
  const btnA       = document.getElementById('r3-btn-a');
  const btnB       = document.getElementById('r3-btn-b');
  const btnWrongA  = document.getElementById('r3-btn-wrong-a');
  const btnWrongB  = document.getElementById('r3-btn-wrong-b');
  const btnBoth    = document.getElementById('r3-btn-both');
  const btnNeither = document.getElementById('r3-btn-neither');

  btnA.textContent = s.teamA.name + ' ✓';
  btnB.textContent = s.teamB.name + ' ✓';
  btnWrongA.textContent = '✗ ' + i18n.t('team_wrong').split('(')[0].trim();
  btnWrongB.textContent = '✗ ' + i18n.t('team_wrong').split('(')[0].trim();
  btnBoth.textContent   = i18n.t('both_correct');
  btnNeither.textContent = i18n.t('neither');

  btnA.disabled = lockedA;
  btnB.disabled = lockedB;
  btnWrongA.disabled = lockedA;
  btnWrongB.disabled = lockedB;

  btnA.onclick = () => handleR3Score('A');
  btnB.onclick = () => handleR3Score('B');
  btnBoth.onclick    = () => handleR3Score('both');
  btnNeither.onclick = () => handleR3Score('none');
  btnWrongA.onclick  = () => handleR3Wrong('A');
  btnWrongB.onclick  = () => handleR3Wrong('B');

  document.getElementById('btn-end-r3').onclick   = () => { Audio.uiClick(); confirmEndRound(() => finishRound3()); };
  document.getElementById('btn-theme-r3').onclick = () => { Audio.uiClick(); Theme.toggle(); };
  document.getElementById('btn-lang-r3').onclick  = () => { Audio.uiClick(); i18n.toggleLang(); refreshAllText(); renderRound3(); };

  /* ── REFEREE DASHBOARD CONTROLS ── */
  document.getElementById('r3-btn-score-up-a').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r3.scoreA += 10; renderRound3(); };
  document.getElementById('r3-btn-score-dn-a').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r3.scoreA = Math.max(0, r3.scoreA - 10); renderRound3(); };
  document.getElementById('r3-btn-score-up-b').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r3.scoreB += 10; renderRound3(); };
  document.getElementById('r3-btn-score-dn-b').onclick = (e) => { e.stopPropagation(); Audio.uiClick(); r3.scoreB = Math.max(0, r3.scoreB - 10); renderRound3(); };
  document.getElementById('r3-btn-next-q').onclick = () => { r3.lockedOutTeam = null; r3.questionIndex++; renderRound3(); };

  // Editable score for referee
  makeScoreEditable('r3-score-a',
    () => GameState.r3.scoreA,
    (v) => { GameState.r3.scoreA = v; renderRound3(); }
  );
  makeScoreEditable('r3-score-b',
    () => GameState.r3.scoreB,
    (v) => { GameState.r3.scoreB = v; renderRound3(); }
  );

  const skipBtnR3 = document.getElementById('r3-btn-skip-q');
  if (skipBtnR3) skipBtnR3.onclick = () => {
    if (GameState.skipCurrentQuestion(3)) {
      showToast('⏭️ ' + (i18n.t('skip_question') || 'تم تغيير السؤال'), 'warn', 1500);
      r3.lockedOutTeam = null;
      renderRound3();
    } else {
      showToast('⚠️ لا يوجد أسئلة إضافية في هذا القسم', 'wrong', 2000);
    }
  };
}

/* ──────────── HANDLERS ──────────── */

function handleR3Score(who) {
  const r3  = GameState.r3;
  const pts = r3.pointsPerQ;

  if (who === 'A') {
    r3.scoreA += pts;
    Audio.correct();
    showToast(`+${pts} ${GameState.teamA.name} 🎉`, 'correct', 900);
  } else if (who === 'B') {
    r3.scoreB += pts;
    Audio.correct();
    showToast(`+${pts} ${GameState.teamB.name} 🎉`, 'correct', 900);
  } else if (who === 'both') {
    r3.scoreA += pts; r3.scoreB += pts;
    Audio.correct();
    showToast(`+${pts} +${pts} 🎉`, 'correct', 900);
  } else {
    showToast('→', '', 600);
  }

  r3.lockedOutTeam = null;
  r3.questionIndex++;
  setTimeout(() => renderRound3(), 400);
}

function handleR3Wrong(team) {
  const r3 = GameState.r3;
  Audio.wrong();
  
  if (r3.lockedOutTeam) {
    // If someone was already locked out, the second team just got it wrong too!
    showToast('✗ ' + i18n.t('neither') || 'Both Failed!', 'warn', 1500);
    r3.lockedOutTeam = null;
    r3.questionIndex++;
    setTimeout(() => renderRound3(), 1000);
  } else {
    // First team to get it wrong — lock them out
    r3.lockedOutTeam = team;
    showToast('✗ ' + GameState.teamName(team) + ' — ' + i18n.t('locked_out'), 'wrong', 1500);
    renderRound3();
  }
}

function finishRound3() {
  document.getElementById('screen-round3').classList.remove('clutch-active');
  GameState.r3.done = true;
  showScoreboard(3);
}
