/* ============================================================
   QOOL — Screen Controllers
   ============================================================ */

/* ─────────────────────────────────────────────────────────── */
/*  HOME SCREEN                                                */
/* ─────────────────────────────────────────────────────────── */
function initHome() {
  const newGameBtn = document.getElementById('btn-new-game');
  if (!newGameBtn) { console.error('[initHome] btn-new-game NOT FOUND'); return; }
  newGameBtn.onclick = () => {
    // Generate a unique room if they are on the public one to prevent global collisions
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.get('room')) {
      const randomRoom = Math.random().toString(36).substring(2, 6).toUpperCase();
      window.location.href = `?room=${randomRoom}`;
      return; // Stop here, page will reload with new room
    }
    GameState.reset();
    Router.go('setup');
    initSetup();
  };

  // Resume button: show if there's an active game in progress
  const resumeBtn = document.getElementById('btn-resume-game');
  if (resumeBtn) {
    const hasActiveGame = GameState.currentRound > 0 && !GameState.r3.done;
    resumeBtn.style.display = hasActiveGame ? 'flex' : 'none';
    resumeBtn.onclick = () => {
      if (GameState.currentRound === 1 && !GameState.r1.done) { Router.go('round1'); renderRound1(); }
      else if (GameState.currentRound === 2 && !GameState.r2.done) { Router.go('round2'); renderRound2(); }
      else if (GameState.currentRound === 3 && !GameState.r3.done) { Router.go('round3'); renderRound3(); }
      else { Router.go('round-intro'); initRoundIntro(GameState.currentRound); }
    };
  }

  document.getElementById('btn-theme-home').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-home').onclick  = () => { i18n.toggleLang(); refreshAllText(); initHome(); };
}

/* ─────────────────────────────────────────────────────────── */
/*  SETUP SCREEN                                               */
/* ─────────────────────────────────────────────────────────── */
function initSetup() {
  const teamAInput = document.getElementById('input-team-a');
  const teamBInput = document.getElementById('input-team-b');
  teamAInput.value = (GameState.teamA.name === 'الفريق أ' || GameState.teamA.name === 'Team A') ? '' : GameState.teamA.name;
  teamBInput.value = (GameState.teamB.name === 'الفريق ب' || GameState.teamB.name === 'Team B') ? '' : GameState.teamB.name;

  // Color swatches — Team A
  _buildColorSwatches('color-swatches-a', 'A', GameState.teamA.color);
  _buildColorSwatches('color-swatches-b', 'B', GameState.teamB.color);

  // Game length toggle
  const quickBtn = document.getElementById('gl-quick');
  const epicBtn  = document.getElementById('gl-epic');
  if (quickBtn && epicBtn) {
    quickBtn.classList.toggle('selected', GameState.gameLength === 'quick');
    epicBtn.classList.toggle('selected',  GameState.gameLength === 'epic');
    quickBtn.onclick = () => { GameState.gameLength = 'quick'; quickBtn.classList.add('selected'); epicBtn.classList.remove('selected'); };
    epicBtn.onclick  = () => { GameState.gameLength = 'epic';  epicBtn.classList.add('selected'); quickBtn.classList.remove('selected'); };
  }

  // Category tiles
  const CATS     = ['football','geography','history','islamic','art','general'];
  const catIcons = { football:'sports_soccer', geography:'public', history:'history_edu', islamic:'mosque', art:'palette', general:'lightbulb' };
  const catGrid  = document.getElementById('category-grid');
  catGrid.innerHTML = '';
  CATS.forEach(cat => {
    const tile = document.createElement('button');
    tile.className  = 'category-tile' + (GameState.categories.includes(cat) ? ' selected' : '');
    tile.dataset.cat = cat;
    tile.innerHTML  = `<span class="material-symbols-outlined">${catIcons[cat]}</span><span>${i18n.t('cat_' + cat)}</span>`;
    tile.onclick = () => {
      const idx = GameState.categories.indexOf(cat);
      if (idx >= 0) { GameState.categories.splice(idx, 1); tile.classList.remove('selected'); }
      else           { GameState.categories.push(cat);    tile.classList.add('selected'); }
    };
    catGrid.appendChild(tile);
  });

  document.getElementById('btn-start-game').onclick = () => {
    const nameA = teamAInput.value.trim();
    const nameB = teamBInput.value.trim();
    if (!nameA || !nameB) { showToast(i18n.t('fill_teams'), 'wrong'); _shake('btn-start-game'); return; }
    if (GameState.categories.length === 0) { showToast(i18n.t('select_cat'), 'warn'); return; }
    GameState.teamA.name = nameA;
    GameState.teamB.name = nameB;
    applyTeamColors();
    Router.go('round-intro');
    initRoundIntro(1);
  };

  document.getElementById('btn-back-setup').onclick  = () => { Router.go('home'); initHome(); };
  document.getElementById('btn-theme-setup').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-setup').onclick  = () => { i18n.toggleLang(); refreshAllText(); initSetup(); };
}

