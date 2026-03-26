/* ============================================================
   QOOL — i18n Translations  (Arabic primary, English secondary)
   ============================================================ */

const TRANSLATIONS = {
  ar: {
    // App
    app_name: 'قوول',
    app_tagline: 'تحدي المعرفة الأقوى — قوول!',
    new_game: 'لعبة جديدة',
    resume_game: 'استكمال اللعبة',
    start_game: 'ابدأ اللعبة',
    begin_round: 'ابدأ الجولة',
    next_round: 'الجولة التالية',
    play_again: 'العب مجدداً',
    end_round: 'إنهاء الجولة',
    confirm: 'تأكيد',
    cancel: 'إلغاء',
    loading: 'جاري التحميل...',
    settings: 'الإعدادات',
    sound_on: 'الصوت مفعّل',
    sound_off: 'الصوت متوقف',

    // Theme
    dark_mode: 'الوضع الداكن',
    light_mode: 'الوضع الفاتح',

    // Setup
    setup_title: 'إعداد اللعبة',
    setup_subtitle: 'أدخل أسماء الفرق، اختر لونهم والفئات',
    team_a_name: 'اسم الفريق الأول',
    team_b_name: 'اسم الفريق الثاني',
    team_a_placeholder: 'مثال: الصقور',
    team_b_placeholder: 'مثال: النسور',
    pick_color: 'اختر لون الفريق',
    select_categories: 'اختر الفئات',
    categories_hint: 'اختر فئة واحدة على الأقل',
    cat_football: 'كرة القدم',
    cat_geography: 'جغرافيا',
    cat_history: 'تاريخ',
    cat_islamic: 'إسلاميات',
    cat_art: 'فنون',
    cat_general: 'معلومات عامة',
    game_length: 'مدة اللعب',
    quick_game: 'سريعة',
    epic_game: 'ملحمية',

    // Coin flip
    coin_flip: 'القرعة — من يبدأ؟',
    flip_btn: 'ارمِ العملة!',
    starts_first: 'يبدأ أولاً!',

    // Round names
    round_rules: 'قواعد الجولة',
    round1_name: 'الجولة الأولى',
    round1_type: 'تحدي الأدوار — پينج پونج',
    round2_name: 'الجولة الثانية',
    round2_type: 'حرب العائلات',
    round3_name: 'الجولة الثالثة',
    round3_type: 'الأسئلة السريعة',

    // Round 1 rules
    r1_rule1: 'أجب بشكل صحيح لتحصد 10 نقاط — الفريقان يتناوبان الإجابة',
    r1_rule2: 'لديك 20 ثانية للتفكير — الحكم يتحكم بالوقت يدوياً',
    r1_rule3: 'إجابة خاطئة = إنذار. 3 إنذارات = تخسر دورك ويكسب خصمك 10 نقاط تلقائياً',
    r1_rule4: 'رمز السرقة ☠️: "مساعدة لمرة واحدة" للتدخل وسرقة السؤال من الخصم بـ 20 نقطة!',
    r1_rule5: 'رمز الهجوم ⚔️: "مساعدة لمرة واحدة" تلزم الفريق الخصم بإجابتَين متتاليتَين',

    // Round 2 rules
    r2_rule1: 'اللعب الفردي 👤: الفريق الحالي يجب أن يجيب أفراده بالدور وبشكل فردي تماماً وبدون أي تشاور.',
    r2_rule2: 'تجميع البنك 🏦: كل إجابة تُكشف قيمتها تضاف إلى "بنك" الجولة ولا تُحتسب كفوز حتى تنتهي اللوحة.',
    r2_rule3: 'الإنذارات (الأخطاء) ❌: أي إجابة خاطئة تسجل كـ"إنذار". 3 إنذارات متتالية تُنهي دور الفريق الأول فوراً.',
    r2_rule4: 'مرحلة السرقة 🚨: يحصل الفريق الثاني على فرصة تشاور جماعية لإعطاء "إجابة واحدة" لمحاولة سرقة اللوحة.',
    r2_rule5: 'حسم البنك 🔄: سرقة صحيحة = البنك بالكامل للخصم. سرقة خاطئة = يعود للفريق الأول (تتضاعف النتيجة 1x, 2x, 3x).',

    // Round 3 rules
    r3_rule1: 'أسئلة سريعة جداً — كل إجابة تعطيك 20 نقطة',
    r3_rule2: 'أخطأت؟ السؤال ينتقل فوراً للفريق الخصم',
    r3_rule3: 'آخر 3 أسئلة = وضع الحسم 🔴 — النقطة بـ 50 نقطة!',
    r3_rule4: 'فريقك يمكنه قلْب النتيجة في الثواني الأخيرة مهما كان الفارق',

    // Gameplay - Round 1
    active_team: 'الفريق النشط',
    your_turn: 'دورك!',
    time_left: 'الوقت',
    answers_board: 'الإجابات',
    answer_found: 'إجابة صحيحة! ✓',
    add_strike: 'إجابة خاطئة ❌',
    attack_btn: '⚔️ هجوم!',
    attack_used: 'تم استخدام الهجوم',
    attack_double: 'يجب الإجابة بإجابتَين متتاليتَين!',
    steal_token: 'رمز السرقة',
    steal_token_used: 'تم استخدام رمز السرقة',
    sudden_death: 'الموت المفاجئ ☠️',
    sudden_death_desc: 'إجابة واحدة صحيحة لسرقة النقطة!',
    steal_success: 'سرقة ناجحة! 🎉',
    steal_fail: 'فشلت السرقة — تعادل!',
    question_won: 'فازوا بالسؤال! 🏆',
    question_draw: 'تعادل — نقطة لكل فريق',
    all_found: 'جميع الإجابات اكتُشفت',
    next_question: 'السؤال التالي',
    warnings: 'إنذارات',
    team_score: 'النتيجة',
    current_question: 'السؤال',
    category: 'الفئة',
    skip_answer: 'تخطى الإجابة',

    // Gameplay - Round 2
    face_off: 'المواجهة — من يتحكم؟',
    give_control_a: 'تحكم الفريق أ',
    give_control_b: 'تحكم الفريق ب',
    current_topic: 'الموضوع',
    bank: 'البنك',
    points: 'نقاط',
    strikes: 'الأخطاء',
    steal_phase: 'مرحلة السرقة! 🚨',
    steal_desc: 'الفريق الآخر لديه محاولة واحدة',
    steal_correct: 'سرقة صحيحة ✅',
    steal_wrong: 'فشل السرقة ❌',
    steal_success_btn: '✅ سرق النقطة!',
    steal_fail_btn: '✗ فشل السرقة',
    pts_per_q: 'النقاط لكل سؤال:',
    board_cleared: 'اكتملت اللوحة',
    next_q: 'سؤال تالٍ',

    r1_strikes_label: 'إنذارات الجولة 1',
    r2_bank_won_label: 'بنك فاز به (R2)',
    steals_success_label: 'سرقات ناجحة',
    custom_correct: 'إجابة صحيحة (تخطي)',
    multiplier: 'مضاعف النقاط',

    // Gameplay - Round 3
    question_progress: 'سؤال',
    of: 'من',
    team_correct: 'صحيح ✓',
    team_wrong: 'خطأ ✗ (احوّل السؤال)',
    both_correct: 'كلاهما صحيح',
    neither: 'لا أحد',
    clutch_mode: '🔴 وضع الحسم — 3× نقاط!',
    locked_out: 'محجوب! الفريق الآخر يجيب',
    timer_label: 'الوقت المتبقي',

    // Scoreboard
    round_complete: 'انتهت الجولة!',
    round_score: 'نقاط الجولة',
    total_score: 'المجموع الكلي',
    leading: 'في المقدمة',
    trailing: 'يتعقب',
    tied: 'تعادل',
    needs_pts: 'يحتاج',
    to_tie: 'نقطة للتعادل',

    // Final
    game_over: 'انتهت اللعبة!',
    winner_is: 'الفائز',
    wins: 'يفوز!',
    final_results: 'النتائج النهائية',
    round: 'الجولة',
    draw: 'تعادل',
    stats_title: 'إحصائيات اللعبة',

    // Errors
    fill_teams: 'يرجى إدخال أسماء الفريقين',
    select_cat: 'يرجى اختيار فئة واحدة على الأقل',
    no_questions: 'لا توجد أسئلة لهذه الفئات',

    // Misc
    vs: 'ضد',
    referee: 'الحكم',
    skip_question: 'تخطي / تغيير السؤال',
    lang_content_note: '🌍 تم تفعيل الترجمة الإنجليزية لجميع الجولات!',

    // Timer decision
    time_up: 'انتهى الوقت!',
    referee_decide: 'قرار الحكم — هل كانت الإجابة صحيحة؟',
    referee_correct: 'صحيحة ✅',
    referee_fault: 'خطأ ❌',

    // Setup sections
    teams_section: 'الفريقان',
    game_settings_section: 'إعدادات اللعبة',
  },

  en: {
    app_name: 'QOOL',
    app_tagline: 'The ultimate competitive quiz challenge!',
    new_game: 'New Game',
    resume_game: 'Resume Game',
    start_game: 'Start Game',
    begin_round: 'Begin Round',
    next_round: 'Next Round',
    play_again: 'Play Again',
    end_round: 'End Round',
    confirm: 'Confirm',
    cancel: 'Cancel',
    loading: 'Loading...',
    settings: 'Settings',
    sound_on: 'Sound On',
    sound_off: 'Sound Off',

    dark_mode: 'Dark Mode',
    light_mode: 'Light Mode',

    setup_title: 'Game Setup',
    setup_subtitle: 'Enter team names, pick colors & categories',
    team_a_name: 'Team A Name',
    team_b_name: 'Team B Name',
    team_a_placeholder: 'e.g. The Eagles',
    team_b_placeholder: 'e.g. The Wolves',
    pick_color: 'Pick Team Color',
    select_categories: 'Select Categories',
    categories_hint: 'Choose at least one category',
    cat_football: 'Football',
    cat_geography: 'Geography',
    cat_history: 'History',
    cat_islamic: 'Islamic',
    cat_art: 'Art',
    cat_general: 'General Knowledge',
    game_length: 'Game Length',
    quick_game: 'Quick',
    epic_game: 'Epic',

    coin_flip: 'Coin Flip — Who Starts?',
    flip_btn: 'Flip the Coin!',
    starts_first: 'goes first!',

    round1_name: 'Round 1',
    round1_type: 'Ping-Pong Battle',
    round2_name: 'Round 2',
    round2_type: 'Family Feud',
    round3_name: 'Round 3',
    round3_type: 'Fast Questions',
    round_rules: 'Round Rules',

    r1_rule1: 'Correct answers grant +10 Points — teams alternate turns',
    r1_rule2: 'You have 20 seconds — the referee manually controls the timer',
    r1_rule3: 'Wrong = strike. 3 strikes = turn is lost and opponent gains +10 points',
    r1_rule4: 'Steal Token ☠️: A single-use lifeline to instantly intercept for +20 points!',
    r1_rule5: 'Attack Token ⚔️: A single-use lifeline forcing opponent to answer twice',

    r2_rule1: 'Solo Play 👤: The playing team answers one by one. Group consulting is STRICTLY PROHIBITED!',
    r2_rule2: 'Building the Bank 🏦: Revealed answers deposit their value into a temporary Bank, not directly to score.',
    r2_rule3: 'Strikes ❌: Every wrong answer earns a Strike. Accruing 3 Strikes immediately freezes the board.',
    r2_rule4: 'The Steal 🚨: The opposing team now groups up and consults to give ONE final answer to steal the board.',
    r2_rule5: 'Resolution 🔄: A correct steal gives them the whole Bank. Wrong steal returns it to Team 1. Point values multiply every board (1x, 2x, 3x)!',

    r3_rule1: 'Questions are very fast — every correct answer earns 20 points',
    r3_rule2: 'Wrong answer? The question passes immediately to the opposing team',
    r3_rule3: 'Last 3 questions = CLUTCH MODE 🔴 — points are worth 50 each!',
    r3_rule4: 'Your team can flip the result in the final seconds regardless of the score gap',

    active_team: 'Active Team',
    your_turn: 'Your Turn!',
    time_left: 'Time',
    answers_board: 'Answers',
    answer_found: 'Correct answer! ✓',
    add_strike: 'Wrong answer ❌',
    attack_btn: '⚔️ Attack!',
    attack_used: 'Attack Used',
    attack_double: 'Must give two correct answers!',
    steal_token: 'Steal Token',
    steal_token_used: 'Steal Token Used',
    sudden_death: 'Sudden Death ☠️',
    sudden_death_desc: 'One correct answer steals the point!',
    steal_success: 'Steal Success! 🎉',
    steal_fail: 'Steal Failed — Draw!',
    question_won: 'Won the question! 🏆',
    question_draw: 'Draw — 1 point each',
    all_found: 'All answers found!',
    next_question: 'Next Question',
    warnings: 'Warnings',
    team_score: 'Score',
    current_question: 'Q',
    category: 'Category',
    skip_answer: 'Skip Answer',

    face_off: 'Face-Off — Who controls?',
    give_control_a: 'Team A Control',
    give_control_b: 'Team B Control',
    current_topic: 'Topic',
    bank: 'Bank',
    points: 'pts',
    strikes: 'Strikes',
    steal_phase: 'Steal Phase! 🚨',
    steal_desc: 'Other team gets ONE steal attempt',
    steal_correct: 'Steal Correct ✅',
    steal_wrong: 'Steal Failed ❌',
    steal_success_btn: '✅ Stole the point!',
    steal_fail_btn: '✗ Steal failed',
    pts_per_q: 'Points per question:',
    board_cleared: 'Board Cleared',
    next_q: 'Next Question',

    r1_strikes_label: 'Round 1 Strikes',
    r2_bank_won_label: 'Bank Earned (R2)',
    steals_success_label: 'Successful Steals',
    custom_correct: 'Custom Correct Answer',
    multiplier: 'Multiplier',

    question_progress: 'Q',
    of: '/',
    team_correct: 'Correct ✓',
    team_wrong: 'Wrong ✗ (pass)',
    both_correct: 'Both Correct',
    neither: 'Neither',
    clutch_mode: '🔴 CLUTCH MODE — 3× Points!',
    locked_out: 'Locked out! Other team answers',
    timer_label: 'Time Left',

    round_complete: 'Round Complete!',
    round_score: 'Round Score',
    total_score: 'Total Score',
    leading: 'Leading',
    trailing: 'Trailing',
    tied: 'Tied',
    needs_pts: 'Needs',
    to_tie: 'pts to tie',

    game_over: 'Game Over!',
    winner_is: 'Winner',
    wins: 'Wins!',
    final_results: 'Final Results',
    round: 'Round',
    draw: 'Draw',
    stats_title: 'Game Stats',

    fill_teams: 'Please enter both team names',
    select_cat: 'Please select at least one category',
    no_questions: 'No questions found for selected categories',

    vs: 'VS',
    referee: 'Referee',
    skip_question: 'Skip / Change Question',
    lang_content_note: '🌍 English translation now available for all rounds!',

    // Timer decision
    time_up: "Time's Up!",
    referee_decide: "Referee decides — was the answer correct?",
    referee_correct: 'Correct ✅',
    referee_fault: 'Fault ❌',

    // Setup sections
    teams_section: 'Teams',
    game_settings_section: 'Game Settings',
  }
};

/* ─── i18n Engine ─────────────────────────────────────────── */
const i18n = {
  lang: 'ar',

  t(key) {
    return TRANSLATIONS[this.lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  },

  setLang(lang) {
    this.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
  },

  toggleLang() {
    this.setLang(this.lang === 'ar' ? 'en' : 'ar');
  }
};
