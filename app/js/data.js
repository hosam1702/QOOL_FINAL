const QUESTION_DB = {
  "round1": [
    {
      "category": "geography",
      "ar": "ما هي دول مجلس التعاون الخليجي؟\n(الإجابة: السعودية — الإمارات — قطر — الكويت — البحرين — عُمان)",
      "en": "Name the GCC countries.\n(Ans: Saudi Arabia — UAE — Qatar — Kuwait — Bahrain — Oman)"
    },
    {
      "category": "geography",
      "ar": "ما هي القارات السبع في العالم؟\n(الإجابة: آسيا — أفريقيا — أمريكا الشمالية — أمريكا الجنوبية — أوروبا — أستراليا — القطب الجنوبي)",
      "en": "Name the seven continents.\n(Ans: Asia — Africa — North America — South America — Europe — Australia — Antarctica)"
    },
    {
      "category": "geography",
      "ar": "ما هي المحيطات الخمسة في العالم؟\n(الإجابة: الهادئ — الأطلسي — الهندي — المتجمد الشمالي — المتجمد الجنوبي)",
      "en": "Name the five oceans.\n(Ans: Pacific — Atlantic — Indian — Arctic — Southern)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على نهر النيل؟\n(الإجابة: مصر — السودان — إثيوبيا — أوغندا — كينيا — تنزانيا — رواندا — بوروندي — الكونغو — إريتريا)",
      "en": "Name countries bordering the Nile.\n(Ans: Egypt — Sudan — Ethiopia — Uganda — Kenya — Tanzania — Rwanda — Burundi — DR Congo — Eritrea)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول شمال أفريقيا؟\n(الإجابة: مصر — ليبيا — تونس — الجزائر — المغرب — موريتانيا — السودان)",
      "en": "Name the North African countries.\n(Ans: Egypt — Libya — Tunisia — Algeria — Morocco — Mauritania — Sudan)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول الدائمة العضوية في مجلس الأمن؟\n(الإجابة: أمريكا — روسيا — الصين — بريطانيا — فرنسا)",
      "en": "Name the UN Security Council permanent members.\n(Ans: USA — Russia — China — UK — France)"
    },
    {
      "category": "geography",
      "ar": "ما هي أطول أنهار العالم؟\n(الإجابة: النيل — الأمازون — اليانغتسي — المسيسيبي — يينيسي — أوب — الكونغو)",
      "en": "Name the world's longest rivers.\n(Ans: Nile — Amazon — Yangtze — Mississippi — Yenisei — Ob — Congo)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على البحر المتوسط؟\n(الإجابة: إسبانيا — فرنسا — إيطاليا — اليونان — تركيا — لبنان — سوريا — فلسطين — مصر — ليبيا — تونس — الجزائر — المغرب)",
      "en": "Name countries bordering the Mediterranean Sea.\n(Ans: Spain — France — Italy — Greece — Turkey — Lebanon — Syria — Palestine — Egypt — Libya — Tunisia — Algeria — Morocco)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول أمريكا الجنوبية؟\n(الإجابة: البرازيل — الأرجنتين — كولومبيا — تشيلي — بيرو — فنزويلا — الإكوادور — بوليفيا — باراغواي — أوروغواي — غيانا — سورينام)",
      "en": "Name the countries of South America.\n(Ans: Brazil — Argentina — Colombia — Chile — Peru — Venezuela — Ecuador — Bolivia — Paraguay — Uruguay — Guyana — Suriname)"
    },
    {
      "category": "geography",
      "ar": "ما هي أعلى قمم جبال العالم؟\n(الإجابة: إيفرست — K2 — كانشنجونغا — لهوتسي — ماكالو — تشو أويو — دهولاغيري — ماناسلو — نانغا باربات — أنابورنا)",
      "en": "Name the world's highest mountain peaks.\n(Ans: Everest — K2 — Kangchenjunga — Lhotse — Makalu — Cho Oyu — Dhaulagiri — Manaslu — Nanga Parbat — Annapurna)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول جزيرة العرب؟\n(الإجابة: السعودية — اليمن — عُمان — الإمارات — قطر — البحرين — الكويت)",
      "en": "Name the Arabian Peninsula countries.\n(Ans: Saudi Arabia — Yemen — Oman — UAE — Qatar — Bahrain — Kuwait)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على الخليج العربي؟\n(الإجابة: السعودية — الإمارات — قطر — البحرين — الكويت — العراق — إيران — عُمان)",
      "en": "Name countries bordering the Arabian Gulf.\n(Ans: Saudi Arabia — UAE — Qatar — Bahrain — Kuwait — Iraq — Iran — Oman)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكبر دول العالم مساحةً؟\n(الإجابة: روسيا — كندا — أمريكا — الصين — البرازيل — أستراليا — الهند — الأرجنتين — كازاخستان — الجزائر)",
      "en": "Name the largest countries by area.\n(Ans: Russia — Canada — USA — China — Brazil — Australia — India — Argentina — Kazakhstan — Algeria)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكثر دول العالم سكاناً؟\n(الإجابة: الهند — الصين — أمريكا — إندونيسيا — باكستان — البرازيل — نيجيريا — بنغلاديش — روسيا — إثيوبيا)",
      "en": "Name the most populous countries.\n(Ans: India — China — USA — Indonesia — Pakistan — Brazil — Nigeria — Bangladesh — Russia — Ethiopia)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على البحر الأحمر؟\n(الإجابة: السعودية — مصر — السودان — إريتريا — جيبوتي — اليمن — الأردن — فلسطين)",
      "en": "Name countries bordering the Red Sea.\n(Ans: Saudi Arabia — Egypt — Sudan — Eritrea — Djibouti — Yemen — Jordan — Palestine)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول أوروبا الغربية الكبرى؟\n(الإجابة: فرنسا — ألمانيا — إيطاليا — إسبانيا — البرتغال — بلجيكا — هولندا — سويسرا — النمسا)",
      "en": "Name the major Western European countries.\n(Ans: France — Germany — Italy — Spain — Portugal — Belgium — Netherlands — Switzerland — Austria)"
    },
    {
      "category": "geography",
      "ar": "ما هي الأنهار الكبرى في آسيا؟\n(الإجابة: اليانغتسي — الغانج — الميكونغ — الأوب — يينيسي — الأمور — الإنديس — الفرات — دجلة)",
      "en": "Name the major rivers of Asia.\n(Ans: Yangtze — Ganges — Mekong — Ob — Yenisei — Amur — Indus — Euphrates — Tigris)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول المغرب العربي؟\n(الإجابة: المغرب — الجزائر — تونس — ليبيا — موريتانيا)",
      "en": "Name the Maghreb countries.\n(Ans: Morocco — Algeria — Tunisia — Libya — Mauritania)"
    },
    {
      "category": "geography",
      "ar": "ما هي أشهر صحاري العالم؟\n(الإجابة: الصحراء الكبرى — صحراء العرب — صحراء جوبي — صحراء أنتاركتيكا — صحراء أستراليا — صحراء أتاكاما)",
      "en": "Name the world's most famous deserts.\n(Ans: Sahara — Arabian — Gobi — Antarctica — Australian — Atacama)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على المحيط الهندي؟\n(الإجابة: الهند — باكستان — إيران — عُمان — اليمن — موزمبيق — تنزانيا — كينيا — أستراليا — إندونيسيا)",
      "en": "Name countries bordering the Indian Ocean.\n(Ans: India — Pakistan — Iran — Oman — Yemen — Mozambique — Tanzania — Kenya — Australia — Indonesia)"
    },
    {
      "category": "geography",
      "ar": "ما هي أشهر بحيرات العالم؟\n(الإجابة: بايكال — فيكتوريا — سوبيريور — هيرون — ميشيغان — تنغانيقا — بالخاش — لادوغا)",
      "en": "Name the world's most famous lakes.\n(Ans: Baikal — Victoria — Superior — Huron — Michigan — Tanganyika — Balkhash — Ladoga)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المؤسسة لحلف الناتو؟\n(الإجابة: أمريكا — بريطانيا — فرنسا — كندا — إيطاليا — بلجيكا — هولندا — لوكسمبورغ — الدنمارك — النرويج — البرتغال — أيسلندا)",
      "en": "Name NATO's founding countries.\n(Ans: USA — UK — France — Canada — Italy — Belgium — Netherlands — Luxembourg — Denmark — Norway — Portugal — Iceland)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكبر جزر العالم؟\n(الإجابة: غرينلاند — غينيا الجديدة — بورنيو — مدغشقر — بافن — سومطرة — هونشو — فيكتوريا)",
      "en": "Name the world's largest islands.\n(Ans: Greenland — New Guinea — Borneo — Madagascar — Baffin — Sumatra — Honshu — Victoria)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول التي تمر بها جبال الأنديز؟\n(الإجابة: كولومبيا — فنزويلا — إكوادور — بيرو — بوليفيا — تشيلي — الأرجنتين)",
      "en": "Name the countries crossed by the Andes.\n(Ans: Colombia — Venezuela — Ecuador — Peru — Bolivia — Chile — Argentina)"
    },
    {
      "category": "geography",
      "ar": "ما هي أشهر مضايق العالم؟\n(الإجابة: جبل طارق — هرمز — ملقا — باب المندب — البوسفور — الدردنيل — دريك — ماجلان)",
      "en": "Name the world's most famous straits.\n(Ans: Gibraltar — Hormuz — Malacca — Bab-el-Mandeb — Bosphorus — Dardanelles — Drake — Magellan)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على بحر قزوين؟\n(الإجابة: روسيا — كازاخستان — تركمانستان — أذربيجان — إيران)",
      "en": "Name countries bordering the Caspian Sea.\n(Ans: Russia — Kazakhstan — Turkmenistan — Azerbaijan — Iran)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول أمريكا الوسطى؟\n(الإجابة: غواتيمالا — بليز — هندوراس — السلفادور — نيكاراغوا — كوستاريكا — بنما)",
      "en": "Name the Central American countries.\n(Ans: Guatemala — Belize — Honduras — El Salvador — Nicaragua — Costa Rica — Panama)"
    },
    {
      "category": "geography",
      "ar": "ما هي أشهر سلاسل جبال العالم؟\n(الإجابة: الهيمالايا — الأنديز — الروكي — الألب — الأورال — أطلس — قوقاز — كارباتيان)",
      "en": "Name the world's most famous mountain ranges.\n(Ans: Himalayas — Andes — Rockies — Alps — Urals — Atlas — Caucasus — Carpathians)"
    },
    {
      "category": "geography",
      "ar": "ما هي الدول المطلة على نهر الأمازون؟\n(الإجابة: البرازيل — بيرو — كولومبيا — إكوادور — بوليفيا — فنزويلا — غيانا)",
      "en": "Name countries through which the Amazon flows.\n(Ans: Brazil — Peru — Colombia — Ecuador — Bolivia — Venezuela — Guyana)"
    },
    {
      "category": "geography",
      "ar": "ما هي دول شرق أفريقيا؟\n(الإجابة: كينيا — تنزانيا — أوغندا — رواندا — بوروندي — إثيوبيا — الصومال — إريتريا — جيبوتي)",
      "en": "Name the East African countries.\n(Ans: Kenya — Tanzania — Uganda — Rwanda — Burundi — Ethiopia — Somalia — Eritrea — Djibouti)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي شكّلت دول الحلفاء في الحرب العالمية الثانية؟\n(الإجابة: أمريكا — بريطانيا — فرنسا — الاتحاد السوفيتي — الصين — كندا — أستراليا)",
      "en": "Name the Allied countries in World War II.\n(Ans: USA — UK — France — Soviet Union — China — Canada — Australia)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي شكّلت دول المحور في الحرب العالمية الثانية؟\n(الإجابة: ألمانيا — إيطاليا — اليابان)",
      "en": "Name the Axis countries in World War II.\n(Ans: Germany — Italy — Japan)"
    },
    {
      "category": "history",
      "ar": "ما هي الحضارات القديمة الكبرى في العالم؟\n(الإجابة: المصرية — الرومانية — اليونانية — الفارسية — الصينية — المايا — الإنكا — السومرية — الهندية)",
      "en": "Name the great ancient civilisations.\n(Ans: Egyptian — Roman — Greek — Persian — Chinese — Maya — Inca — Sumerian — Indian)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز معارك الحرب العالمية الثانية؟\n(الإجابة: ستالينغراد — النورماندي — العلمين — بحر المرجان — ميدواي — برلين — المحيط الأطلسي)",
      "en": "Name major battles of World War II.\n(Ans: Stalingrad — Normandy — El Alamein — Coral Sea — Midway — Berlin — Atlantic)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي كانت ضمن الاتحاد السوفيتي؟\n(الإجابة: روسيا — أوكرانيا — بيلاروسيا — كازاخستان — أوزبكستان — أذربيجان — جورجيا — أرمينيا — تركمانستان — طاجيكستان — قرغيزستان — مولدوفا — لاتفيا — ليتوانيا — إستونيا)",
      "en": "Name countries that were part of the Soviet Union.\n(Ans: Russia — Ukraine — Belarus — Kazakhstan — Uzbekistan — Azerbaijan — Georgia — Armenia — Turkmenistan — Tajikistan — Kyrgyzstan — Moldova — Latvia — Lithuania — Estonia)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز معارك الفتح الإسلامي؟\n(الإجابة: بدر — أحد — الخندق — اليرموك — القادسية — حطين — عين جالوت)",
      "en": "Name notable battles of the Islamic conquests.\n(Ans: Badr — Uhud — Khandaq — Yarmouk — Qadisiyyah — Hattin — Ain Jalut)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي استعمرتها بريطانيا؟\n(الإجابة: الهند — مصر — السودان — جنوب أفريقيا — أستراليا — كندا — نيوزيلندا — نيجيريا — كينيا — الأردن — العراق — فلسطين)",
      "en": "Name countries colonised by Britain.\n(Ans: India — Egypt — Sudan — South Africa — Australia — Canada — New Zealand — Nigeria — Kenya — Jordan — Iraq — Palestine)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الثورات في التاريخ الحديث؟\n(الإجابة: الثورة الفرنسية — الثورة الأمريكية — الثورة الروسية — الثورة الصناعية — الثورة الإيرانية — الثورة الصينية)",
      "en": "Name major revolutions in modern history.\n(Ans: French — American — Russian — Industrial — Iranian — Chinese)"
    },
    {
      "category": "history",
      "ar": "ما هي الإمبراطوريات الكبرى في التاريخ؟\n(الإجابة: الرومانية — المغولية — العثمانية — البريطانية — الفارسية — الإسلامية — الإسبانية — الصينية)",
      "en": "Name the great empires in history.\n(Ans: Roman — Mongol — Ottoman — British — Persian — Islamic — Spanish — Chinese)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز اتفاقيات السلام في التاريخ؟\n(الإجابة: فرساي — كامب ديفيد — أوسلو — ويستفاليا — بورتسموث — لوزان)",
      "en": "Name notable peace treaties in history.\n(Ans: Versailles — Camp David — Oslo — Westphalia — Portsmouth — Lausanne)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي استعمرتها فرنسا؟\n(الإجابة: الجزائر — المغرب — تونس — السنغال — مالي — ساحل العاج — سوريا — لبنان — الكاميرون — فيتنام)",
      "en": "Name countries colonised by France.\n(Ans: Algeria — Morocco — Tunisia — Senegal — Mali — Ivory Coast — Syria — Lebanon — Cameroon — Vietnam)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الاختراعات التي غيّرت التاريخ؟\n(الإجابة: الطباعة — البخار — الكهرباء — الهاتف — الطائرة — الإنترنت — المطبعة — البنسلين)",
      "en": "Name inventions that changed history.\n(Ans: Printing press — Steam engine — Electricity — Telephone — Airplane — Internet — Penicillin)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي خضعت للاستعمار الإيطالي؟\n(الإجابة: ليبيا — إريتريا — الصومال — إثيوبيا)",
      "en": "Name countries under Italian colonisation.\n(Ans: Libya — Eritrea — Somalia — Ethiopia)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز معارك نابليون بونابرت؟\n(الإجابة: أوسترليتز — واترلو — إيلاو — بورودينو — النيل — الأهرام — ليبزيغ)",
      "en": "Name Napoleon Bonaparte's most notable battles.\n(Ans: Austerlitz — Waterloo — Eylau — Borodino — Nile — Pyramids — Leipzig)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي أُسقطت فيها أنظمة شيوعية بعد 1989م؟\n(الإجابة: ألمانيا الشرقية — بولندا — تشيكوسلوفاكيا — رومانيا — المجر — بلغاريا — يوغوسلافيا — ألبانيا)",
      "en": "Name countries where communist regimes fell after 1989.\n(Ans: East Germany — Poland — Czechoslovakia — Romania — Hungary — Bulgaria — Yugoslavia — Albania)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الشخصيات التي غيّرت مجرى التاريخ؟\n(الإجابة: الإسكندر الأكبر — جنكيز خان — نابليون — هتلر — لينكولن — غاندي — ماو تسي تونغ — نيلسون مانديلا)",
      "en": "Name historical figures who changed the course of history.\n(Ans: Alexander the Great — Genghis Khan — Napoleon — Hitler — Lincoln — Gandhi — Mao Zedong — Nelson Mandela)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي استعمرها الإسبان في أمريكا اللاتينية؟\n(الإجابة: المكسيك — كولومبيا — بيرو — الأرجنتين — تشيلي — فنزويلا — إكوادور — بوليفيا — باراغواي — أوروغواي)",
      "en": "Name countries Spain colonised in Latin America.\n(Ans: Mexico — Colombia — Peru — Argentina — Chile — Venezuela — Ecuador — Bolivia — Paraguay — Uruguay)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الحضارات التي قامت في بلاد الرافدين؟\n(الإجابة: السومرية — الأكادية — البابلية — الآشورية — الكلدانية)",
      "en": "Name the major civilisations of Mesopotamia.\n(Ans: Sumerian — Akkadian — Babylonian — Assyrian — Chaldean)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز معاهدات الحرب العالمية الأولى؟\n(الإجابة: فرساي — سيفر — لوزان — سان جيرمان — نويي — تريانون)",
      "en": "Name notable treaties ending World War I.\n(Ans: Versailles — Sevres — Lausanne — Saint-Germain — Neuilly — Trianon)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول المؤسسة للاتحاد الأوروبي؟\n(الإجابة: فرنسا — ألمانيا — إيطاليا — بلجيكا — هولندا — لوكسمبورغ)",
      "en": "Name the EU founding countries.\n(Ans: France — Germany — Italy — Belgium — Netherlands — Luxembourg)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الأوبئة التي ضربت العالم عبر التاريخ؟\n(الإجابة: الطاعون الأسود — الجدري — الإنفلونزا الإسبانية — الكوليرا — شلل الأطفال — الإيبولا — كوفيد 19)",
      "en": "Name major pandemics in history.\n(Ans: Black Death — Smallpox — Spanish Flu — Cholera — Polio — Ebola — COVID-19)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز حروب القرن العشرين؟\n(الإجابة: الحرب العالمية الأولى — الثانية — كوريا — فيتنام — الخليج — يوم الغفران — الفوكلاند)",
      "en": "Name major wars of the 20th century.\n(Ans: WWI — WWII — Korea — Vietnam — Gulf War — Yom Kippur — Falklands)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي امتلكت السلاح النووي؟\n(الإجابة: أمريكا — روسيا — بريطانيا — فرنسا — الصين — الهند — باكستان — الكيان المحتل — كوريا الشمالية)",
      "en": "Name the nuclear-armed countries.\n(Ans: USA — Russia — UK — France — China — India — Pakistan — Israel — North Korea)"
    },
    {
      "category": "history",
      "ar": "ما هي الأسرات التي حكمت مصر القديمة؟\n(الإجابة: الأسرة الأولى — الثانية — الثالثة (بناة الأهرام) — الثامنة عشرة (تحتمس ورمسيس) — السادسة والعشرون)",
      "en": "Name the dynasties that ruled ancient Egypt.\n(Ans: 1st — 2nd — 3rd (pyramid builders) — 18th (Thutmose & Ramesses) — 26th)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الدول التي حكمها الإسكندر الأكبر؟\n(الإجابة: مقدونيا — اليونان — مصر — فارس — بابل — الهند — أفغانستان — سوريا)",
      "en": "Name territories ruled by Alexander the Great.\n(Ans: Macedonia — Greece — Egypt — Persia — Babylon — India — Afghanistan — Syria)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز اكتشافات عصر النهضة الأوروبي؟\n(الإجابة: اكتشاف أمريكا — طريق البحر للهند — نظرية مركزية الشمس — الطباعة — علم التشريح — المنظور في الفن)",
      "en": "Name key discoveries of the European Renaissance.\n(Ans: Discovery of America — Sea route to India — Heliocentrism — Printing press — Anatomy — Perspective in art)"
    },
    {
      "category": "history",
      "ar": "ما هي الأسباب الرئيسية لسقوط الإمبراطورية الرومانية؟\n(الإجابة: الغزوات البربرية — الأزمات الاقتصادية — الفساد — الانقسام — الضعف العسكري — المشكلات السياسية)",
      "en": "Name the main causes of the fall of the Roman Empire.\n(Ans: Barbarian invasions — Economic crises — Corruption — Division — Military weakness — Political problems)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الحضارات في أمريكا قبل الاستعمار؟\n(الإجابة: المايا — الأزتيك — الإنكا — الأولمك — التيوتيواكان — المسيسيبي)",
      "en": "Name major pre-colonial civilisations of the Americas.\n(Ans: Maya — Aztec — Inca — Olmec — Teotihuacan — Mississippian)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي تشكّلت بعد تفكك يوغوسلافيا؟\n(الإجابة: سلوفينيا — كرواتيا — البوسنة — صربيا — مقدونيا — الجبل الأسود — كوسوفو)",
      "en": "Name countries formed after Yugoslavia broke up.\n(Ans: Slovenia — Croatia — Bosnia — Serbia — Macedonia — Montenegro — Kosovo)"
    },
    {
      "category": "history",
      "ar": "ما هي أبرز الاتفاقيات التي رسمت خريطة الشرق الأوسط الحديث؟\n(الإجابة: سايكس بيكو — بلفور — لوزان — سيفر — القاهرة — وادي عربة)",
      "en": "Name key agreements that shaped the modern Middle East.\n(Ans: Sykes-Picot — Balfour — Lausanne — Sevres — Cairo — Wadi Araba)"
    },
    {
      "category": "history",
      "ar": "ما هي الدول التي شاركت في الحروب الصليبية ضد المسلمين؟\n(الإجابة: فرنسا — إنجلترا — ألمانيا — إيطاليا — النمسا — المجر — البرتغال — إسبانيا — بلجيكا — هولندا)",
      "en": "Name countries that participated in the Crusades against Muslims.\n(Ans: France — England — Germany — Italy — Austria — Hungary — Portugal — Spain — Belgium — Netherlands)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أركان الإسلام الخمسة؟\n(الإجابة: الشهادتان — الصلاة — الزكاة — الصوم — الحج)",
      "en": "Name the Five Pillars of Islam.\n(Ans: Shahada — Prayer — Zakat — Fasting — Hajj)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أركان الإيمان الستة؟\n(الإجابة: الإيمان بالله — الملائكة — الكتب السماوية — الرسل — اليوم الآخر — القدر خيره وشره)",
      "en": "Name the Six Pillars of Faith.\n(Ans: Belief in Allah — Angels — Holy Books — Prophets — Day of Judgement — Divine Decree)"
    },
    {
      "category": "islamic",
      "ar": "ما هي الكتب السماوية المذكورة في القرآن الكريم؟\n(الإجابة: القرآن — التوراة — الإنجيل — الزبور — صحف إبراهيم)",
      "en": "Name the holy scriptures mentioned in the Quran.\n(Ans: Quran — Torah — Gospel — Psalms — Scrolls of Abraham)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أسماء الله الحسنى المذكورة في القرآن؟\n(الإجابة: الرحمن — الرحيم — الملك — القدوس — السلام — المؤمن — العزيز — الغفار — الخالق — الرزاق)",
      "en": "Name some of Allah's beautiful names in the Quran.\n(Ans: Al-Rahman — Al-Rahim — Al-Malik — Al-Quddus — Al-Salam — Al-Mu'min — Al-Aziz — Al-Ghaffar — Al-Khaliq — Al-Razzaq)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أنبياء الله المذكورون في القرآن الكريم؟\n(الإجابة: آدم — نوح — إبراهيم — إسماعيل — إسحاق — يعقوب — يوسف — موسى — هارون — داود — سليمان — أيوب — يونس — عيسى — محمد — إدريس — هود — صالح — لوط — شعيب — ذو الكفل — إلياس — اليسع — زكريا — يحيى)",
      "en": "Name the Prophets mentioned in the Quran.\n(Ans: Adam — Noah — Abraham — Ishmael — Isaac — Jacob — Joseph — Moses — Aaron — David — Solomon — Job — Jonah — Jesus — Muhammad — Idris — Hud — Saleh — Lot — Shu'ayb — Dhul-Kifl — Elias — Al-Yasa' — Zechariah — John)"
    },
    {
      "category": "islamic",
      "ar": "ما هي فرائض الصلاة اليومية؟\n(الإجابة: الفجر — الظهر — العصر — المغرب — العشاء)",
      "en": "Name the five obligatory daily prayers.\n(Ans: Fajr — Dhuhr — Asr — Maghrib — Isha)"
    },
    {
      "category": "islamic",
      "ar": "ما هي شروط صحة الصلاة؟\n(الإجابة: الطهارة — ستر العورة — استقبال القبلة — دخول الوقت — اجتناب النجاسة)",
      "en": "Name the conditions for a valid prayer (Salah).\n(Ans: Purity — Covering the awrah — Facing Qibla — Prayer time — Avoiding impurity)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أعمال شهر رمضان؟\n(الإجابة: الصوم — القيام — الزكاة — العمرة — ليلة القدر — الاعتكاف — صدقة الفطر)",
      "en": "Name acts of worship during Ramadan.\n(Ans: Fasting — Night prayer — Zakat — Umrah — Laylat al-Qadr — I'tikaf — Zakat al-Fitr)"
    },
    {
      "category": "islamic",
      "ar": "ما هي مناسك الحج بالترتيب؟\n(الإجابة: الإحرام — الوقوف بعرفة — المبيت بمزدلفة — رمي جمرة العقبة — الذبح — الحلق — طواف الإفاضة — السعي — المبيت بمنى — رمي الجمرات — طواف الوداع)",
      "en": "Name the Hajj rituals in order.\n(Ans: Ihram — Arafat — Muzdalifah — Stoning Aqaba — Slaughter — Shaving — Tawaf al-Ifadah — Sa'i — Mina — Stoning Jamarat — Farewell Tawaf)"
    },
    {
      "category": "islamic",
      "ar": "ما هي الصحابة العشرة المبشرين بالجنة؟\n(الإجابة: أبو بكر — عمر — عثمان — علي — طلحة — الزبير — عبدالرحمن بن عوف — سعد بن أبي وقاص — سعيد بن زيد — أبو عبيدة)",
      "en": "Name the ten Companions promised Paradise.\n(Ans: Abu Bakr — Umar — Uthman — Ali — Talha — Zubayr — Abdurrahman ibn Awf — Sa'd ibn Abi Waqqas — Sa'id ibn Zayd — Abu Ubayda)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أمهات المؤمنين (زوجات النبي ﷺ)؟\n(الإجابة: خديجة — سودة — عائشة — حفصة — زينب بنت خزيمة — أم سلمة — زينب بنت جحش — جويرية — أم حبيبة — صفية — ميمونة)",
      "en": "Name the Mothers of the Believers (wives of the Prophet ﷺ).\n(Ans: Khadijah — Sawdah — Aisha — Hafsa — Zaynab bint Khuzaimah — Umm Salamah — Zaynab bint Jahsh — Juwairiyyah — Umm Habibah — Safiyyah — Maymunah)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أركان الوضوء؟\n(الإجابة: النية — غسل الوجه — غسل اليدين إلى المرفقين — مسح الرأس — غسل الرجلين إلى الكعبين)",
      "en": "Name the pillars of Wudu (ablution).\n(Ans: Intention — Wash face — Wash arms to elbows — Wipe head — Wash feet to ankles)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أبرز السور المكية في القرآن الكريم؟\n(الإجابة: الأنعام — الأعراف — يونس — هود — يوسف — الكهف — مريم — طه — الأنبياء — الفرقان)",
      "en": "Name some Meccan Surahs in the Quran.\n(Ans: Al-An'am — Al-A'raf — Yunus — Hud — Yusuf — Al-Kahf — Maryam — Taha — Al-Anbiya — Al-Furqan)"
    },
    {
      "category": "islamic",
      "ar": "ما هي غزوات النبي ﷺ الكبرى؟\n(الإجابة: بدر — أحد — الخندق — خيبر — مؤتة — فتح مكة — حنين — تبوك)",
      "en": "Name the major battles of the Prophet ﷺ.\n(Ans: Badr — Uhud — Khandaq — Khaybar — Mu'tah — Conquest of Mecca — Hunayn — Tabuk)"
    },
    {
      "category": "islamic",
      "ar": "ما هي الخلفاء الراشدون؟\n(الإجابة: أبو بكر الصديق — عمر بن الخطاب — عثمان بن عفان — علي بن أبي طالب)",
      "en": "Name the Rightly Guided Caliphs.\n(Ans: Abu Bakr al-Siddiq — Umar ibn al-Khattab — Uthman ibn Affan — Ali ibn Abi Talib)"
    },
    {
      "category": "islamic",
      "ar": "ما هي نواقض الوضوء؟\n(الإجابة: الخارج من السبيلين — زوال العقل — النوم — أكل لحم الإبل — مس الفرج)",
      "en": "Name things that invalidate Wudu.\n(Ans: Discharge — Loss of consciousness — Sleep — Eating camel meat — Touching private parts)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أنواع الزكاة؟\n(الإجابة: زكاة الذهب والفضة — زكاة عروض التجارة — زكاة الأنعام — زكاة الزروع والثمار — زكاة الفطر — زكاة المعادن)",
      "en": "Name the types of Zakat.\n(Ans: Zakat on gold & silver — Trade goods — Livestock — Crops & fruits — Zakat al-Fitr — Minerals)"
    },
    {
      "category": "islamic",
      "ar": "ما هي المساجد الثلاثة التي تُشد إليها الرحال؟\n(الإجابة: المسجد الحرام — المسجد النبوي — المسجد الأقصى)",
      "en": "Name the three mosques one may travel to for worship.\n(Ans: Al-Masjid al-Haram — Al-Masjid al-Nabawi — Al-Masjid al-Aqsa)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أسماء سورة الفاتحة؟\n(الإجابة: أم الكتاب — أم القرآن — السبع المثاني — الحمد — الشافية — الكافية — الوافية — الأساس)",
      "en": "Name the different names of Surah Al-Fatiha.\n(Ans: Umm al-Kitab — Umm al-Quran — Al-Sab' al-Mathani — Al-Hamd — Al-Shafiyah — Al-Asas)"
    },
    {
      "category": "islamic",
      "ar": "ما هي الكبائر في الإسلام؟\n(الإجابة: الشرك بالله — القتل — الزنا — السحر — أكل الربا — أكل مال اليتيم — الفرار من الزحف — قذف المحصنات)",
      "en": "Name major sins in Islam.\n(Ans: Shirk — Murder — Adultery — Sorcery — Usury — Consuming orphan's wealth — Fleeing battle — Accusing chaste women)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أيام الصيام المستحبة في الإسلام؟\n(الإجابة: يوم عرفة — يوم عاشوراء — الاثنين والخميس — الأيام البيض — ست من شوال — صيام داود)",
      "en": "Name recommended fasting days in Islam.\n(Ans: Day of Arafah — Ashura — Mondays & Thursdays — White Days — Six of Shawwal — Fasting of Dawud)"
    },
    {
      "category": "islamic",
      "ar": "ما هي الملائكة المذكورون في القرآن والسنة؟\n(الإجابة: جبريل — ميكائيل — إسرافيل — رضوان — مالك — منكر — نكير)",
      "en": "Name angels mentioned in the Quran and Sunnah.\n(Ans: Jibril — Mika'il — Israfil — Ridwan — Malik — Munkar — Nakir)"
    },
    {
      "category": "islamic",
      "ar": "ما هي شروط وجوب الزكاة؟\n(الإجابة: الإسلام — الحرية — بلوغ النصاب — تمام الملك — مضي الحول)",
      "en": "Name the conditions that make Zakat obligatory.\n(Ans: Islam — Freedom — Reaching the nisab — Full ownership — Completion of one lunar year)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أبواب الجنة الثمانية؟\n(الإجابة: باب الصلاة — باب الجهاد — باب الصدقة — باب الريان (الصائمين) — باب الحج — باب الكاظمين الغيظ — باب الأيمن — باب ذكر الله)",
      "en": "Name the eight gates of Paradise.\n(Ans: Prayer gate — Jihad gate — Charity gate — Al-Rayyan (fasting) — Hajj gate — Suppression of anger — Al-Ayman — Dhikr gate)"
    },
    {
      "category": "islamic",
      "ar": "ما هي مؤذنو النبي ﷺ؟\n(الإجابة: بلال بن رباح — عبدالله بن أم مكتوم — أبو محذورة — سعد القرظ)",
      "en": "Name the muadhdhins (callers to prayer) of the Prophet ﷺ.\n(Ans: Bilal ibn Rabah — Abdullah ibn Umm Maktum — Abu Mahdhura — Sa'd al-Quraz)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أيام التشريق؟\n(الإجابة: الحادي عشر — الثاني عشر — الثالث عشر من ذي الحجة)",
      "en": "Name the Days of Tashreeq.\n(Ans: 11th — 12th — 13th of Dhul Hijjah)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أسماء بنات النبي ﷺ؟\n(الإجابة: زينب — رقية — أم كلثوم — فاطمة الزهراء)",
      "en": "Name the daughters of the Prophet ﷺ.\n(Ans: Zaynab — Ruqayyah — Umm Kulthum — Fatimah al-Zahra)"
    },
    {
      "category": "islamic",
      "ar": "ما هي كتب الحديث الستة الكبرى (الصحاح الستة)؟\n(الإجابة: صحيح البخاري — صحيح مسلم — سنن أبي داود — سنن الترمذي — سنن النسائي — سنن ابن ماجه)",
      "en": "Name the six major hadith collections.\n(Ans: Sahih al-Bukhari — Sahih Muslim — Sunan Abi Dawud — Jami' al-Tirmidhi — Sunan al-Nasa'i — Sunan Ibn Majah)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أسماء يوم القيامة في القرآن؟\n(الإجابة: يوم القيامة — يوم الحساب — يوم الدين — يوم الفصل — الساعة — يوم البعث — الحاقة — القارعة — الطامة — الصاخة)",
      "en": "Name Quranic names for the Day of Judgement.\n(Ans: Yawm al-Qiyama — Day of Reckoning — Day of Judgement — Day of Separation — The Hour — Al-Haqqa — Al-Qari'a — Al-Tamma — Al-Sakhkha)"
    },
    {
      "category": "islamic",
      "ar": "ما هي أشهر الحج؟\n(الإجابة: شوال — ذو القعدة — عشر من ذي الحجة)",
      "en": "Name the months of Hajj.\n(Ans: Shawwal — Dhul Qi'dah — First ten days of Dhul Hijjah)"
    },
    {
      "category": "football",
      "ar": "اذكر منتخبًا فاز بكأس العالم\n(الإجابة: البرازيل، إيطاليا، ألمانيا، الأرجنتين، فرنسا، إنجلترا، أوروغواي، إسبانيا)",
      "en": "Name a national team that has won the FIFA World Cup.\n(Ans: Brazil, Italy, Germany, Argentina, France, England, Uruguay, Spain)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا فاز بدوري أبطال أوروبا (بالترتيب)\n(الإجابة: ريال مدريد، ميلان، ليفربول، بايرن ميونيخ، برشلونة، مانشستر يونايتد، إنتر ميلان، تشيلسي، بورتو، نوتنغهام فورست، أياكس، يوفنتوس، بنفيكا، بوروسيا دورتموند، مارسيليا، هامبورغ، سلتيك، فينورد، أستون فيلا، آيندهوفن، النجم الأحمر، ستيوا بوخارست)",
      "en": "Name a club that has won the UEFA Champions League.\n(Ans: Real Madrid, AC Milan, Liverpool, Bayern Munich, Barcelona, Man Utd, Inter Milan, Chelsea, Porto, Nottm Forest, Ajax, Juventus, Benfica, Dortmund, Marseille, Hamburg, Celtic, Feyenoord, Aston Villa, PSV, Red Star)"
    },
    {
      "category": "football",
      "ar": "اذكر لاعبًا فاز بكرة الذهب\n(الإجابة: ميسي، كريستيانو رونالدو، زيدان، رونالدو البرازيلي، مودريتش، كاكا، رونالدينيو)",
      "en": "Name a player who has won the Ballon d'Or.\n(Ans: Messi, Cristiano Ronaldo, Zidane, Ronaldo (Brazil), Modric, Kaka, Ronaldinho)"
    },
    {
      "category": "football",
      "ar": "اذكر بلدًا استضاف كأس العالم\n(الإجابة: البرازيل، ألمانيا، فرنسا، إيطاليا، إنجلترا، إسبانيا، المكسيك، الأرجنتين، السويد، قطر)",
      "en": "Name a country that has hosted the FIFA World Cup.\n(Ans: Brazil, Germany, France, Italy, England, Spain, Mexico, Argentina, Sweden, Qatar)"
    },
    {
      "category": "football",
      "ar": "اذكر مدربًا فاز بدوري أبطال أوروبا\n(الإجابة: كارلو أنشيلوتي، بيب غوارديولا، زيدان، أليكس فيرغسون، يورغن كلوب، جوزيه مورينيو)",
      "en": "Name a manager who has won the UEFA Champions League.\n(Ans: Carlo Ancelotti, Pep Guardiola, Zidane, Alex Ferguson, Jurgen Klopp, Jose Mourinho)"
    },
    {
      "category": "football",
      "ar": "اذكر مدينة استضافت نهائي دوري أبطال أوروبا\n(الإجابة: لندن، ميلانو، مدريد، إسطنبول، باريس، ميونيخ، منشستر، لشبونة، فيينا، برشلونة)",
      "en": "Name a city that has hosted the Champions League final.\n(Ans: London, Milan, Madrid, Istanbul, Paris, Munich, Manchester, Lisbon, Vienna, Barcelona)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا من الدوري الإيطالي\n(الإجابة: إنتر ميلان، ميلان، يوفنتوس، نابولي، روما، لاتسيو، أتالانتا، فيورنتينا، تورينو، بولونيا، جنوى، أودينيزي، بارما، ساسولو، كومو، كالياري، ليتشي، هيلاس فيرونا، بيزا، كريمونيزي)",
      "en": "Name a club in Italian Serie A.\n(Ans: Inter Milan, AC Milan, Juventus, Napoli, Roma, Lazio, Atalanta, Fiorentina, Torino, Bologna, Genoa, Udinese, Parma, Como, Cagliari, Lecce, Hellas Verona)"
    },
    {
      "category": "football",
      "ar": "اذكر ملعبًا شهيرًا في أوروبا\n(الإجابة: كامب نو، سانتياغو برنابيو، أنفيلد، أولد ترافورد، أليانز أرينا، ستانفورد بريدج، سان سيرو، يوفنتوس ستاديوم)",
      "en": "Name a famous football stadium in Europe.\n(Ans: Camp Nou, Santiago Bernabeu, Anfield, Old Trafford, Allianz Arena, Stamford Bridge, San Siro, Juventus Stadium)"
    },
    {
      "category": "football",
      "ar": "اذكر لاعبًا برازيليًا فاز بكرة الذهب\n(الإجابة: رونالدو، رونالدينيو، كاكا، روماريو)",
      "en": "Name a Brazilian player who has won the Ballon d'Or.\n(Ans: Ronaldo, Ronaldinho, Kaka, Romario)"
    },
    {
      "category": "football",
      "ar": "اذكر حارس مرمى فاز بجائزة ياشين\n(الإجابة: نوير، كورتوا، أليسون، إيدرسون، بوفون)",
      "en": "Name a goalkeeper who has won the Yashin Trophy.\n(Ans: Neuer, Courtois, Alisson, Ederson, Buffon)"
    },
    {
      "category": "football",
      "ar": "اذكر لاعبًا في الدوري السعودي (غير سعودي)\n(الإجابة: كريستيانو رونالدو، نيمار، كريم بنزيما، نغولو كانتي، ساديو ماني، ياسين بونو، جواو كانسيلو، تيو هيرنانديز، ميتروفيتش، رياض محرز، فرانك كيسي، فابينيو، كاليدو كوليبالي، روبن نيفيس وآخرون)",
      "en": "Name a non-Saudi player in the Saudi Pro League.\n(Ans: Cristiano Ronaldo, Neymar, Karim Benzema, N'Golo Kante, Sadio Mane, Yassine Bounou, Riyad Mahrez, Ruben Neves etc.)"
    },
    {
      "category": "football",
      "ar": "اذكر حارس مرمى مشهوراً\n(الإجابة: مانويل نوير، تيبو كورتوا، يان أوبلاك، جيانلويجي دوناروما، ديفيد رايا، أليسون، إيدرسون، أندري لونين)",
      "en": "Name a famous goalkeeper.\n(Ans: Manuel Neuer, Thibaut Courtois, Jan Oblak, Gianluigi Donnarumma, David Raya, Alisson, Ederson, Andriy Lunin)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا في الدوري الألماني (البوندسليغا)\n(الإجابة: بايرن ميونيخ، بوروسيا دورتموند، باير ليفركوزن، آر بي لايبزيغ، شتوتغارت، آينتراخت فرانكفورت، فرايبورغ، هامبورغ، أوغسبورغ، يونيون برلين، ماينز 05، هوفنهايم، فيردر بريمن، فولفسبورغ، كولن، سانت باولي، هايدنهايم)",
      "en": "Name a club in the German Bundesliga.\n(Ans: Bayern Munich, Borussia Dortmund, Bayer Leverkusen, RB Leipzig, Stuttgart, Eintracht Frankfurt, Freiburg, Hamburg, Union Berlin, Mainz 05, Hoffenheim, Werder Bremen, Wolfsburg, St. Pauli, Heidenheim)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا في الدوري الإسباني (لا ليغا)\n(الإجابة: ريال مدريد، برشلونة، أتلتيكو مدريد، إشبيلية، ريال بيتيس، فالنسيا، فياريال، ريال سوسيداد، أتلتيك بلباو، أوساسونا، خيتافي، جيرونا، ألافيس، رايو فاليكانو، ريال مايوركا، لاس بالماس، غرناطة)",
      "en": "Name a club in the Spanish La Liga.\n(Ans: Real Madrid, Barcelona, Atletico Madrid, Sevilla, Real Betis, Valencia, Villarreal, Real Sociedad, Athletic Bilbao, Osasuna, Getafe, Girona, Rayo Vallecano, Real Mallorca, Las Palmas, Granada)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا في الدوري الإنجليزي الممتاز\n(الإجابة: مانشستر سيتي، مانشستر يونايتد، ليفربول، أرسنال، تشيلسي، توتنهام هوتسبير، نيوكاسل يونايتد، أستون فيلا، برايتون، وست هام يونايتد، إيفرتون، فولهام، برينتفورد، بورنموث، كريستال بالاس، نوتنغهام فورست، ولفرهامبتون)",
      "en": "Name a club in the English Premier League.\n(Ans: Man City, Man Utd, Liverpool, Arsenal, Chelsea, Tottenham, Newcastle, Aston Villa, Brighton, West Ham, Everton, Fulham, Brentford, Bournemouth, Crystal Palace, Nottm Forest, Wolves)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا في الدوري التركي (السوبر ليغ)\n(الإجابة: غلطة سراي، فنربخشة، بشكتاش، طرابزون سبور، إسطنبول باشاكشير، أنطاليا سبور، قونيا سبور، ألانيا سبور، قاسم باشا، كايسري سبور، سامسون سبور، فاتح كاراجومروك)",
      "en": "Name a club in the Turkish Super Lig.\n(Ans: Galatasaray, Fenerbahce, Besiktas, Trabzonspor, Istanbul Basaksehir, Antalyaspor, Konyaspor, Alanyaspor, Kasimpasa, Kayserispor, Samsunspor, Fatih Karagumruk)"
    },
    {
      "category": "football",
      "ar": "اذكر ناديًا فاز بكأس الاتحاد الإنجليزي\n(الإجابة: أرسنال، مانشستر يونايتد، ليفربول، تشيلسي، توتنهام هوتسبير، مانشستر سيتي، نيوكاسل يونايتد، أستون فيلا، بورتسموث، بلاكبيرن روفرز، وست هام يونايتد، وولفرهامبتون، إيفرتون)",
      "en": "Name a club that has won the FA Cup.\n(Ans: Arsenal, Man Utd, Liverpool, Chelsea, Tottenham, Man City, Newcastle, Aston Villa, Portsmouth, Blackburn, West Ham, Wolves, Everton)"
    },
    {
      "category": "football",
      "ar": "اذكر لاعبًا فاز بالحذاء الذهبي الأوروبي\n(الإجابة: ليونيل ميسي، كريستيانو رونالدو، لويس سواريز، روبرت ليفاندوفسكي، هاري كين، إيرلينج هالاند، كيليان مبابي، تشيرو إيموبيلي، دييغو فورلان، فرانشيسكو توتي، لوكا توني، تييري هنري، رونالدو نازاريو)",
      "en": "Name a player who has won the European Golden Shoe.\n(Ans: Lionel Messi, Cristiano Ronaldo, Luis Suarez, Lewandowski, Harry Kane, Erling Haaland, Mbappe, Immobile, Diego Forlan, Francesco Totti, Luca Toni, Thierry Henry, Ronaldo Nazario)"
    },
    {
      "category": "football",
      "ar": "اذكر حارس مرمى فاز بالقفاز الذهبي\n(الإجابة: بيتر تشيك، جو هارت، بيبي رينا، أليسون بيكر، إيدرسون، تيبو كورتوا، دافيد دي خيا، إيكر كاسياس، جيانلويجي بوفون، أوليفر كان، فابيان بارتيز)",
      "en": "Name a goalkeeper who has won the Golden Glove.\n(Ans: Petr Cech, Joe Hart, Pepe Reina, Alisson, Ederson, Thibaut Courtois, David de Gea, Iker Casillas, Gianluigi Buffon, Oliver Kahn, Fabien Barthez)"
    },
    {
      "category": "football",
      "ar": "اذكر هدافًا لدوري أبطال أوروبا\n(الإجابة: كريستيانو رونالدو، ليونيل ميسي، روبرت ليفاندوفسكي، كريم بنزيما، راؤول غونزاليس، كيليان مبابي، تيري هنري، رود فان نيستلروي، توماس مولر، إرلينغ هالاند، فرانشيسكو توتي)",
      "en": "Name a top scorer in Champions League history.\n(Ans: Cristiano Ronaldo, Lionel Messi, Robert Lewandowski, Karim Benzema, Raul, Mbappe, Thierry Henry, Ruud van Nistelrooy, Thomas Muller, Erling Haaland, Francesco Totti)"
    },
    {
      "category": "football",
      "ar": "اذكر هدافًا لكأس العالم\n(الإجابة: ميروسلاف كلوزه، رونالدو البرازيلي، جيرد مولر، ليونيل ميسي، جوست فونتين، بيليه، كيليان مبابي، غاري لينيكر، توماس مولر، هاري كين، خاميس رودريغيز)",
      "en": "Name a World Cup top scorer.\n(Ans: Miroslav Klose, Ronaldo (Brazil), Gerd Muller, Lionel Messi, Just Fontaine, Pele, Kylian Mbappe, Gary Lineker, Thomas Muller, Harry Kane, James Rodriguez)"
    },
    {
      "category": "general",
      "ar": "اذكر جبال حول العالم ؟\n(الإجابة: إيفرست، كانشينجونغا، لوتسي، ماكالو، تشو أويو، دولاجيري، ماناسلو، نانغا باربات، أنابورنا، أكونكاغوا، كليمنجارو، فوجي، دمافند، أوليمبوس مونس، سيناء، أرارات، إتنا، كيلاوي)",
      "en": "Name mountains around the world.\n(Ans: Everest, Kangchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu, Nanga Parbat, Annapurna, Aconcagua, Kilimanjaro, Fuji, Damavand, Olympus, Sinai, Ararat, Etna, Kilauea)"
    },
    {
      "category": "general",
      "ar": "اذكر مخترع مشهور ؟\n(الإجابة: توماس إديسون، ألكسندر غراهام بيل، الأخوان رايت، نيكولا تسلا، ألكسندر فليمنغ، جيمس واط، يوهانس غوتنبرغ، بنجامين فرانكلين، ابن الهيثم، الجزري، الزهراوي، الخوارزمي، جابر بن حيان، عباس بن فرناس، أينشتاين، نيوتن، غاليليو، ماري كوري، تيم بيرنرز-لي، إدوارد جينر)",
      "en": "Name a famous inventor.\n(Ans: Thomas Edison, Alexander Graham Bell, Wright Brothers, Nikola Tesla, Alexander Fleming, James Watt, Gutenberg, Ben Franklin, Ibn al-Haytham, Al-Jazari, Al-Zahrawi, Al-Khwarizmi, Jabir ibn Hayyan, Abbas ibn Firnas, Einstein, Newton, Galileo, Marie Curie, Tim Berners-Lee, Edward Jenner)"
    },
    {
      "category": "general",
      "ar": "اذكر رياضات مشهوره؟\n(الإجابة: كرة القدم، كرة السلة، التنس، الكريكيت، الهوكي، كرة الطائرة، الجولف، البيسبول، السباحة، الجمباز، الملاكمة، ركوب الدراجات، كرة اليد، تنس الطاولة، ألعاب القوى، المصارعة، رفع الأثقال، الجودو، الرماية، الرجبي)",
      "en": "Name a popular sport.\n(Ans: Football, Basketball, Tennis, Cricket, Hockey, Volleyball, Golf, Baseball, Swimming, Gymnastics, Boxing, Cycling, Handball, Table Tennis, Athletics, Wrestling, Weightlifting, Judo, Archery, Rugby)"
    },
    {
      "category": "general",
      "ar": "اذكر قناه تلفزيونيه عربيه؟\n(الإجابة: الجزيرة، الـ MBC، العربية، روتانا، بي إن سبورتس، سكاي نيوز عربية، أبوظبي، دبي، النيل، النهار، الشرق، العراقية، الشرقية، الكويتية، الوطن، الرياضية، الناس، المحور، دريم، سبيستون، ART، قناة النيل الرياضية، قناة الشارقة، قناة لبنان، قناة المنار، قناة اليرموك، قناة الفرات، قناة الإيمان، قناة السلام، قناة الحياة، قناة الرحمة، قناة إقرأ، قناة اللياقة، قناة أنغامي، قناة سمو، قناة زمزم، قناة المدينة، قناة الأن، قناة روسيا اليوم عربي)",
      "en": "Name an Arabic TV channel.\n(Ans: Al Jazeera, MBC, Al Arabiya, Rotana, beIN Sports, Sky News Arabia, Abu Dhabi TV, Dubai TV, Al-Nahar, Al-Sharq, Al-Iraqiya, Al-Nas, Al-Mehwar, Dream TV, Spacetoon, ART etc.)"
    },
    {
      "category": "general",
      "ar": "اذكر بلاد تصنع السيارات؟\n(الإجابة: الصين، اليابان، الولايات المتحدة، ألمانيا، كوريا الجنوبية، الهند، المكسيك، البرازيل، إسبانيا، تايلاند، إيطاليا، فرنسا، كندا، تركيا، إندونيسيا)",
      "en": "Name a country that manufactures cars.\n(Ans: China, Japan, USA, Germany, South Korea, India, Mexico, Brazil, Spain, Thailand, Italy, France, Canada, Turkey, Indonesia)"
    },
    {
      "category": "general",
      "ar": "اذكر دول عربيه شاركت في كاس العالم؟\n(الإجابة: مصر، السعودية، المغرب، تونس، الجزائر، الكويت، العراق، الإمارات، قطر، الأردن)",
      "en": "Name an Arab country that has participated in the FIFA World Cup.\n(Ans: Egypt, Saudi Arabia, Morocco, Tunisia, Algeria, Kuwait, Iraq, UAE, Qatar, Jordan)"
    },
    {
      "category": "general",
      "ar": "اذكر حيوانات بحريه؟\n(الإجابة: سمكة البراكودا، كابوريا، فرس البحر، قنديل بحر، سرطان بحر، حوت أحدب، جمبري فرس النبي، تنين البحر، سمكة الشمس، حلزون بنفسجي، سمكة ببغاء، قرش غرينلاند، أبو شص، ينفوخية، مرلين شراعي، دوع صيني، شوكيات الجوف، خيار بحر، قرش، أخطبوط، حوت، دولفين، سلحفاة بحرية، نجم بحر، قنفذ بحر، جمبري، سلطعون، حبار، سمكة قرش مطرقة، سمكة تونة، بطريق، زلاجة، أنقليس)",
      "en": "Name a sea creature.\n(Ans: Barracuda, Crab, Seahorse, Jellyfish, Humpback whale, Mantis shrimp, Sea dragon, Sunfish, Parrotfish, Greenland shark, Stingray, Pufferfish, Sailfish, Shark, Octopus, Whale, Dolphin, Sea turtle, Starfish, Sea urchin, Shrimp, Squid, Hammerhead, Tuna, Penguin, Seal, Eel)"
    },
    {
      "category": "general",
      "ar": "اذكر دوله بدون شواطئ\n(الإجابة: أندورا، النمسا، بيلاروسيا، التشيك، المجر، ليختنشتاين، لوكسمبورغ، مقدونيا الشمالية، مولدوفا، سان مارينو، صربيا، سلوفاكيا، سويسرا، الفاتيكان، أفغانستان، أرمينيا، أذربيجان، بوتان، كازاخستان، قيرغيزستان، لاوس، منغوليا، نيبال، طاجيكستان، تركمانستان، أوزبكستان، بوتسوانا، بوركينا فاسو، بوروندي، جمهورية أفريقيا الوسطى، تشاد، إثيوبيا، ليسوتو، ملاوي، مالي، النيجر، رواندا، جنوب السودان، إسواتيني، أوغندا، زامبيا، زيمبابوي، بوليفيا، باراغواي)",
      "en": "Name a landlocked country.\n(Ans: Andorra, Austria, Belarus, Czech Republic, Hungary, Liechtenstein, Luxembourg, North Macedonia, Moldova, San Marino, Serbia, Slovakia, Switzerland, Vatican, Afghanistan, Armenia, Kazakhstan, Mongolia, Nepal, Bolivia, Paraguay etc.)"
    },
    {
      "category": "general",
      "ar": "اذكر عملات عربيه؟\n(الإجابة: الريال السعودي، الدرهم الإماراتي، الريال القطري، الدينار الكويتي، الدينار البحريني، الريال العُماني، الدرهم المغربي، الدينار الجزائري، الدينار التونسي، الدينار الليبي، الأوقية الموريتانية، الجنيه المصري، الجنيه السوداني، الريال اليمني، الفرنك الجيبوتي، الشلن الصومالي، الدينار العراقي، الليرة السورية، الليرة اللبنانية، الدينار الأردني، الشيكل الفلسطيني، الفرنك القمري)",
      "en": "Name an Arab currency.\n(Ans: Saudi Riyal, UAE Dirham, Qatari Riyal, Kuwaiti Dinar, Bahraini Dinar, Omani Rial, Moroccan Dirham, Algerian Dinar, Tunisian Dinar, Libyan Dinar, Egyptian Pound, Iraqi Dinar, Jordanian Dinar, Lebanese Pound, Syrian Pound, Yemeni Rial)"
    },
    {
      "category": "general",
      "ar": "اذكر عملات غير عربيه؟\n(الإجابة: الدولار الأمريكي، اليورو، الين الياباني، الجنيه الإسترليني، الدولار الكندي، الفرنك السويسري، الدولار الأسترالي، الكرونة الدنماركية، الدولار النيوزيلندي، الكرونة السويدية، الروبية الهندية، الراند الجنوب أفريقي، الدولار السنغافوري، الدولار الهونغ كونغي، الريال البرازيلي، البيزو المكسيكي، الروبل الروسي، الكرونة النرويجية، الفورنت المجري، الزلوتي البولندي، الدرام الأرمني، الكوانزا الأنغولية، المانات الأذري، البيزو الفلبيني، الدونغ الفيتنامي، الرينغيت الماليزي، الروبية الإندونيسية، البات التايلندي، التوغريك المنغولي، الكورونا التشيكية)",
      "en": "Name a non-Arab currency.\n(Ans: US Dollar, Euro, Japanese Yen, British Pound, Canadian Dollar, Swiss Franc, Australian Dollar, Danish Krone, NZ Dollar, Swedish Krona, Indian Rupee, South African Rand, Brazilian Real, Mexican Peso, Russian Ruble, Norwegian Krone)"
    },
    {
      "category": "general",
      "ar": "اذكر معالم سياحيه ؟\n(الإجابة: برج بيزا المائل، المدينة المحرمة بكين، جزيرة سنتوسا، حديقة غاردنز باي ذا باي، كهف باتو، عين لندن، قصر باكنغهام، المتحف البريطاني، حديقة هايد بارك، كازا باتيو، بارك غويل، ملعب كامب نو، البانثيون، متحف فان غوخ، متحف أورساي، مركز التجارة العالمي، غراند بالاس، قصر توبكابي، بورصة إسطنبول، جزيرة بالي، شاطئ كوبا كابانا، كريستو المنقذ، حديقة إيغواسو، أنغكور وات، بترا، وادي الملوك، كرنك، أسوان، تشيتشن إيتزا، قلعة كراك دي شوفالييه، قرية أبو سمبل، قصر الحمراء، مكتبة ألكسندريا، أنطاليا، كابادوكيا، طريق الحرير، بحيرة بايكال، جزر الفيجي، أورلاندو ديزني، يونيفرسال ستوديوز، سانتوريني، فيورد النرويج، مونت بلانك، برج إيفل، أهرامات الجيزة، تاج محل، سور الصين العظيم، تمثال الحرية، الكولوسيوم، برج خليفة، سوق واقف، ماتشو بيتشو، أكروبوليس أثينا، نوتردام، قصر فرساي، البندقية، جزر المالديف، شلالات نياغارا، غراند كانيون، موناكو، قرطاج، بابل)",
      "en": "Name a famous tourist landmark.\n(Ans: Eiffel Tower, Pyramids of Giza, Taj Mahal, Great Wall of China, Statue of Liberty, Colosseum, Burj Khalifa, Machu Picchu, Acropolis, Big Ben, Petra, Vatican, Santorini, Venice, Niagara Falls, Grand Canyon, Alhambra, Angkor Wat, Leaning Tower of Pisa)"
    },
    {
      "category": "general",
      "ar": "اذكر جميع شركات الهواتف\n(الإجابة: سامسونج، أبل، هواوي، شاومي، أوبو، فيفو، لينوفو، ترانسيون، زد تي إي، موتورولا، نوكيا، سوني، أسوس، ريلمي، غوغل بيكسل، ألتون، بلاكبيري، أمازون فاير، مايكروسوفت لوميا، كات، هونر، ريدا مي، بولارد، ون بلس، ميتيل، إتش تي سي، أكر، لافا، أستل، إنفينيكس، تكنو، بيو، وايبي)",
      "en": "Name a mobile phone manufacturer.\n(Ans: Samsung, Apple, Huawei, Xiaomi, Oppo, Vivo, Lenovo, ZTE, Motorola, Nokia, Sony, Asus, Realme, Google Pixel, Blackberry, OnePlus, HTC, Infinix, Tecno)"
    },
    {
      "category": "general",
      "ar": "اذكر رئيس دول او ملك لدول عربيه\n(الإجابة: سلمان بن عبد العزيز، محمد بن زايد، تميم بن حمد، مشعل الأحمد، حمد بن عيسى، هيثم بن طارق، محمد السادس، عبد المجيد تبون، قيس سعيد، محمد المنفي، أحمد الشرع، جوزيف عون، عبدالله الثاني، عبد اللطيف رشيد، محمود عباس، عبد الفتاح السيسي، عبد الفتاح البرهان، رشاد العليمي، حسن شيخ محمود، إسماعيل عمر جيليه، محمد ولد الغزواني، عزيزي عبد الله)",
      "en": "Name a president or king of an Arab country.\n(Ans: Salman bin Abdul-Aziz, Mohamed bin Zayed, Tamim bin Hamad, Mishaal Al-Ahmad, Hamad bin Isa, Haitham bin Tariq, Mohammed VI, Tebboune, Kais Saied, Abdel Fattah el-Sisi, Abdullah II etc.)"
    },
    {
      "category": "general",
      "ar": "اذكر فواكه\n(الإجابة: تفاح، موز، برتقال، مانجو، عنب، فراولة، كيوي، أناناس، ليمون، خوخ، مشمش، كرز، رمان، كمثرى، شمام، بطيخ، جريب فروت، بابايا، جوز الهند، أفوكادو، تين، تمر، جوافة، نكتارين، كستناء، دراقون فروت، طماطم)",
      "en": "Name a fruit.\n(Ans: Apple, Banana, Orange, Mango, Grapes, Strawberry, Kiwi, Pineapple, Lemon, Peach, Apricot, Cherry, Pomegranate, Pear, Melon, Watermelon, Papaya, Coconut, Avocado, Fig, Date, Guava)"
    },
    {
      "category": "general",
      "ar": "اذكر خضراوات\n(الإجابة: طماطم، خيار، باذنجان، جزر، بطاطس، بصل، ثوم، فلفل، كوسا، قرنبيط، بروكلي، سبانخ، خس، جرجير، كرنب، فاصوليا خضراء، بازلاء، فطر، كرفس، شبت، بنجر، لفت، بقدونس، كوسه)",
      "en": "Name a vegetable.\n(Ans: Tomato, Cucumber, Eggplant, Carrot, Potato, Onion, Garlic, Bell pepper, Zucchini, Cauliflower, Broccoli, Spinach, Lettuce, Cabbage, Green beans, Peas, Mushroom, Celery, Beet, Turnip, Parsley)"
    },
    {
      "category": "general",
      "ar": "اذكر جميع الرياضات الأولمبية ؟\n(الإجابة: ألعاب القوى، السباحة، الجمباز، الدراجات، التجديف، الملاكمة، المصارعة، رفع الأثقال، الرماية، رماية السهام، المبارزة، الجودو، التايكوندو، كرة السلة، كرة الطائرة، كرة اليد، كرة القدم، التنس، تنس الطاولة، الريشة الطائرة، كرة المضرب، الهوكي على العشب، الإبحار الشراعي، الفروسية، التراياثلون، الغطس، السباحة المائية، كرة الماء، البيسبول، السوفتبول، الكانو كاياك، تسلق الجبال، ركوب الأمواج، التزلج على لوح، البريك دانس، الغولف، الرجبي 7، الرولر سبورت، الخماسي الحديث)",
      "en": "Name an Olympic sport.\n(Ans: Athletics, Swimming, Gymnastics, Cycling, Rowing, Boxing, Wrestling, Weightlifting, Shooting, Archery, Fencing, Judo, Taekwondo, Basketball, Volleyball, Handball, Football, Tennis, Table Tennis, Badminton, Hockey, Sailing, Equestrian, Triathlon, Diving, Water Polo, Golf, Rugby 7s, Modern Pentathlon)"
    },
    {
      "category": "general",
      "ar": "اذكر اعضاء في جسم الانسان؟\n(الإجابة: القلب، الكبد، الكلى، الرئتان، الدماغ، المعدة، الأمعاء، البنكرياس، الرئتين، المثانة، الجلد، العظام، العضلات، العيون، الأذن، اللسان، الطحال، المخ، الحبل الشوكي)",
      "en": "Name a part or organ of the human body.\n(Ans: Heart, Liver, Kidneys, Lungs, Brain, Stomach, Intestines, Pancreas, Bladder, Skin, Bones, Muscles, Eyes, Ears, Tongue, Spleen, Spinal cord)"
    },
    {
      "category": "general",
      "ar": "اذكر دول الخليج ؟\n(الإجابة: السعودية، الإمارات، قطر، الكويت، البحرين، عُمان)",
      "en": "Name a Gulf (GCC) country.\n(Ans: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman)"
    },
    {
      "category": "general",
      "ar": "اذكر حضارات قديمه؟\n(الإجابة: السومريون، الأكاديون، البابليون، الآشوريون، الفراعنة، الحيثيون، الفينيقيون، الكنعانيون، العموريون، المصريون القدماء، اليونانيون، الرومان، الفرس الأخمينيون، المايا، الأزتيك، الإنكا، الصينيون القدماء، وادي السند، المينويون، الميسينيون، الفايكنج، الكلت، العيلاميون، النوبيون، الموحدون)",
      "en": "Name an ancient civilisation.\n(Ans: Sumerians, Akkadians, Babylonians, Assyrians, Pharaohs, Hittites, Phoenicians, Canaanites, Ancient Egyptians, Greeks, Romans, Achaemenid Persians, Maya, Aztec, Inca, Ancient Chinese, Indus Valley, Minoans, Mycenaeans, Vikings, Celts, Nubians)"
    },
    {
      "category": "general",
      "ar": "اذكر بحار ومحيطات؟\n(الإجابة: المحيط الهادئ، المحيط الأطلسي، المحيط الهندي، المحيط المتجمد الشمالي، المحيط المتجمد الجنوبي، البحر الأبيض المتوسط، البحر الأحمر، البحر الأسود، بحر العرب، بحر الشمال، بحر البلطيق، بحر إيجه، بحر الأدرياتيكي، بحر اليابان، بحر الصين الجنوبي، بحر الصين الشرقي، بحر بيرنغ، بحر قره، بحر بارنتس، بحر غرينلاند، بحر لابرادور، بحر الكاريبي، بحر المكسيك، بحر بالي، بحر تيمور، بحر أندامان، بحر لكديف، بحر آزوف، بحر مرمرة، بحر قزوين، البحر الميت)",
      "en": "Name a sea or ocean.\n(Ans: Pacific, Atlantic, Indian, Arctic, Southern, Mediterranean, Red Sea, Black Sea, Arabian Sea, North Sea, Baltic, Aegean, Adriatic, Sea of Japan, South China Sea, Bering Sea, Caribbean, Caspian Sea, Dead Sea)"
    },
    {
      "category": "general",
      "ar": "اذكر حيوانات؟\n(الإجابة: أسد، نمر، فيل، زرافة، ذئب، ثعلب، غزال، أرنب، كلب، قطة، حصان، بقرة، غنمة، ماعز، دجاجة، نسر، بومة، كانغارو، كوالا، باندا، غوريلا، شمبانزي، قرد، أرنب الغابة، دب قطبي، دب بني، فرس نهر، وحيد قرن، ذئب رمادي، نمر ثلجي، لاما، بومة صيادة، صقر، حمامة، بطة، غراب، ثعلب قطبي، بومة الثلج، ذئب أفريقي، حصان بري، بقرة برية، ماعز الجبل)",
      "en": "Name an animal.\n(Ans: Lion, Tiger, Elephant, Giraffe, Wolf, Fox, Gazelle, Rabbit, Dog, Cat, Horse, Cow, Sheep, Goat, Chicken, Eagle, Owl, Kangaroo, Koala, Panda, Gorilla, Chimpanzee, Monkey, Polar bear, Hippopotamus, Rhinoceros, Snow leopard, Llama, Falcon, Pigeon, Duck, Raven)"
    },
    {
      "category": "art",
      "ar": "اذكر أعمال الفنان أحمد عز (أفلام أو مسلسلات)؟\n(الإجابة: ملاكي إسكندرية، الرهينة، الشبح، مسجون ترانزيت، بدل فاقد، ولاد رزق، الممر، الجريمة، الإكسلانس، أبو عمر المصري، هجمة مرتدة)",
      "en": "Name a film or TV show starring Egyptian actor Ahmed Ezz.\n(Ans: Malaki Eskandareya, Al-Rahina, Al-Shabah, Masjoon Transit, Badal Faqid, Welad Rizk, Al-Mammar, Al-Jarima, The Excellence, Abu Omar Al-Masry, Hujumat Murtadda)"
    }
  ],
  "round2": [
    {
      "category": "general",
      "ar": "سمّي شيئاً تجده في المطبخ",
      "en": "Name something you find in the kitchen",
      "answers_ar": [
        "ثلاجة",
        "موقد",
        "طاولة",
        "ميكرويف",
        "غسالة أطباق",
        "خلاط",
        "طنجرة"
      ],
      "answers_en": [
        "Refrigerator",
        "Stove",
        "Table",
        "Microwave",
        "Dishwasher",
        "Blender",
        "Pot"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس قبل النوم",
      "en": "Name something people do before going to sleep",
      "answers_ar": [
        "يصلون",
        "يغسلون أسنانهم",
        "يقرؤون",
        "يشاهدون التلفاز",
        "يتصفحون الجوال",
        "يشربون ماء",
        "يأخذون دش"
      ],
      "answers_en": [
        "Pray",
        "Brush their teeth",
        "Read",
        "Watch TV",
        "Scroll their phone",
        "Drink water",
        "Take a shower"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي لوناً تحبه النساء كثيراً",
      "en": "Name a colour women love the most",
      "answers_ar": [
        "وردي",
        "أحمر",
        "أزرق",
        "أبيض",
        "بنفسجي",
        "ذهبي",
        "أخضر"
      ],
      "answers_en": [
        "Pink",
        "Red",
        "Blue",
        "White",
        "Purple",
        "Gold",
        "Green"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي حيواناً أليفاً شائعاً",
      "en": "Name a common household pet",
      "answers_ar": [
        "قطة",
        "كلب",
        "أرنب",
        "طائر",
        "سمكة",
        "هامستر",
        "سلحفاة"
      ],
      "answers_en": [
        "Cat",
        "Dog",
        "Rabbit",
        "Bird",
        "Fish",
        "Hamster",
        "Tortoise"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي وجبة يأكلها العرب في الإفطار",
      "en": "Name a food Arabs eat at Iftar",
      "answers_ar": [
        "تمر",
        "شوربة",
        "سمبوسة",
        "عصير",
        "حساء عدس",
        "فتة",
        "قمر الدين"
      ],
      "answers_en": [
        "Dates",
        "Soup",
        "Sambusa",
        "Juice",
        "Lentil soup",
        "Fattah",
        "Qamar al-Din (apricot drink)"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تحمله في حقيبتك",
      "en": "Name something you carry in your bag",
      "answers_ar": [
        "جوال",
        "محفظة",
        "مفاتيح",
        "نظارة",
        "مناديل",
        "قلم",
        "سماعات"
      ],
      "answers_en": [
        "Mobile phone",
        "Wallet",
        "Keys",
        "Glasses",
        "Tissues",
        "Pen",
        "Headphones"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي مكاناً يذهب إليه الناس في الإجازة",
      "en": "Name a place people go on holiday",
      "answers_ar": [
        "البحر",
        "الجبل",
        "مدينة ترفيهية",
        "المزرعة",
        "الخارج",
        "الاستراحة",
        "البر"
      ],
      "answers_en": [
        "The beach / sea",
        "The mountains",
        "Theme park / amusement park",
        "The farm",
        "Abroad",
        "A chalet / resort",
        "The desert / countryside"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي رياضة يمارسها العرب",
      "en": "سمّي رياضة يمارسها العرب",
      "answers_ar": [
        "كرة القدم",
        "السباحة",
        "التنس",
        "الجري",
        "كرة السلة",
        "الجيم",
        "ركوب الدراجات"
      ],
      "answers_en": [
        "Football",
        "السباحة",
        "التنس",
        "الجري",
        "كرة السلة",
        "الجيم",
        "ركوب الدراجات"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تشتريه من السوبرماركت دائماً",
      "en": "سمّي شيئاً تشتريه من السوبرماركت دائماً",
      "answers_ar": [
        "خبز",
        "حليب",
        "بيض",
        "أرز",
        "سكر",
        "زيت",
        "ماء"
      ],
      "answers_en": [
        "خبز",
        "حليب",
        "بيض",
        "أرز",
        "سكر",
        "زيت",
        "ماء"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي طعاماً شعبياً عربياً",
      "en": "سمّي طعاماً شعبياً عربياً",
      "answers_ar": [
        "كبسة",
        "مندي",
        "مجبوس",
        "فول",
        "كشري",
        "ملوخية",
        "منسف"
      ],
      "answers_en": [
        "كبسة",
        "مندي",
        "مجبوس",
        "فول",
        "كشري",
        "ملوخية",
        "منسف"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يتمنى الناس امتلاكه",
      "en": "سمّي شيئاً يتمنى الناس امتلاكه",
      "answers_ar": [
        "بيت",
        "سيارة",
        "مال",
        "صحة",
        "وظيفة جيدة",
        "سفر",
        "أسرة سعيدة"
      ],
      "answers_en": [
        "بيت",
        "سيارة",
        "مال",
        "صحة",
        "وظيفة جيدة",
        "سفر",
        "أسرة سعيدة"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي فاكهة يأكلها الناس كثيراً في الصيف",
      "en": "سمّي فاكهة يأكلها الناس كثيراً في الصيف",
      "answers_ar": [
        "بطيخ",
        "مانجو",
        "عنب",
        "خوخ",
        "تين",
        "رمان",
        "تفاح"
      ],
      "answers_en": [
        "بطيخ",
        "مانجو",
        "عنب",
        "خوخ",
        "تين",
        "رمان",
        "تفاح"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس في رمضان",
      "en": "سمّي شيئاً يفعله الناس في رمضان",
      "answers_ar": [
        "يصومون",
        "يصلون التراويح",
        "يتصدقون",
        "يجتمعون على الإفطار",
        "يقرؤون القرآن",
        "يعتكفون",
        "يؤدون العمرة"
      ],
      "answers_en": [
        "يصومون",
        "يصلون التراويح",
        "Give charity",
        "يجتمعون على الإفطار",
        "Read the Quran",
        "Do I'tikaf",
        "يؤدون العمرة"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي مهنة يحلم بها الأطفال",
      "en": "سمّي مهنة يحلم بها الأطفال",
      "answers_ar": [
        "طبيب",
        "طيار",
        "مهندس",
        "لاعب كرة",
        "شرطي",
        "معلم",
        "يوتيوبر"
      ],
      "answers_en": [
        "طبيب",
        "طيار",
        "مهندس",
        "لاعب كرة",
        "شرطي",
        "معلم",
        "يوتيوبر"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تجده في غرفة النوم",
      "en": "سمّي شيئاً تجده في غرفة النوم",
      "answers_ar": [
        "سرير",
        "خزانة",
        "مرآة",
        "تلفاز",
        "مكيف",
        "مصباح",
        "ستائر"
      ],
      "answers_en": [
        "سرير",
        "خزانة",
        "مرآة",
        "تلفاز",
        "مكيف",
        "مصباح",
        "ستائر"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي سبباً يجعل الناس يضحكون",
      "en": "سمّي سبباً يجعل الناس يضحكون",
      "answers_ar": [
        "نكتة",
        "موقف محرج",
        "فيديو مضحك",
        "طفل يلعب",
        "صاحب مضحك",
        "حيوان يتصرف",
        "تقليد شخص"
      ],
      "answers_en": [
        "نكتة",
        "موقف محرج",
        "فيديو مضحك",
        "طفل يلعب",
        "صاحب مضحك",
        "حيوان يتصرف",
        "تقليد شخص"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يشربه الناس في الصباح",
      "en": "سمّي شيئاً يشربه الناس في الصباح",
      "answers_ar": [
        "قهوة",
        "شاي",
        "عصير",
        "حليب",
        "ماء",
        "نسكافيه",
        "قهوة عربية"
      ],
      "answers_en": [
        "قهوة",
        "شاي",
        "Juice",
        "حليب",
        "ماء",
        "نسكافيه",
        "قهوة عربية"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس في عطلة نهاية الأسبوع",
      "en": "سمّي شيئاً يفعله الناس في عطلة نهاية الأسبوع",
      "answers_ar": [
        "يزورون الأهل",
        "يتسوقون",
        "يخرجون للمطاعم",
        "يرتاحون",
        "يتنزهون",
        "يشاهدون أفلام",
        "يمارسون رياضة"
      ],
      "answers_en": [
        "يزورون الأهل",
        "يتسوقون",
        "يخرجون للمطاعم",
        "يرتاحون",
        "يتنزهون",
        "يشاهدون أفلام",
        "Exercise"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً ينساه الناس في البيت",
      "en": "سمّي شيئاً ينساه الناس في البيت",
      "answers_ar": [
        "جوال",
        "مفاتيح",
        "محفظة",
        "نظارة",
        "شاحن",
        "ساعة",
        "وثائق"
      ],
      "answers_en": [
        "Mobile phone",
        "Keys",
        "Wallet",
        "Glasses",
        "شاحن",
        "ساعة",
        "وثائق"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يخافه الناس",
      "en": "سمّي شيئاً يخافه الناس",
      "answers_ar": [
        "الموت",
        "الحشرات",
        "الظلام",
        "الأماكن المرتفعة",
        "الفشل",
        "المرض",
        "الوحدة"
      ],
      "answers_en": [
        "الموت",
        "الحشرات",
        "الظلام",
        "الأماكن المرتفعة",
        "الفشل",
        "المرض",
        "الوحدة"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي هدية شائعة في الأعياد",
      "en": "سمّي هدية شائعة في الأعياد",
      "answers_ar": [
        "نقود",
        "ملابس",
        "عطر",
        "ساعة",
        "جوال",
        "ذهب",
        "شوكولاتة"
      ],
      "answers_en": [
        "نقود",
        "Clothes",
        "عطر",
        "ساعة",
        "Mobile phone",
        "ذهب",
        "Chocolate"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس عند الفرح",
      "en": "سمّي شيئاً يفعله الناس عند الفرح",
      "answers_ar": [
        "يرقصون",
        "يغنون",
        "يبتسمون",
        "يبكون من الفرح",
        "يصورون",
        "يحتفلون",
        "يوزعون حلوى"
      ],
      "answers_en": [
        "يرقصون",
        "يغنون",
        "يبتسمون",
        "يبكون من الفرح",
        "يصورون",
        "يحتفلون",
        "يوزعون حلوى"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تجده في السيارة",
      "en": "سمّي شيئاً تجده في السيارة",
      "answers_ar": [
        "مقاعد",
        "مرآة",
        "راديو",
        "معطر جو",
        "حزام أمان",
        "GPS",
        "طفاية"
      ],
      "answers_en": [
        "مقاعد",
        "مرآة",
        "راديو",
        "معطر جو",
        "حزام أمان",
        "GPS",
        "طفاية"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي نشاطاً يمارسه الناس في البحر",
      "en": "سمّي نشاطاً يمارسه الناس في البحر",
      "answers_ar": [
        "سباحة",
        "غوص",
        "صيد",
        "ركوب قوارب",
        "تشميس",
        "ركوب جت سكي",
        "بناء رمل"
      ],
      "answers_en": [
        "سباحة",
        "غوص",
        "صيد",
        "ركوب قوارب",
        "تشميس",
        "ركوب جت سكي",
        "بناء رمل"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يشتريه الناس في رمضان أكثر",
      "en": "سمّي شيئاً يشتريه الناس في رمضان أكثر",
      "answers_ar": [
        "تمر",
        "عصائر",
        "حلويات",
        "بخور",
        "فوانيس",
        "مكسرات",
        "قمر الدين"
      ],
      "answers_en": [
        "Dates",
        "عصائر",
        "Sweets / Candy",
        "بخور",
        "فوانيس",
        "Nuts",
        "Qamar al-Din (apricot drink)"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس عند التوتر",
      "en": "سمّي شيئاً يفعله الناس عند التوتر",
      "answers_ar": [
        "يأكلون",
        "ينامون",
        "يمشون",
        "يتصلون بصديق",
        "يشاهدون تلفاز",
        "يتصفحون جوال",
        "يصلون"
      ],
      "answers_en": [
        "يأكلون",
        "Sleep / take a nap",
        "يمشون",
        "يتصلون بصديق",
        "Watch TV",
        "يتصفحون جوال",
        "Pray"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي تطبيقاً يستخدمه الناس يومياً",
      "en": "سمّي تطبيقاً يستخدمه الناس يومياً",
      "answers_ar": [
        "واتساب",
        "إنستغرام",
        "يوتيوب",
        "تيك توك",
        "تويتر",
        "سناب شات",
        "جوجل"
      ],
      "answers_en": [
        "واتساب",
        "إنستغرام",
        "يوتيوب",
        "تيك توك",
        "تويتر",
        "سناب شات",
        "جوجل"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تفعله الأمهات كل يوم",
      "en": "سمّي شيئاً تفعله الأمهات كل يوم",
      "answers_ar": [
        "تطبخ",
        "تنظف",
        "تغسل ملابس",
        "تأخذ الأطفال للمدرسة",
        "تسوق",
        "تدعو لأولادها",
        "تسقي النباتات"
      ],
      "answers_en": [
        "تطبخ",
        "تنظف",
        "تغسل ملابس",
        "تأخذ الأطفال للمدرسة",
        "تسوق",
        "تدعو لأولادها",
        "تسقي النباتات"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي مكاناً يجتمع فيه العائلة",
      "en": "سمّي مكاناً يجتمع فيه العائلة",
      "answers_ar": [
        "غرفة المعيشة",
        "المطبخ",
        "المسجد",
        "حديقة المنزل",
        "غرفة الطعام",
        "السطح",
        "الاستراحة"
      ],
      "answers_en": [
        "غرفة المعيشة",
        "المطبخ",
        "المسجد",
        "حديقة المنزل",
        "غرفة الطعام",
        "السطح",
        "A chalet / resort"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس في الحفلات",
      "en": "سمّي شيئاً يفعله الناس في الحفلات",
      "answers_ar": [
        "يأكلون",
        "يرقصون",
        "يلتقطون صور",
        "يتحدثون",
        "يغنون",
        "يلعبون ألعاب",
        "يشربون عصير"
      ],
      "answers_en": [
        "يأكلون",
        "يرقصون",
        "يلتقطون صور",
        "يتحدثون",
        "يغنون",
        "يلعبون ألعاب",
        "يشربون عصير"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تشتريه كهدية للأم",
      "en": "سمّي شيئاً تشتريه كهدية للأم",
      "answers_ar": [
        "عطر",
        "ملابس",
        "ذهب",
        "زهور",
        "حقيبة",
        "ساعة",
        "شوكولاتة"
      ],
      "answers_en": [
        "عطر",
        "Clothes",
        "ذهب",
        "زهور",
        "حقيبة",
        "ساعة",
        "Chocolate"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي وقتاً يكون فيه الناس سعداء",
      "en": "سمّي وقتاً يكون فيه الناس سعداء",
      "answers_ar": [
        "العيد",
        "الإجازة",
        "الزواج",
        "الترقية في العمل",
        "ولادة طفل",
        "التخرج",
        "لمة الأهل"
      ],
      "answers_en": [
        "العيد",
        "الإجازة",
        "الزواج",
        "الترقية في العمل",
        "ولادة طفل",
        "التخرج",
        "لمة الأهل"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس في الصباح الباكر",
      "en": "Name something people do early in the morning",
      "answers_ar": [
        "يصلون الفجر",
        "يشربون قهوة",
        "يمارسون رياضة",
        "يقرؤون أخبار",
        "يستحمون",
        "يفطرون",
        "يراجعون جوال"
      ],
      "answers_en": [
        "Pray Fajr",
        "Drink coffee",
        "Exercise",
        "Read the news",
        "Take a shower",
        "Have breakfast",
        "Check their phone"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي لعبة يلعبها الأطفال",
      "en": "Name a game children play",
      "answers_ar": [
        "كرة القدم",
        "الغميضة",
        "البلياردو",
        "ألعاب فيديو",
        "سباق دراجات",
        "طائرة ورقية",
        "حجلة"
      ],
      "answers_en": [
        "Football",
        "Hide and seek",
        "Billiards / Pool",
        "Video games",
        "Bicycle race",
        "Kite",
        "Hopscotch"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يشتريه الناس عند السفر",
      "en": "Name something people buy when travelling",
      "answers_ar": [
        "هدايا تذكارية",
        "ملابس",
        "عطور",
        "حلويات",
        "مواد غذائية",
        "إكسسوارات",
        "كتب"
      ],
      "answers_en": [
        "Souvenirs",
        "Clothes",
        "Perfumes",
        "Sweets / Candy",
        "Food products",
        "Accessories",
        "Books"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يجعل الناس يبكون",
      "en": "Name something that makes people cry",
      "answers_ar": [
        "الحزن",
        "فيلم مؤثر",
        "فراق شخص عزيز",
        "الفرح الشديد",
        "الوجع",
        "أخبار حزينة",
        "ذكريات"
      ],
      "answers_en": [
        "Sadness",
        "A touching film",
        "فراق شخص عزيز",
        "Overwhelming joy",
        "الوجع",
        "أخبار حزينة",
        "ذكريات"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يحبه الرجال",
      "en": "سمّي شيئاً يحبه الرجال",
      "answers_ar": [
        "كرة القدم",
        "السيارات",
        "الأكل",
        "النوم",
        "الصيد",
        "التكنولوجيا",
        "السفر"
      ],
      "answers_en": [
        "Football",
        "السيارات",
        "الأكل",
        "النوم",
        "الصيد",
        "التكنولوجيا",
        "السفر"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تفعله قبل السفر",
      "en": "سمّي شيئاً تفعله قبل السفر",
      "answers_ar": [
        "تحزم حقيبتك",
        "تحجز الفندق",
        "تودع أهلك",
        "تشتري هدايا",
        "تصرف نقود",
        "تشتري ملابس",
        "تراجع جواز السفر"
      ],
      "answers_en": [
        "تحزم حقيبتك",
        "تحجز الفندق",
        "تودع أهلك",
        "تشتري هدايا",
        "تصرف نقود",
        "تشتري ملابس",
        "تراجع جواز السفر"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يحبه الأطفال",
      "en": "سمّي شيئاً يحبه الأطفال",
      "answers_ar": [
        "الحلوى",
        "اللعب",
        "الكارتون",
        "الرحلات",
        "الآيس كريم",
        "العيدية",
        "الألعاب الإلكترونية"
      ],
      "answers_en": [
        "الحلوى",
        "اللعب",
        "الكارتون",
        "الرحلات",
        "الآيس كريم",
        "العيدية",
        "الألعاب الإلكترونية"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تشعر به في الشتاء",
      "en": "سمّي شيئاً تشعر به في الشتاء",
      "answers_ar": [
        "برد",
        "نعاس",
        "رغبة في الأكل",
        "دفء عند المدفأة",
        "رغبة في الشاي",
        "كسل",
        "رغبة في التغطي"
      ],
      "answers_en": [
        "برد",
        "نعاس",
        "رغبة في الأكل",
        "دفء عند المدفأة",
        "رغبة في الشاي",
        "كسل",
        "رغبة في التغطي"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تفعله في يوم المطر",
      "en": "سمّي شيئاً تفعله في يوم المطر",
      "answers_ar": [
        "تبقى في البيت",
        "تشرب شاياً",
        "تنام",
        "تشاهد أفلام",
        "تطبخ",
        "تقرأ",
        "تجلس مع العائلة"
      ],
      "answers_en": [
        "تبقى في البيت",
        "تشرب شاياً",
        "تنام",
        "تشاهد أفلام",
        "تطبخ",
        "تقرأ",
        "تجلس مع العائلة"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يأكله الناس في الأفراح",
      "en": "سمّي شيئاً يأكله الناس في الأفراح",
      "answers_ar": [
        "أرز ولحم",
        "حلوى",
        "كيك",
        "مندي",
        "مشاوي",
        "سمك",
        "جريش"
      ],
      "answers_en": [
        "أرز ولحم",
        "Sweets / candy",
        "Cake",
        "مندي",
        "مشاوي",
        "سمك",
        "جريش"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تفعله عند المرض",
      "en": "سمّي شيئاً تفعله عند المرض",
      "answers_ar": [
        "تنام",
        "تأخذ دواء",
        "تشرب ماء دافئ",
        "تذهب للطبيب",
        "تشرب عسل",
        "تلزم الفراش",
        "تطلب مساعدة"
      ],
      "answers_en": [
        "تنام",
        "تأخذ دواء",
        "تشرب ماء دافئ",
        "تذهب للطبيب",
        "تشرب عسل",
        "تلزم الفراش",
        "تطلب مساعدة"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس في المسجد غير الصلاة",
      "en": "Name something people do in a mosque besides praying",
      "answers_ar": [
        "يقرؤون القرآن",
        "يتعلمون",
        "يجتمعون",
        "يذكرون الله",
        "يستمعون لدروس",
        "يعتكفون",
        "يتصدقون"
      ],
      "answers_en": [
        "Read the Quran",
        "Learn",
        "Gather together",
        "Do Dhikr (remembrance)",
        "Listen to lectures",
        "Do I'tikaf",
        "Give charity"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس في الجيم",
      "en": "Name something people do at the gym",
      "answers_ar": [
        "يرفعون أثقال",
        "يركضون",
        "يسبحون",
        "يمارسون يوغا",
        "يركبون دراجة ثابتة",
        "يمارسون بوكس",
        "يتمددون"
      ],
      "answers_en": [
        "Lift weights",
        "Run / jog",
        "Swim",
        "Do yoga",
        "Ride a stationary bike",
        "Box / do boxing",
        "Stretch"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يجلبه الضيف عند الزيارة",
      "en": "Name something a guest brings when visiting",
      "answers_ar": [
        "حلوى",
        "هدية",
        "كيك",
        "فاكهة",
        "عصير",
        "مكسرات",
        "شوكولاتة"
      ],
      "answers_en": [
        "Sweets / candy",
        "A gift",
        "Cake",
        "Fruit",
        "Juice",
        "Nuts",
        "Chocolate"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يتمنى الناس تغييره في أنفسهم",
      "en": "Name something people wish they could change about themselves",
      "answers_ar": [
        "الوزن",
        "الطول",
        "لون البشرة",
        "الشعر",
        "الأنف",
        "الأسنان",
        "العيون"
      ],
      "answers_en": [
        "Weight",
        "Height",
        "Skin colour",
        "Hair",
        "Nose",
        "Teeth",
        "Eyes"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يفعله الناس بعد الأكل",
      "en": "Name something people do after eating",
      "answers_ar": [
        "يشربون قهوة",
        "ينامون",
        "يتمشون",
        "يغسلون أيديهم",
        "يشاهدون تلفاز",
        "يتكلمون",
        "يأكلون حلوى"
      ],
      "answers_en": [
        "Drink coffee",
        "Sleep / take a nap",
        "Take a walk",
        "Wash their hands",
        "Watch TV",
        "Talk / chat",
        "Eat dessert"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً تجده في المستشفى",
      "en": "Name something you find in a hospital",
      "answers_ar": [
        "أطباء",
        "ممرضات",
        "أدوية",
        "أسرّة",
        "كراسي متحركة",
        "أجهزة طبية",
        "مختبر"
      ],
      "answers_en": [
        "Doctors",
        "Nurses",
        "Medicines",
        "Beds",
        "Wheelchairs",
        "Medical equipment",
        "Laboratory"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    },
    {
      "category": "general",
      "ar": "سمّي شيئاً يحبه الناس في الشتاء",
      "en": "Name something people enjoy in winter",
      "answers_ar": [
        "المطر",
        "الشاي الدافئ",
        "التجمع مع الأهل",
        "الكامبينج",
        "الملابس الثقيلة",
        "الحساء",
        "النوم الزيادة"
      ],
      "answers_en": [
        "Rain",
        "Warm tea",
        "Gathering with family",
        "الكامبينج",
        "الملابس الثقيلة",
        "الحساء",
        "النوم الزيادة"
      ],
      "points": [
        40,
        35,
        30,
        25,
        20,
        15,
        10
      ]
    }
  ],
  "round3": [
    {
      "category": "art",
      "ar": "اسم شخصية الرجل المتشائم في فيلم فول الصين العظيم\n(الإجابة: الأستاذ ممتاز)",
      "en": "What is the name of the pessimistic character in the film 'Fool Al-Seen Al-Azeem'?\n(Ans: Al-Ostaz Momtaz)"
    },
    {
      "category": "art",
      "ar": "نصي التحتاني مش حاسس بيه يا…… (جاءنا البيان التالي)\n(الإجابة: فخري)",
      "en": "Complete the famous line: 'Nassi al-tahtani mish hasis biih ya…' (from the film 'Ga'ana al-Bayan al-Tali')\n(Ans: Fakhri)"
    },
    {
      "category": "art",
      "ar": "اسم شخصية محمد لطفي في عيال حبيبة\n(الإجابة: بيجامة)",
      "en": "What is the name of Mohamed Lotfy's character in the series 'Eyal Habiba'?\n(Ans: Bijama)"
    },
    {
      "category": "art",
      "ar": "في فيلم جاءنا البيان التالي محمد هنيدي كانت شغلته إيه في المدرسة؟\n(الإجابة: الإذاعة المدرسية)",
      "en": "In the film 'Ga'ana Al-Bayan Al-Tali', what was Mohamed Henedy's job at the school?\n(Ans: School broadcast presenter)"
    },
    {
      "category": "art",
      "ar": "رقم العنبر اللي اشتغل فيه كريم عبد العزيز في الفيل الأزرق\n(الإجابة: ٨ غرب)",
      "en": "In the film 'The Blue Elephant', what was the ward number where Karim Abdel Aziz worked?\n(Ans: Ward 8 West)"
    },
    {
      "category": "art",
      "ar": "شريف منير طلع مذيع برنامج في فيلم إيه؟\n(الإجابة: حمادة يلعب)",
      "en": "In which film did Sherif Mounir play a TV programme presenter?\n(Ans: Hamada Yel'ab)"
    },
    {
      "category": "art",
      "ar": "في فيلم رمضان مبروك أبو العالمين حمودة، محمود متولي كان طالع ابن وزير إيه؟\n(الإجابة: الداخلية)",
      "en": "In the film 'Ramadan Mabrouk Abu Al-Alamin Hamouda', what ministry's son did Mahmoud Metawaa claim to be?\n(Ans: Son of the Minister of the Interior)"
    },
    {
      "category": "art",
      "ar": "الفيلم اللي كان فيه محمد هنيدي ومحمد فؤاد وخالد النبوي\n(الإجابة: إسماعيلية رايح جاي)",
      "en": "Which Egyptian film starred Mohamed Henedy, Mohamed Fouad, and Khaled El-Nabawy?\n(Ans: Ismaileya Rayeh Gayy)"
    },
    {
      "category": "art",
      "ar": "بطلة فيلم سجن النسا\n(الإجابة: نيلي كريم)",
      "en": "Who is the lead actress of the film 'Segn El-Nesa' (Women's Prison)?\n(Ans: Nelly Karim)"
    },
    {
      "category": "art",
      "ar": "أنهي سنة اصدر فيلم عمر وسلمى؟\n(الإجابة: ٢٠٠٧)",
      "en": "In which year was the film 'Omar & Salma' released?\n(Ans: 2007)"
    },
    {
      "category": "art",
      "ar": "بطل فيلم Rocky\n(الإجابة: سيلفستر ستالوني)",
      "en": "Who is the lead actor of the film Rocky?\n(Ans: Sylvester Stallone)"
    },
    {
      "category": "art",
      "ar": "ما اسم ممثل شخصية الجوكر في The Dark Knight؟\n(الإجابة: Heath Ledger)",
      "en": "Who played the Joker in The Dark Knight?\n(Ans: Heath Ledger)"
    },
    {
      "category": "art",
      "ar": "في فيلم الفيل الأزرق ما اسم الطبيب النفسي الذي يلعبه كريم عبد العزيز؟\n(الإجابة: يحيى راشد)",
      "en": "In the film 'The Blue Elephant', what is the name of the psychiatrist played by Karim Abdel Aziz?\n(Ans: Yahya Rashed)"
    },
    {
      "category": "art",
      "ar": "في فيلم الجزيرة ما اسم الشخصية التي لعبها أحمد السقا؟\n(الإجابة: منصور الحفني)",
      "en": "In the film 'Al-Jazeera', what is the name of the character played by Ahmed Al-Sakka?\n(Ans: Mansour Al-Hafni)"
    },
    {
      "category": "art",
      "ar": "في فيلم مرجان أحمد مرجان ماذا كان يعمل مرجان قبل دخوله الجامعة؟\n(الإجابة: رجل أعمال كبير)",
      "en": "In the Egyptian film 'Marjan Ahmed Marjan', what was Marjan's job before entering university?\n(Ans: A successful businessman)"
    },
    {
      "category": "art",
      "ar": "في فيلم صعيدي في الجامعة الأمريكية من أي محافظة جاء خلف الدهشوري؟\n(الإجابة: الصعيد (سوهاج))",
      "en": "In the film 'A Sa'idi at the American University', from which Egyptian governorate is Khalaf al-Dahshouri?\n(Ans: Upper Egypt — Sohag)"
    },
    {
      "category": "art",
      "ar": "في فيلم الناظر ما اسم المدرسة التي دارت فيها الأحداث؟\n(الإجابة: مدرسة عاشور)",
      "en": "In the film 'Al-Nazer', what is the name of the school where events take place?\n(Ans: Ashour School)"
    },
    {
      "category": "art",
      "ar": "في فيلم كده رضا كم شخصية لعبها أحمد حلمي؟\n(الإجابة: ثلاث شخصيات (التوأم الثلاثي))",
      "en": "In the film 'Kida Rida', how many characters did Ahmed Helmy play?\n(Ans: Three characters — a set of triplets)"
    },
    {
      "category": "art",
      "ar": "في فيلم إكس لارج ما اسم الشخصية التي لعبها أحمد حلمي؟\n(الإجابة: مجدي)",
      "en": "In the film 'XL', what is the name of the character played by Ahmed Helmy?\n(Ans: Magdy)"
    },
    {
      "category": "art",
      "ar": "في فيلم طير إنت ماذا كان يعمل البطل قبل ظهور الجني؟\n(الإجابة: طبيب بيطري)",
      "en": "In the film 'Teer Inta', what was the hero's job before the genie appeared?\n(Ans: A veterinarian)"
    },
    {
      "category": "art",
      "ar": "في مسلسل الأسطورة ما اسم الشخصية الأساسية التي لعبها محمد رمضان؟\n(الإجابة: ناصر الدسوقي)",
      "en": "In the TV series 'Al-Ustorah', what is the name of the main character played by Mohamed Ramadan?\n(Ans: Nasser Al-Dasouki)"
    },
    {
      "category": "football",
      "ar": "من هو اللاعب الذي سجل أسرع هاتريك في الدوري الإنجليزي؟\n(الإجابة: ساديو ماني)",
      "en": "Which player scored the fastest hat-trick in the Premier League?\n(Ans: Sadio Mane)"
    },
    {
      "category": "football",
      "ar": "من هو اللاعب الذي شارك في 653 مباراة في أكبر عدد من المباريات في الدوري الإنجليزي الممتاز؟\n(الإجابة: غاريث باري)",
      "en": "Which player with 653 games has made the most Premier League appearances?\n(Ans: Gareth Barry)"
    },
    {
      "category": "football",
      "ar": "ثلاثة لاعبين يتقاسمون الرقم القياسي لأكبر عدد من البطاقات الحمراء في الدوري الإنجليزي الممتاز (8). من هم؟\n(الإجابة: باتريك فييرا؛ ريتشارد دن؛ دنكان فيرجسون)",
      "en": "Three players share the record for most Premier League red cards (8). Who are they?\n(Ans: Patrick Vieira; Richard Dunne; Duncan Ferguson)"
    },
    {
      "category": "football",
      "ar": "برصيد 260 هدفا من هو الهداف التاريخي للدوري الإنجليزي الممتاز؟\n(الإجابة: آلان شيرر)",
      "en": "With 260 goals who is the Premier League's all-time top scorer?\n(Ans: Alan Shearer)"
    },
    {
      "category": "football",
      "ar": "متى كان الموسم الافتتاحي للدوري الممتاز؟\n(الإجابة: 1992-93)",
      "en": "When was the inaugural Premier League season?\n(Ans: 1992-93)"
    },
    {
      "category": "football",
      "ar": "من هو الفريق الذي فاز بأول لقب للدوري الممتاز؟\n(الإجابة: مانشستر يونايتد)",
      "en": "Which team won the first Premier League title?\n(Ans: Manchester United)"
    },
    {
      "category": "football",
      "ar": "مع 202 شباك نظيفة، من هو حارس المرمى صاحب أفضل سجل في الدوري الإنجليزي الممتاز؟\n(الإجابة: بيتر تشيك)",
      "en": "With 202 clean sheets which goalkeeper has the best record in the Premier League?\n(Ans: Petr Cech)"
    },
    {
      "category": "football",
      "ar": "كم عدد الأندية التي شاركت في الموسم الافتتاحي للدوري الممتاز؟\n(الإجابة: 22)",
      "en": "How many clubs competed in the inaugural Premier League season?\n(Ans: 22)"
    },
    {
      "category": "football",
      "ar": "من هم اللاعبون الثلاثة الذين تقاسموا الحذاء الذهبي للدوري الإنجليزي الممتاز في موسم 2018-19؟\n(الإجابة: بيير إيمريك أوباميانج؛ محمد صلاح؛ ساديو ماني)",
      "en": "Which three players shared the Premier League Golden Boot in 2018-19?\n(Ans: Pierre-Emerick Aubameyang; Mohamed Salah; Sadio Mane)"
    },
    {
      "category": "football",
      "ar": "أسرع هدف تم تسجيله في تاريخ الدوري الإنجليزي الممتاز جاء في 7.69 ثانية. من سجلها؟\n(الإجابة: شين لونج)",
      "en": "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?\n(Ans: Shane Long)"
    },
    {
      "category": "football",
      "ar": "كانت هناك بطولتان لكأس العالم. ما هو اسم الأول؟\n(الإجابة: كأس جول ريميه)",
      "en": "There have been two World Cup trophies. What was the name of the first?\n(Ans: Jules Rimet Trophy)"
    },
    {
      "category": "football",
      "ar": "ما هي الدولة التي فازت بأول بطولة لكأس العالم في عام 1930؟\n(الإجابة: أوروغواي)",
      "en": "Which country won the first ever World Cup in 1930?\n(Ans: Uruguay)"
    },
    {
      "category": "football",
      "ar": "ما هي الدولة التي فازت بأكبر عدد من بطولات كأس العالم؟\n(الإجابة: البرازيل)",
      "en": "Which country has won the most World Cups?\n(Ans: Brazil)"
    },
    {
      "category": "football",
      "ar": "فازت دولتان بكأس العالم مرتين. هل يمكنك تسميتهم؟\n(الإجابة: فرنسا؛ أوروغواي)",
      "en": "Two countries have won the World Cup twice. Can you name them?\n(Ans: France; Uruguay)"
    },
    {
      "category": "football",
      "ar": "ما هي الدولة التي شاركت في نهائيات كأس العالم ثلاث مرات ولم تفز بالبطولة؟\n(الإجابة: هولندا)",
      "en": "Which country has appeared in three World Cup finals but never won the competition?\n(Ans: Netherlands)"
    },
    {
      "category": "football",
      "ar": "سيتم استضافة كأس العالم 2026 في ثلاث دول مختلفة. هل يمكنك تسميتهم؟\n(الإجابة: الولايات المتحدة؛ كندا؛ المكسيك)",
      "en": "The 2026 World Cup will be hosted across three different countries. Can you name them?\n(Ans: United States; Canada; Mexico)"
    },
    {
      "category": "football",
      "ar": "في أي كأس عالم سجل دييغو مارادونا هدف يد الله الشهير؟\n(الإجابة: المكسيك 1986)",
      "en": "In which World Cup did Diego Maradona score his infamous Hand of God goal?\n(Ans: Mexico 1986)"
    },
    {
      "category": "football",
      "ar": "الرقم القياسي لأهداف كأس العالم هو 16 سجلها من؟\n(الإجابة: ميروسلاف كلوزه)",
      "en": "The record number of World Cup goals is 16 scored by who?\n(Ans: Miroslav Klose)"
    },
    {
      "category": "football",
      "ar": "ثلاثة أشخاص فازوا بكأس العالم كلاعب وكمدرب. ماريو زاجالو ديدييه ديشامب ومن؟\n(الإجابة: فرانز بيكنباور)",
      "en": "Three people have won the World Cup as a player and as a coach. Mario Zagallo Didier Deschamps and who?\n(Ans: Franz Beckenbauer)"
    },
    {
      "category": "football",
      "ar": "فاز لاعبان إنجليزيان بالحذاء الذهبي لكأس العالم. من هم؟\n(الإجابة: غاري لينيكر؛ هاري كين)",
      "en": "Two English players have won the World Cup Golden Boot. Who are they?\n(Ans: Gary Lineker; Harry Kane)"
    },
    {
      "category": "football",
      "ar": "من هو لاعب كرة القدم السويدي الذي كان لديه بند في عقده يمنعه من السفر إلى الفضاء؟\n(الإجابة: ستيفان شوارتز)",
      "en": "Which Swedish footballer once had a clause in his contract preventing him from travelling to space?\n(Ans: Stefan Schwarz)"
    },
    {
      "category": "football",
      "ar": "من هو الفائز بالكرة الذهبية الذي سُميت مجرة ​​باسمه في عام 2015؟\n(الإجابة: كريستيانو رونالدو)",
      "en": "Which Ballon d'Or winner had a galaxy named after them in 2015?\n(Ans: Cristiano Ronaldo)"
    },
    {
      "category": "football",
      "ar": "من هو اللاعب الألماني الدولي السابق الذي أصبح مصارعًا محترفًا في WWE؟\n(الإجابة: تيم ويز)",
      "en": "Which former Germany international became a WWE professional wrestler?\n(Ans: Tim Wiese)"
    },
    {
      "category": "football",
      "ar": "من هم اللاعبون الدوليون الإنجليزيون السابقون الذين وصلوا إلى المركز 12 في قوائم المملكة المتحدة مع Diamond Lights؟\n(الإجابة: كريس وادل؛ جلين هودل)",
      "en": "Which former England internationals reached number 12 in the UK charts with Diamond Lights?\n(Ans: Chris Waddle; Glenn Hoddle)"
    },
    {
      "category": "football",
      "ar": "أغنية يورو 96 \"ثلاثة أسود\" قام بأداءها أي ثنائي كوميدي؟\n(الإجابة: ديفيد باديل؛ فرانك سكينر)",
      "en": "The Euro 96 song Three Lions was performed by which comedy duo?\n(Ans: David Baddiel; Frank Skinner)"
    },
    {
      "category": "football",
      "ar": "من هو مدرب توتنهام السابق الذي شارك في رالي داكار؟\n(الإجابة: أندريه فيلاس بواش)",
      "en": "Which former Tottenham manager competed in the Dakar Rally?\n(Ans: Andre Villas-Boas)"
    },
    {
      "category": "football",
      "ar": "ما اسم الفندق الذي كان يعيش فيه جوزيه مورينيو أثناء تدريبه لمانشستر يونايتد؟\n(الإجابة: فندق لوري)",
      "en": "What was the name of the hotel Jose Mourinho lived in while managing Manchester United?\n(Ans: The Lowry Hotel)"
    },
    {
      "category": "football",
      "ar": "ما هو لقب النادي الأسباني لوس كولشونيروس ويعني صانعي المراتب؟\n(الإجابة: أتلتيكو مدريد)",
      "en": "Which Spanish club's nickname is Los Colchoneros meaning The Mattress Makers?\n(Ans: Atletico Madrid)"
    },
    {
      "category": "football",
      "ar": "إلتون جون كان صاحب نادي كرة القدم مرتين؟\n(الإجابة: واتفورد)",
      "en": "Elton John was twice the owner of which football club?\n(Ans: Watford)"
    },
    {
      "category": "football",
      "ar": "حاول رينجرز ذات مرة التوقيع مع أي نجم بعد اكتشافه في برنامج Football Manager؟\n(الإجابة: ليونيل ميسي)",
      "en": "Rangers once tried to sign which superstar after discovering him on Football Manager?\n(Ans: Lionel Messi)"
    },
    {
      "category": "football",
      "ar": "بدأ ميسي مسيرته الاحترافية في برشلونة، لكن ما هو فريق تلاميذه؟\n(الإجابة: نيويلز أولد بويز)",
      "en": "Messi began his professional career at Barcelona but what was his schoolboy team?\n(Ans: Newells Old Boys)"
    },
    {
      "category": "football",
      "ar": "ما هو الفريق البرتغالي الذي لعب له رونالدو قبل مانشستر يونايتد؟\n(الإجابة: سبورتنج)",
      "en": "Which Portuguese team did Ronaldo play for before Manchester United?\n(Ans: Sporting)"
    },
    {
      "category": "football",
      "ar": "رونالدو مرادف للرقم 7، لكن ما هو الرقم الآخر الذي ارتداه في ريال مدريد؟\n(الإجابة: 9)",
      "en": "Ronaldo is synonymous with number 7 but which other number did he wear at Real Madrid?\n(Ans: 9)"
    },
    {
      "category": "football",
      "ar": "ميسي اعتزل لفترة قصيرة كرة القدم الدولية في أي عام؟\n(الإجابة: 2016)",
      "en": "Messi briefly retired from international football in which year?\n(Ans: 2016)"
    },
    {
      "category": "football",
      "ar": "رونالدو بأي كلمة يصرخ عند الاحتفال بالهدف؟\n(الإجابة: سي)",
      "en": "Ronaldo shouts which word when celebrating a goal?\n(Ans: Si)"
    },
    {
      "category": "football",
      "ar": "ميسي ارتدى الرقمين 30 و10 مع برشلونة ولكن ما هو الرقم الآخر الذي ارتداه؟\n(الإجابة: 19)",
      "en": "Messi wore number 30 and 10 for Barcelona but which other number did he wear?\n(Ans: 19)"
    },
    {
      "category": "football",
      "ar": "من أي جزيرة برتغالية ينتمي كريستيانو رونالدو؟\n(الإجابة: ماديرا)",
      "en": "Which Portuguese island is Cristiano Ronaldo from?\n(Ans: Madeira)"
    },
    {
      "category": "football",
      "ar": "كم عدد جوائز الكرة الذهبية التي فاز بها ميسي؟\n(الإجابة: 8)",
      "en": "How many Ballon d'Or awards has Messi won?\n(Ans: 8)"
    },
    {
      "category": "football",
      "ar": "رونالدو ساعد البرتغال على الفوز ببطولة أوروبا في أي عام؟\n(الإجابة: 2016)",
      "en": "Ronaldo helped Portugal win the European Championship in which year?\n(Ans: 2016)"
    },
    {
      "category": "football",
      "ar": "ما هي شركة الملابس الرياضية الألمانية التي ترعى ميسي؟\n(الإجابة: أديداس)",
      "en": "Which German sportswear company sponsors Messi?\n(Ans: Adidas)"
    },
    {
      "category": "football",
      "ar": "ما هو النادي الذي فاز بأكبر عدد من ألقاب دوري أبطال أوروبا؟\n(الإجابة: ريال مدريد)",
      "en": "Which club has won the most Champions League titles?\n(Ans: Real Madrid)"
    },
    {
      "category": "football",
      "ar": "من هو اللاعب الوحيد الذي فاز بدوري أبطال أوروبا مع ثلاثة أندية مختلفة؟\n(الإجابة: كلارنس سيدورف)",
      "en": "Who is the only player to win the Champions League with three different clubs?\n(Ans: Clarence Seedorf)"
    },
    {
      "category": "football",
      "ar": "ثلاثة مدربين فازوا بدوري أبطال أوروبا ثلاث مرات. من هم؟\n(الإجابة: بوب بيزلي؛ بيب جوارديولا؛ زين الدين زيدان)",
      "en": "Three managers have won the Champions League three times. Who are they?\n(Ans: Bob Paisley; Pep Guardiola; Zinedine Zidane)"
    },
    {
      "category": "football",
      "ar": "في أي موسم تم تغيير اسم كأس أوروبا إلى دوري أبطال أوروبا؟\n(الإجابة: 1992-93)",
      "en": "In which season was the European Cup renamed the Champions League?\n(Ans: 1992-93)"
    },
    {
      "category": "football",
      "ar": "من هو أول فريق من المملكة المتحدة يفوز بكأس أوروبا؟\n(الإجابة: سلتيك)",
      "en": "Which team was the first from the UK to win the European Cup?\n(Ans: Celtic)"
    },
    {
      "category": "football",
      "ar": "من هو الفريق الروماني الذي فاز بكأس أوروبا؟\n(الإجابة: ستيوا بوخارست)",
      "en": "Which Romanian team has won the European Cup?\n(Ans: Steaua Bucharest)"
    },
    {
      "category": "football",
      "ar": "من هو الفريق الإنجليزي الذي فاز بكأسين أوروبيتين بعد ليفربول ومانشستر يونايتد؟\n(الإجابة: نوتنغهام فورست)",
      "en": "Which English team has won two European Cups after Liverpool and Manchester United?\n(Ans: Nottingham Forest)"
    },
    {
      "category": "football",
      "ar": "من هو الهداف التاريخي لدوري أبطال أوروبا؟\n(الإجابة: كريستيانو رونالدو)",
      "en": "Who is the all-time top scorer in the Champions League?\n(Ans: Cristiano Ronaldo)"
    },
    {
      "category": "football",
      "ar": "من هو المدرب الذي فاز بدوري أبطال أوروبا أكبر عدد من المرات؟\n(الإجابة: كارلو أنشيلوتي)",
      "en": "Which manager has won the Champions League the most times?\n(Ans: Carlo Ancelotti)"
    },
    {
      "category": "football",
      "ar": "من هو اللاعب الذي ظهر في نهائيات دوري أبطال أوروبا في ثلاثة عقود مختلفة؟\n(الإجابة: ريان جيجز)",
      "en": "Which outfield player appeared in Champions League finals in three different decades?\n(Ans: Ryan Giggs)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكبر قارة في العالم؟\n(الإجابة: آسيا)",
      "en": "What is the largest continent in the world?\n(Ans: Asia)"
    },
    {
      "category": "geography",
      "ar": "ما هو أكبر محيط في العالم؟\n(الإجابة: المحيط الهادئ)",
      "en": "What is the largest ocean in the world?\n(Ans: The Pacific Ocean)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة فرنسا؟\n(الإجابة: باريس)",
      "en": "What is the capital of France?\n(Ans: Paris)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة اليابان؟\n(الإجابة: طوكيو)",
      "en": "What is the capital of Japan?\n(Ans: Tokyo)"
    },
    {
      "category": "geography",
      "ar": "ما هو أطول نهر في العالم؟\n(الإجابة: نهر النيل)",
      "en": "What is the longest river in the world?\n(Ans: The Nile)"
    },
    {
      "category": "geography",
      "ar": "في أي قارة تقع دولة مصر؟\n(الإجابة: أفريقيا)",
      "en": "On which continent is Egypt located?\n(Ans: Africa)"
    },
    {
      "category": "geography",
      "ar": "ما هي أصغر دولة في العالم؟\n(الإجابة: الفاتيكان)",
      "en": "What is the smallest country in the world?\n(Ans: Vatican City)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة المملكة العربية السعودية؟\n(الإجابة: الرياض)",
      "en": "What is the capital of Saudi Arabia?\n(Ans: Riyadh)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة أستراليا؟\n(الإجابة: كانبيرا)",
      "en": "What is the capital of Australia?\n(Ans: Canberra)"
    },
    {
      "category": "geography",
      "ar": "كم عدد قارات العالم؟\n(الإجابة: 7 قارات)",
      "en": "How many continents are there in the world?\n(Ans: 7 continents)"
    },
    {
      "category": "geography",
      "ar": "ما هي أعلى قمة جبلية في العالم؟\n(الإجابة: جبل إيفرست)",
      "en": "What is the highest mountain peak in the world?\n(Ans: Mount Everest)"
    },
    {
      "category": "geography",
      "ar": "في أي قارة تقع البرازيل؟\n(الإجابة: أمريكا الجنوبية)",
      "en": "On which continent is Brazil located?\n(Ans: South America)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكبر صحراء رملية في العالم؟\n(الإجابة: الصحراء الكبرى)",
      "en": "What is the largest sand desert in the world?\n(Ans: The Sahara Desert)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة كندا؟\n(الإجابة: أوتاوا)",
      "en": "What is the capital of Canada?\n(Ans: Ottawa)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة البرازيل؟\n(الإجابة: برازيليا)",
      "en": "What is the capital of Brazil?\n(Ans: Brasilia)"
    },
    {
      "category": "geography",
      "ar": "ما هو أعمق بحيرة في العالم؟\n(الإجابة: بحيرة بايكال)",
      "en": "What is the deepest lake in the world?\n(Ans: Lake Baikal)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكبر دولة في العالم مساحةً؟\n(الإجابة: روسيا)",
      "en": "What is the largest country by area?\n(Ans: Russia)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة ألمانيا؟\n(الإجابة: برلين)",
      "en": "What is the capital of Germany?\n(Ans: Berlin)"
    },
    {
      "category": "geography",
      "ar": "في أي قارة تقع دولة نيجيريا؟\n(الإجابة: أفريقيا)",
      "en": "On which continent is Nigeria?\n(Ans: Africa)"
    },
    {
      "category": "geography",
      "ar": "ما هو المضيق الذي يفصل أوروبا عن أفريقيا؟\n(الإجابة: مضيق جبل طارق)",
      "en": "Which strait separates Europe from Africa?\n(Ans: Strait of Gibraltar)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة الصين؟\n(الإجابة: بكين)",
      "en": "What is the capital of China?\n(Ans: Beijing)"
    },
    {
      "category": "geography",
      "ar": "ما هي أطول سلسلة جبلية في العالم؟\n(الإجابة: جبال الأنديز)",
      "en": "What is the longest mountain range in the world?\n(Ans: The Andes)"
    },
    {
      "category": "geography",
      "ar": "في أي قارة تقع دولة كندا؟\n(الإجابة: أمريكا الشمالية)",
      "en": "On which continent is Canada?\n(Ans: North America)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة إيطاليا؟\n(الإجابة: روما)",
      "en": "What is the capital of Italy?\n(Ans: Rome)"
    },
    {
      "category": "geography",
      "ar": "كم عدد المحيطات في العالم؟\n(الإجابة: 5 محيطات)",
      "en": "How many oceans are there in the world?\n(Ans: 5 oceans)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة الهند؟\n(الإجابة: نيودلهي)",
      "en": "What is the capital of India?\n(Ans: New Delhi)"
    },
    {
      "category": "geography",
      "ar": "في أي قارة يقع جبل كليمنجارو؟\n(الإجابة: أفريقيا)",
      "en": "On which continent is Mount Kilimanjaro?\n(Ans: Africa)"
    },
    {
      "category": "geography",
      "ar": "ما هي أكبر دولة في أفريقيا مساحةً؟\n(الإجابة: الجزائر)",
      "en": "What is the largest country in Africa by area?\n(Ans: Algeria)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة روسيا؟\n(الإجابة: موسكو)",
      "en": "What is the capital of Russia?\n(Ans: Moscow)"
    },
    {
      "category": "geography",
      "ar": "ما هي عاصمة الدنمارك؟\n(الإجابة: كوبنهاغن)",
      "en": "What is the capital of Denmark?\n(Ans: Copenhagen)"
    },
    {
      "category": "geography",
      "ar": "المجموع: 30 سؤالاً وجواباً ✅",
      "en": "Total: 30 Questions & Answers"
    },
    {
      "category": "islamic",
      "ar": "من هو أبو البشر؟\n(الإجابة: سيدنا آدم عليه السلام)",
      "en": "Who is the father of all mankind?\n(Ans: Prophet Adam, peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هي زوجة سيدنا آدم؟\n(الإجابة: سيدتنا حواء)",
      "en": "Who was the wife of Prophet Adam?\n(Ans: Eve (Hawwa), peace be upon her)"
    },
    {
      "category": "islamic",
      "ar": "في أي جنة سكن آدم وحواء؟\n(الإجابة: الجنة)",
      "en": "In which garden did Adam and Eve dwell?\n(Ans: Paradise / Al-Janna)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي بنى السفينة؟\n(الإجابة: سيدنا نوح عليه السلام)",
      "en": "Which Prophet built the Ark?\n(Ans: Prophet Noah, peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "كم سنة دعا نوح قومه؟\n(الإجابة: 950 سنة)",
      "en": "For how many years did Noah call his people to Islam?\n(Ans: 950 years)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي ألقي في النار فلم تحرقه؟\n(الإجابة: سيدنا إبراهيم عليه السلام)",
      "en": "Which Prophet was thrown into fire but was not burned?\n(Ans: Prophet Abraham (Ibrahim), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم ابن إبراهيم الذي أمر بذبحه؟\n(الإجابة: سيدنا إسماعيل عليه السلام)",
      "en": "What is the name of Ibrahim's son whom he was commanded to sacrifice?\n(Ans: Prophet Ishmael (Isma'il), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي بنى الكعبة المشرفة؟\n(الإجابة: سيدنا إبراهيم وابنه إسماعيل)",
      "en": "Which Prophet built the Holy Kaaba?\n(Ans: Prophet Ibrahim and his son Isma'il, peace be upon them)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي ابتلع الحوت؟\n(الإجابة: سيدنا يونس عليه السلام)",
      "en": "Which Prophet was swallowed by a whale?\n(Ans: Prophet Jonah (Yunus), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم النبي الذي كان يصنع الدروع؟\n(الإجابة: سيدنا داود عليه السلام)",
      "en": "What is the name of the Prophet who used to make armour?\n(Ans: Prophet David (Dawud), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم أخ سيدنا موسى النبي؟\n(الإجابة: سيدنا هارون عليه السلام)",
      "en": "What is the name of Prophet Moses's brother?\n(Ans: Prophet Aaron (Harun), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي وُلد من غير أب؟\n(الإجابة: سيدنا عيسى عليه السلام)",
      "en": "Which Prophet was born without a father?\n(Ans: Prophet Jesus (Isa), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم والدة سيدنا عيسى؟\n(الإجابة: السيدة مريم عليها السلام)",
      "en": "What is the name of Prophet Jesus's mother?\n(Ans: Lady Maryam (Mary), peace be upon her)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُرسل إلى قوم عاد؟\n(الإجابة: سيدنا هود عليه السلام)",
      "en": "Which Prophet was sent to the people of Aad?\n(Ans: Prophet Hud, peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُرسل إلى قوم ثمود؟\n(الإجابة: سيدنا صالح عليه السلام)",
      "en": "Which Prophet was sent to the people of Thamud?\n(Ans: Prophet Saleh, peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "ما المعجزة التي أُعطيها سيدنا صالح؟\n(الإجابة: الناقة)",
      "en": "What miracle was given to Prophet Saleh?\n(Ans: The she-camel of Allah)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُرسل إلى أهل مدين؟\n(الإجابة: سيدنا شعيب عليه السلام)",
      "en": "Which Prophet was sent to the people of Madyan?\n(Ans: Prophet Shu'ayb, peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي ابتُلي بالمرض الشديد وصبر؟\n(الإجابة: سيدنا أيوب عليه السلام)",
      "en": "Which Prophet was afflicted with severe illness and showed great patience?\n(Ans: Prophet Job (Ayyub), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "كم عدد الأنبياء المذكورين في القرآن الكريم؟\n(الإجابة: 25 نبياً)",
      "en": "How many Prophets are mentioned in the Holy Quran?\n(Ans: 25 Prophets)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم النبي الذي كان يتكلم مع الطير؟\n(الإجابة: سيدنا سليمان عليه السلام)",
      "en": "Which Prophet could speak with birds?\n(Ans: Prophet Solomon (Sulayman), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُنزلت عليه التوراة؟\n(الإجابة: سيدنا موسى عليه السلام)",
      "en": "Which Prophet was given the Torah (Tawrat)?\n(Ans: Prophet Moses (Musa), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُنزل عليه الإنجيل؟\n(الإجابة: سيدنا عيسى عليه السلام)",
      "en": "Which Prophet was given the Gospel (Injeel)?\n(Ans: Prophet Jesus (Isa), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُنزلت عليه الزبور؟\n(الإجابة: سيدنا داود عليه السلام)",
      "en": "Which Prophet was given the Psalms (Zabur)?\n(Ans: Prophet David (Dawud), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي أُنزل عليه القرآن؟\n(الإجابة: سيدنا محمد ﷺ)",
      "en": "Which Prophet was given the Quran?\n(Ans: The Prophet Muhammad ﷺ)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم جبل نوح الذي استقرت عليه السفينة؟\n(الإجابة: جبل الجودي)",
      "en": "What is the name of the mountain where Noah's Ark came to rest?\n(Ans: Mount Judi (Al-Judi))"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي كان حسن الصوت؟\n(الإجابة: سيدنا داود عليه السلام)",
      "en": "Which Prophet was known for his beautiful voice?\n(Ans: Prophet David (Dawud), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "ما اسم ابن سيدنا نوح الذي غرق؟\n(الإجابة: كنعان (يام))",
      "en": "What is the name of Noah's son who drowned?\n(Ans: Kan'an (also called Yam))"
    },
    {
      "category": "islamic",
      "ar": "ما اسم زوجة سيدنا إبراهيم أم إسحاق؟\n(الإجابة: سارة)",
      "en": "What is the name of Ibrahim's wife, the mother of Isaac?\n(Ans: Sarah)"
    },
    {
      "category": "islamic",
      "ar": "من هو النبي الذي رأى الكواكب والشمس والقمر يسجدون له؟\n(الإجابة: سيدنا يوسف عليه السلام)",
      "en": "Which Prophet saw the stars, the sun and moon prostrating to him in a vision?\n(Ans: Prophet Joseph (Yusuf), peace be upon him)"
    },
    {
      "category": "islamic",
      "ar": "كم أخاً كان ليوسف؟\n(الإجابة: 11 أخاً)",
      "en": "How many brothers did Prophet Joseph (Yusuf) have?\n(Ans: 11 brothers)"
    },
    {
      "category": "islamic",
      "ar": "المجموع: 30 سؤالاً وجواباً ✅",
      "en": "Total: 30 Questions & Answers"
    },
    {
      "category": "history",
      "ar": "ما اسم أول إنسان مشى على سطح القمر؟\n(الإجابة: نيل أرمسترونج)",
      "en": "What is the name of the first human to walk on the moon?\n(Ans: Neil Armstrong)"
    },
    {
      "category": "history",
      "ar": "في أي عام غرقت سفينة تيتانيك؟\n(الإجابة: 1912م)",
      "en": "In which year did the Titanic sink?\n(Ans: 1912)"
    },
    {
      "category": "history",
      "ar": "ما هي أكبر إمبراطورية في التاريخ؟\n(الإجابة: الإمبراطورية المغولية)",
      "en": "What was the largest empire in history by land area?\n(Ans: The Mongol Empire)"
    },
    {
      "category": "history",
      "ar": "من بنى تاج محل؟\n(الإجابة: الإمبراطور شاه جهان)",
      "en": "Who built the Taj Mahal?\n(Ans: Emperor Shah Jahan)"
    },
    {
      "category": "history",
      "ar": "كم سنة استمرت الحرب العالمية الثانية؟\n(الإجابة: 6 سنوات (1939–1945م))",
      "en": "How many years did World War II last?\n(Ans: 6 years — 1939 to 1945)"
    },
    {
      "category": "history",
      "ar": "من هو مخترع الهاتف؟\n(الإجابة: ألكسندر غراهام بيل)",
      "en": "Who invented the telephone?\n(Ans: Alexander Graham Bell)"
    },
    {
      "category": "history",
      "ar": "ما اسم المدينة التي أُلقيت عليها أول قنبلة ذرية؟\n(الإجابة: هيروشيما — اليابان)",
      "en": "What is the name of the city on which the first atomic bomb was dropped?\n(Ans: Hiroshima — Japan)"
    },
    {
      "category": "history",
      "ar": "من هو أول رئيس للولايات المتحدة الأمريكية؟\n(الإجابة: جورج واشنطن)",
      "en": "Who was the first president of the United States of America?\n(Ans: George Washington)"
    },
    {
      "category": "history",
      "ar": "في أي عام سقط جدار برلين؟\n(الإجابة: 1989م)",
      "en": "In which year did the Berlin Wall fall?\n(Ans: 1989)"
    },
    {
      "category": "history",
      "ar": "من هو مؤسس الإمبراطورية المغولية؟\n(الإجابة: جنكيز خان)",
      "en": "Who founded the Mongol Empire?\n(Ans: Genghis Khan)"
    },
    {
      "category": "history",
      "ar": "في أي عام اكتشف كريستوفر كولومبوس أمريكا؟\n(الإجابة: 1492م)",
      "en": "In which year did Christopher Columbus discover America?\n(Ans: 1492 CE)"
    },
    {
      "category": "history",
      "ar": "ما اسم المؤرخ اليوناني الملقب بأبي التاريخ؟\n(الإجابة: هيرودوت)",
      "en": "What is the name of the Greek historian known as the 'Father of History'?\n(Ans: Herodotus)"
    },
    {
      "category": "history",
      "ar": "من هو مخترع المصباح الكهربائي؟\n(الإجابة: توماس إديسون)",
      "en": "Who invented the electric light bulb?\n(Ans: Thomas Edison)"
    },
    {
      "category": "history",
      "ar": "ما اسم الصحراء الأكبر في العالم؟\n(الإجابة: صحراء أنتاركتيكا)",
      "en": "What is the name of the largest desert in the world?\n(Ans: Antarctica — the Antarctic Desert)"
    },
    {
      "category": "history",
      "ar": "من هو أول رائد فضاء يصل إلى الفضاء؟\n(الإجابة: يوري غاغارين)",
      "en": "Who was the first astronaut to reach space?\n(Ans: Yuri Gagarin)"
    },
    {
      "category": "history",
      "ar": "في أي عام بدأت الحرب العالمية الأولى؟\n(الإجابة: 1914م)",
      "en": "In which year did World War I begin?\n(Ans: 1914)"
    },
    {
      "category": "history",
      "ar": "ما هي أقصر حرب في التاريخ؟\n(الإجابة: حرب إنجلترا وزنجبار)",
      "en": "What is the shortest war in history?\n(Ans: The Anglo-Zanzibar War — lasted 38-45 minutes)"
    },
    {
      "category": "history",
      "ar": "من هو مؤسس الدولة العثمانية؟\n(الإجابة: عثمان بن أرطغرل)",
      "en": "Who founded the Ottoman Empire?\n(Ans: Osman I)"
    },
    {
      "category": "history",
      "ar": "من فتح القسطنطينية؟\n(الإجابة: السلطان محمد الفاتح)",
      "en": "Who conquered Constantinople?\n(Ans: Sultan Muhammad al-Fatih — Mehmed II)"
    },
    {
      "category": "history",
      "ar": "ما اسم السفينة التي أبحر فيها كولومبوس؟\n(الإجابة: سانتا ماريا)",
      "en": "What is the name of the ship Columbus sailed on?\n(Ans: Santa Maria)"
    },
    {
      "category": "history",
      "ar": "من هو مؤسس الدولة الأموية؟\n(الإجابة: معاوية بن أبي سفيان)",
      "en": "Who was the founder of the Umayyad Caliphate?\n(Ans: Muawiyah ibn Abi Sufyan)"
    },
    {
      "category": "history",
      "ar": "في أي بلد وُلد نابليون بونابرت؟\n(الإجابة: جزيرة كورسيكا — فرنسا)",
      "en": "In which country was Napoleon Bonaparte born?\n(Ans: Island of Corsica — France)"
    },
    {
      "category": "history",
      "ar": "متى قامت الثورة الفرنسية؟\n(الإجابة: 1789م)",
      "en": "When did the French Revolution take place?\n(Ans: 1789 CE)"
    },
    {
      "category": "history",
      "ar": "ما اسم المعركة التي هُزم فيها نابليون نهائياً؟\n(الإجابة: معركة واترلو)",
      "en": "What is the name of the battle in which Napoleon was finally defeated?\n(Ans: Battle of Waterloo)"
    },
    {
      "category": "history",
      "ar": "من هو مخترع الطباعة؟\n(الإجابة: يوهانس غوتنبرغ)",
      "en": "Who invented the printing press?\n(Ans: Johannes Gutenberg)"
    },
    {
      "category": "history",
      "ar": "في أي عام انتهى الاستعمار البريطاني للهند؟\n(الإجابة: 1947م)",
      "en": "In which year did British colonisation of India end?\n(Ans: 1947)"
    },
    {
      "category": "history",
      "ar": "من قاد حركة استقلال الهند؟\n(الإجابة: مهاتما غاندي)",
      "en": "Who led India's independence movement?\n(Ans: Mahatma Gandhi)"
    },
    {
      "category": "history",
      "ar": "متى تأسست الأمم المتحدة؟\n(الإجابة: 24 أكتوبر 1945م)",
      "en": "When was the United Nations founded?\n(Ans: 24 October 1945)"
    },
    {
      "category": "history",
      "ar": "في أي عام انهار الاتحاد السوفيتي؟\n(الإجابة: 1991م)",
      "en": "In which year did the Soviet Union collapse?\n(Ans: 1991)"
    },
    {
      "category": "history",
      "ar": "من هو القائد الذي سُمّي جبل طارق باسمه؟\n(الإجابة: طارق بن زياد)",
      "en": "Which commander is the Strait of Gibraltar named after?\n(Ans: Tariq ibn Ziyad)"
    },
    {
      "category": "history",
      "ar": "المجموع: 30 سؤالاً وجواباً ✅",
      "en": "Total: 30 Questions & Answers"
    }
  ]
};



function getQuestions(roundName, categories) {
  let all = QUESTION_DB[roundName] || [];
  if (categories && categories.length > 0) {
    const filtered = all.filter(q => categories.includes(q.category));
    all = filtered.length > 0 ? filtered : all;
  }
  return all.sort(() => Math.random() - 0.5);
}