function _buildColorSwatches(containerId, team, currentColor) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  TEAM_COLORS.forEach(c => {
    const swatch = document.createElement('button');
    swatch.className = 'color-swatch' + (c.hex === currentColor ? ' selected' : '');
    swatch.style.background = c.hex;
    swatch.title = c.name;
    swatch.onclick = () => {
      el.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      if (team === 'A') GameState.teamA.color = c.hex;
      else              GameState.teamB.color = c.hex;
      applyTeamColors();
    };
    el.appendChild(swatch);
  });
}

function _shake(btnId) {
  const el = document.getElementById(btnId);
  if (!el) return;
  el.classList.add('shake');
  el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
}

/* ─────────────────────────────────────────────────────────── */
/*  ROUND INTRO SCREEN                                         */
/* ─────────────────────────────────────────────────────────── */
const ROUND_CONFIG = {
  1: {
    nameKey: 'round1_name', typeKey: 'round1_type',
    icon: 'swap_horiz', color: 'var(--clr-primary)',
    rules: ['r1_rule1','r1_rule2','r1_rule3','r1_rule4','r1_rule5'],
    ruleIcons: ['swap_horiz','timer','cancel','bolt','sports_mma'],
  },
  2: {
    nameKey: 'round2_name', typeKey: 'round2_type',
    icon: 'family_restroom', color: '#f59e0b',
    rules: ['r2_rule1','r2_rule2','r2_rule3','r2_rule4','r2_rule5'],
    ruleIcons: ['person','manage_search','cancel','local_police','account_balance'],
  },
  3: {
    nameKey: 'round3_name', typeKey: 'round3_type',
    icon: 'bolt', color: '#a855f7',
    rules: ['r3_rule1','r3_rule2','r3_rule3','r3_rule4'],
    ruleIcons: ['flash_on','cancel','whatshot','emoji_events'],
  },
};

function initRoundIntro(roundNum) {
  GameState.currentRound = roundNum;
  const cfg = ROUND_CONFIG[roundNum];

  document.getElementById('intro-round-number').textContent = i18n.t(cfg.nameKey);
  document.getElementById('intro-round-type').textContent   = i18n.t(cfg.typeKey);
  document.getElementById('intro-round-icon').textContent   = cfg.icon;
  document.getElementById('intro-round-icon').style.color   = cfg.color;

  // Show current scores on R2/R3 intros
  const scorePreview = document.getElementById('intro-score-preview');
  if (scorePreview) {
    const visible = roundNum > 1;
    scorePreview.style.display = visible ? 'flex' : 'none';
    if (visible) {
      const totA = GameState.getTotalScore('A');
      const totB = GameState.getTotalScore('B');
      document.getElementById('intro-preview-a').textContent = `${GameState.teamA.name}: ${totA}`;
      document.getElementById('intro-preview-b').textContent = `${GameState.teamB.name}: ${totB}`;
    }
  }

  // Coin flip only for Round 1
  const coinFlipSection = document.getElementById('coin-flip-section');
  if (coinFlipSection) {
    coinFlipSection.style.display = roundNum === 1 ? 'block' : 'none';
    if (roundNum === 1) {
      _flipInProgress = false;
      const coinBtn = document.getElementById('btn-coin-flip');
      if (coinBtn) coinBtn.disabled = false;
      coinBtn.onclick = () => _doFlip();
      document.getElementById('flip-result').textContent = '';
    }
  }

  const rulesList = document.getElementById('intro-rules-list');
  rulesList.innerHTML = '';
  cfg.rules.forEach((rKey, idx) => {
    const li = document.createElement('div');
    li.className = 'rule-item';
    li.innerHTML = `<span class="material-symbols-outlined rule-icon">${cfg.ruleIcons[idx]}</span><span>${i18n.t(rKey)}</span>`;
    rulesList.appendChild(li);
  });

  document.getElementById('btn-begin-round').onclick = () => {
    if (roundNum === 1)      { Router.go('round1'); initRound1(); }
    else if (roundNum === 2) { Router.go('round2'); initRound2(); }
    else if (roundNum === 3) { Router.go('round3'); initRound3(); }
  };

  document.getElementById('btn-theme-intro').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-intro').onclick  = () => { i18n.toggleLang(); refreshAllText(); initRoundIntro(roundNum); };
}

let _flipInProgress = false;
function _doFlip() {
  if (_flipInProgress) return;
  _flipInProgress = true;

  const btn = document.getElementById('btn-coin-flip');
  if (btn) btn.disabled = true;

  Audio.coinFlip();
  const resultEl = document.getElementById('flip-result');
  resultEl.textContent = '🪙 ...';
  resultEl.className = 'flip-result flipping';
  let ticks = 0;
  const interval = setInterval(() => {
    const rand = Math.random() > 0.5 ? GameState.teamA.name : GameState.teamB.name;
    resultEl.textContent = rand + ' 🪙';
    ticks++;
    if (ticks >= 12) {
      clearInterval(interval);
      const winner = Math.random() > 0.5 ? GameState.teamA.name : GameState.teamB.name;
      resultEl.textContent = '🎉 ' + winner + ' ' + i18n.t('starts_first');
      resultEl.className = 'flip-result done';
      _flipInProgress = false;
      if (btn) btn.disabled = false;
    }
  }, 100);
}

/* ─────────────────────────────────────────────────────────── */
/*  SCOREBOARD SCREEN (between rounds)                        */
/* ─────────────────────────────────────────────────────────── */
function showScoreboard(completedRound, skipAnimate = false) {
  Router.go('scoreboard');
  const s      = GameState;
  const rScoreA = s['r' + completedRound].scoreA;
  const rScoreB = s['r' + completedRound].scoreB;
  const totalA  = s.getTotalScore('A');
  const totalB  = s.getTotalScore('B');

  document.getElementById('sb-round-label').textContent = i18n.t(`round${completedRound}_name`) + ' — ' + i18n.t('round_complete');
  document.getElementById('sb-team-a-name').textContent = s.teamA.name;
  document.getElementById('sb-team-b-name').textContent = s.teamB.name;

  // Animate score counting up
  const elRoundA = document.getElementById('sb-team-a-round');
  const elRoundB = document.getElementById('sb-team-b-round');
  const elTotalA = document.getElementById('sb-team-a-total');
  const elTotalB = document.getElementById('sb-team-b-total');

  if (skipAnimate) {
    elRoundA.textContent = rScoreA; elRoundB.textContent = rScoreB;
    elTotalA.textContent = totalA;  elTotalB.textContent = totalB;
  } else {
    elRoundA.textContent = '0'; elRoundB.textContent = '0';
    elTotalA.textContent = '0'; elTotalB.textContent = '0';
    setTimeout(() => {
      animateCount(elRoundA, rScoreA, 700);
      animateCount(elRoundB, rScoreB, 700);
    }, 200);
    setTimeout(() => {
      animateCount(elTotalA, totalA, 900);
      animateCount(elTotalB, totalB, 900);
    }, 1100);
  }

  // Difference to tie
  const diffEl = document.getElementById('sb-diff-label');
  if (diffEl) {
    const diff = Math.abs(totalA - totalB);
    if (totalA !== totalB) {
      const trailingTeam = totalA < totalB ? s.teamA.name : s.teamB.name;
      diffEl.textContent = `${trailingTeam} ${i18n.t('needs_pts')} ${diff} ${i18n.t('to_tie')}`;
      diffEl.style.display = 'block';
    } else {
      diffEl.textContent = i18n.t('tied') + ' ⚖️';
      diffEl.style.display = 'block';
    }
  }

  // Winner/leader highlight
  const cardA  = document.getElementById('sb-card-a');
  const cardB  = document.getElementById('sb-card-b');
  const crownA = document.getElementById('sb-crown-a');
  const crownB = document.getElementById('sb-crown-b');
  [cardA, cardB].forEach(c => c.className = 'team-score-card loser');
  [crownA, crownB].forEach(c => c.classList.add('hidden'));

  if (totalA > totalB) {
    cardA.className = 'team-score-card winner'; crownA.classList.remove('hidden');
  } else if (totalB > totalA) {
    cardB.className = 'team-score-card winner'; crownB.classList.remove('hidden');
  } else {
    cardA.className = 'team-score-card';
    cardB.className = 'team-score-card';
  }

  const nextBtn = document.getElementById('btn-next-round');
  if (completedRound < 3) {
    nextBtn.innerHTML = `<span class="material-symbols-outlined">arrow_forward</span><span>${i18n.t('next_round')}</span>`;
    nextBtn.onclick = () => { Router.go('round-intro'); initRoundIntro(completedRound + 1); };
  } else {
    nextBtn.innerHTML = `<span class="material-symbols-outlined">emoji_events</span><span>${i18n.t('game_over')}</span>`;
    nextBtn.onclick = () => showFinalResults();
  }

  document.getElementById('btn-theme-sb').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-sb').onclick  = () => { i18n.toggleLang(); refreshAllText(); showScoreboard(completedRound, true); };
}

/* ─────────────────────────────────────────────────────────── */
/*  FINAL RESULTS SCREEN                                       */
/* ─────────────────────────────────────────────────────────── */
function showFinalResults(skipAnimate = false) {
  Router.go('final');
  fireConfetti(100);
  Audio.victory();

  const s      = GameState;
  const totalA = s.getTotalScore('A');
  const totalB = s.getTotalScore('B');
  const winner = s.getWinner();

  // Banner
  const bannerName = document.getElementById('final-winner-name');
  const bannerSub  = document.getElementById('final-winner-sub');
  if (winner === 'DRAW') {
    bannerName.textContent = i18n.t('draw');
    bannerSub.textContent  = `${s.teamA.name} ${i18n.t('vs')} ${s.teamB.name}`;
  } else {
    bannerName.textContent = s.teamName(winner) + ' ' + i18n.t('wins');
    bannerSub.textContent  = i18n.t('final_results');
    bannerName.style.color = s.teamColor(winner);
  }

  // Score breakdown table
  document.getElementById('final-th-a').textContent = s.teamA.name;
  document.getElementById('final-th-b').textContent = s.teamB.name;
  const tbody = document.getElementById('final-table-body');
  tbody.innerHTML = '';
  for (let r = 1; r <= 3; r++) {
    const rA = s['r' + r].scoreA;
    const rB = s['r' + r].scoreB;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i18n.t('round' + r + '_name')}</td>
      <td class="${rA >= rB ? 'score-highlight' : ''}">${rA}</td>
      <td class="${rB >= rA ? 'score-highlight' : ''}">${rB}</td>`;
    tbody.appendChild(tr);
  }
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight = '800';
  totalRow.innerHTML = `
    <td>${i18n.t('total_score')}</td>
    <td class="${totalA >= totalB ? 'score-highlight' : ''}">${totalA}</td>
    <td class="${totalB >= totalA ? 'score-highlight' : ''}">${totalB}</td>`;
  tbody.appendChild(totalRow);

  // Stats section
  const statsEl = document.getElementById('final-stats');
  if (statsEl) {
    const st = s.stats;
    statsEl.innerHTML = `
      <div class="stat-row"><span>${i18n.t('r1_strikes_label')}</span><span><b style="color:var(--clr-team-a)">${st.r1StrikesA}</b> — <b style="color:var(--clr-team-b)">${st.r1StrikesB}</b></span></div>
      <div class="stat-row"><span>${i18n.t('r2_bank_won_label')}</span><span><b style="color:var(--clr-team-a)">${st.r2BankWonA}</b> — <b style="color:var(--clr-team-b)">${st.r2BankWonB}</b></span></div>
      <div class="stat-row"><span>${i18n.t('steals_success_label')}</span><span><b style="color:var(--clr-team-a)">${st.stealsSuccessA}</b> — <b style="color:var(--clr-team-b)">${st.stealsSuccessB}</b></span></div>
    `;
  }

  document.getElementById('btn-play-again').onclick = () => {
    const nameA = s.teamA.name, nameB = s.teamB.name, cats = [...s.categories];
    const colA  = s.teamA.color, colB = s.teamB.color;
    GameState.reset();
    GameState.teamA.name = nameA; GameState.teamA.color = colA;
    GameState.teamB.name = nameB; GameState.teamB.color = colB;
    GameState.categories = cats;
    applyTeamColors();
    Router.go('round-intro'); initRoundIntro(1);
  };

  document.getElementById('btn-new-game-final').onclick = () => {
    GameState.reset(); applyTeamColors();
    Router.go('home'); initHome();
  };

  document.getElementById('btn-theme-final').onclick = () => Theme.toggle();
  document.getElementById('btn-lang-final').onclick  = () => { i18n.toggleLang(); refreshAllText(); showFinalResults(true); };
}

/* ─────────────────────────────────────────────────────────── */
/*  Refresh all static i18n text                              */
/* ─────────────────────────────────────────────────────────── */
function refreshAllText() {
  i18n.setLang(i18n.lang);
  document.querySelectorAll('.category-tile').forEach(tile => {
    const cat = tile.dataset.cat;
    if (cat) tile.querySelector('span:last-child').textContent = i18n.t('cat_' + cat);
  });
}

