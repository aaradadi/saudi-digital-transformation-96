/* =====================================================================
   نظام الترجمة اللغوية المتكامل (Bilingual i18n System - AR / EN)
   ترجمة ديناميكية تفاعلية فورية لكافة الشاشات والعناصر
   ===================================================================== */

const I18N_TRANSLATIONS = {
  ar: {
    // Header & Actions
    brandSlogan: 'عزّنا بطبعنا',
    brandSub: 'اليوم الوطني السعودي 96 | التحول الرقمي',
    soundBtn: 'المؤثرات الصوتية',
    homeBtn: 'البداية',
    fullscreenBtn: 'ملء الشاشة',
    langBtn: 'EN',
    officialSourceBtn: '🔍 المصدر الرسمي المعتمد',

    // Dock
    dockPrev: '➔ السابق',
    dockNext: 'التالي ➔',
    dockRestart: '🔄 البداية',

    // Hero Section
    heroTag: '✦ رحلة وطن نحو المستقبل ✦',
    heroTitle: 'التحول الرقمي في المملكة',
    heroDesc: 'أمجادٌ تُروى، ورؤيةٌ تتحقق، وريادةٌ رقمية ترتقي بطموح يعانق عنان السماء بمناسبة اليوم الوطني 96.',
    heroStartBtn: '✨ ابدأ التجربة التفاعلية ➔',
    kingAbdulazizTitle: 'الملك عبدالعزيز',
    kingAbdulazizRole: 'المؤسس - طيب الله ثراه',
    kingSalmanTitle: 'خادم الحرمين الشريفين',
    kingSalmanRole: 'الملك سلمان بن عبدالعزيز آل سعود',
    crownPrinceTitle: 'صاحب السمو الملكي',
    crownPrinceRole: 'الأمير محمد بن سلمان بن عبدالعزيز',

    // Six Traits
    traitAuthenticity: '🌿 الأصالة',
    traitDetermination: '⛰️ الهمة',
    traitCourage: '⚔️ الشجاعة',
    traitGenerosity: '☕ الكرم',
    traitGiving: '🕊️ الجود',
    traitVision: '🌟 الرؤية والطموح',

    // Section 1: Saudi Achievements & Governance
    sec1Tag: 'القسم الأول | منجزات المملكة',
    sec1Title: 'التحول الرقمي والحوكمة الوطنية',
    sec1Desc: 'منظومة وطنية رائدة ترتكز على كفاءة الخدمات وسيادة البيانات وحوكمة الإجراءات الحكومية.',
    pillar1Title: 'الخدمات الرقمية',
    pillar1Desc: 'أتمتة المعاملات الحكومية بنسبة تفوق 97% وتقديم تجربة مستفيد متكاملة عبر منصات أبشر ونفاذ وتوكلنا.',
    pillar2Title: 'البيانات والذكاء الاصطناعي',
    pillar2Desc: 'بناء مراكز الحوسبة السيادية وبنك البيانات الوطني تحت إشراف (سدايا) وصناعة النماذج اللغوية الذكية.',
    pillar3Title: 'الحوكمة المؤسسية',
    pillar3Desc: 'تطبيق أعلى معايير الشفافية وإدارة المخاطر والامتثال لضوابط هيئة الحكومة الرقمية (DGA).',
    wheelPrompt: '👆 المس محاور عجلة الحوكمة لاستعراض الضوابط والمؤشرات الوطنية',

    // Section 2: Interactive Map & Vision 2030
    sec2Tag: 'القسم الثاني | خارطة الاستكشاف',
    sec2Title: 'خارطة التحول الرقمي ومحاور الرؤية 2030',
    sec2Desc: 'استكشف جغرافية التحول الرقمي في المملكة وارتباط المشاريع الكبرى بمحاور رؤية السعودية 2030 الثلاثة.',
    pillarSociety: 'مجتمع حيوي',
    pillarEconomy: 'اقتصاد مزدهر',
    pillarNation: 'وطن طموح',
    mapHint: '👆 المس أي منطقة على الخريطة لاستكشاف منجزاتها ومشاريعها الرقمية ومواءمتها مع محاور الرؤية',

    // Section 3: Umm Al-Qura University
    sec3Tag: 'القسم الثالث | وثائق الإنجازات الرسمية 2025',
    sec3Title: 'جامعة أم القرى: رحلة التحول الرقمي',
    sec3Desc: 'مؤشرات أداء استثنائية ونقلة نوعية في كفاءة التعليم والخدمات الذكية من التقريرين الرسميين المعتمدين 2025.',
    dgaChartTitle: '📈 مؤشر قياس التحول الرقمي (DGA) لآخر 3 سنوات',
    dgaChartSub: 'مقارنة نتائج قياس التحول الرقمي لجامعة أم القرى (تقرير 2025 - ص 245)',
    tabStudent: '🎓 رحلة الطالب الرقمية',
    tabFaculty: '👨‍🏫 رحلة عضو التدريس',
    tabAi: '🤖 مبادرات الذكاء الاصطناعي (8)',
    tabNational: '🏆 المنجزات الوطنية الكبرى',

    // Section 4: Ministry of Health
    sec4Tag: 'القسم الرابع | قطاع الصحة الرقمية',
    sec4Title: 'وزارة الصحة: رعاية ذكية بلا حدود',
    sec4Desc: 'منظومة صحية رقمية موحدة تقود العالم في التطبيب الاتصالي والمستشفيات الافتراضية والملف الطبي الموحد.',
    patientJourneyTitle: '🩺 مسار رحلة المريض الرقمية المتكاملة',

    // Section 5: Quiz
    sec5Tag: 'القسم الخامس | تحدي المعرفة',
    sec5Title: 'الاختبار الوطني: تحدي التحول الرقمي',
    sec5Desc: 'اختبر حصيلتك المعرفية في منجزات التحول الرقمي في المملكة وجامعة أم القرى لليوم الوطني 96.',

    // Section 6: Certificate & Registration
    sec6Tag: 'القسم السادس | توثيق الحضور والشهادات 2026',
    sec6Title: 'تسجيل بيانات الحضور وإصدار الشهادات الرسمية',
    sec6Desc: 'سجّل بياناتك الكريمة لتوثيق حضورك وتكريمك، وسيتم إرسال الشهادة الرسمية المعتمدة لعام 2026م إلى بريدك الإلكتروني بعد ختام الفعالية مباشرة من قِبل إدارة المعرض.',
    certNotice: 'تنبيه: يتم تسجيل وتوثيق بياناتك هنا فوراً، وستصلك النسخة الرسمية للشهادة عبر بريدك الإلكتروني بعد انتهاء الفعالية.',
    formName: 'الاسم الكامل (للطباعة على الشهادة): *',
    formEmail: 'البريد الإلكتروني (لاستلام الشهادة): *',
    formPhone: 'رقم الجوال / الواتساب (اختياري للتواصل):',
    formRole: 'الصفة / الفئة:',
    roleStudent: 'طالب / طالبة',
    roleFaculty: 'عضو هيئة تدريس',
    roleEmployee: 'موظف / موظفة',
    roleVisitor: 'زائر كريم',
    registerBtn: '✅ تسجيل بياناتي وتأكيد استلام الشهادة بالبريد',
    generateCertBtn: '🎓 إصدار وتوثيق الشهادة',
    downloadCertBtn: '📥 تحميل نسخة فورية (PNG)',
    printCertBtn: '🖨️ طباعة',
    emailCertBtn: '📧 إرسال إلى البريد الإلكتروني',
    certSlogan: 'عزّنا بطبعنا | اليوم الوطني 96'
  },

  en: {
    // Header & Actions
    brandSlogan: 'Our Pride in Who We Are',
    brandSub: 'Saudi National Day 96 | Digital Transformation',
    soundBtn: 'Audio Effects',
    homeBtn: 'Home',
    fullscreenBtn: 'Fullscreen',
    langBtn: 'عربي',
    officialSourceBtn: '🔍 Verified Official Source',

    // Dock
    dockPrev: '➔ Previous',
    dockNext: 'Next ➔',
    dockRestart: '🔄 Restart',

    // Hero Section
    heroTag: '✦ A Nation Journey Towards The Future ✦',
    heroTitle: 'Saudi Digital Transformation',
    heroDesc: 'Inspiring achievements, realized vision, and digital leadership embracing ambition on Saudi National Day 96.',
    heroStartBtn: '✨ Start Interactive Experience ➔',
    kingAbdulazizTitle: 'King Abdulaziz',
    kingAbdulazizRole: 'The Founder - May Allah Rest His Soul',
    kingSalmanTitle: 'Custodian of the Two Holy Mosques',
    kingSalmanRole: 'King Salman bin Abdulaziz Al Saud',
    crownPrinceTitle: 'His Royal Highness',
    crownPrinceRole: 'Crown Prince Mohammed bin Salman',

    // Six Traits
    traitAuthenticity: '🌿 Authenticity',
    traitDetermination: '⛰️ Determination',
    traitCourage: '⚔️ Courage',
    traitGenerosity: '☕ Generosity',
    traitGiving: '🕊️ Exceptional Giving',
    traitVision: '🌟 Vision & Ambition',

    // Section 1: Saudi Achievements & Governance
    sec1Tag: 'Section 1 | National Achievements',
    sec1Title: 'Digital Transformation & National Governance',
    sec1Desc: 'A leading national digital ecosystem built on service efficiency, data sovereignty, and robust governance.',
    pillar1Title: 'Digital Services',
    pillar1Desc: 'Over 97% automated government services delivering integrated citizen journeys via Absher, Nafath & Tawakkalna.',
    pillar2Title: 'Data & Artificial Intelligence',
    pillar2Desc: 'Establishing sovereign cloud data centers and national data banks guided by SDAIA and building Arabic LLMs.',
    pillar3Title: 'Institutional Governance',
    pillar3Desc: 'Adopting top global standards of transparency, enterprise risk management, and compliance with DGA regulations.',
    wheelPrompt: '👆 Touch the Governance Wheel sectors to explore national standards and metrics',

    // Section 2: Interactive Map & Vision 2030
    sec2Tag: 'Section 2 | Exploratory Map',
    sec2Title: 'Digital Map & Vision 2030 Pillars',
    sec2Desc: 'Explore Saudi Arabia\'s digital geography and how mega projects connect to the three Saudi Vision 2030 pillars.',
    pillarSociety: 'Vibrant Society',
    pillarEconomy: 'Thriving Economy',
    pillarNation: 'Ambitious Nation',
    mapHint: '👆 Touch any region on the map to explore its digital projects and alignment with Vision 2030 pillars',

    // Section 3: Umm Al-Qura University
    sec3Tag: 'Section 3 | 2025 Official Reports',
    sec3Title: 'Umm Al-Qura University: Digital Journey',
    sec3Desc: 'Exceptional performance metrics and smart educational advancements extracted from certified 2025 reports.',
    dgaChartTitle: '📈 DGA Digital Transformation Index (Last 3 Years)',
    dgaChartSub: 'Comparison of UQU digital measurement results (2025 Report - Page 245)',
    tabStudent: '🎓 Student Digital Journey',
    tabFaculty: '👨‍🏫 Faculty Member Journey',
    tabAi: '🤖 8 Artificial Intelligence Initiatives',
    tabNational: '🏆 Major National Milestones',

    // Section 4: Ministry of Health
    sec4Tag: 'Section 4 | Digital Health Sector',
    sec4Title: 'Ministry of Health: Smart Care Without Boundaries',
    sec4Desc: 'A world-leading unified healthcare ecosystem in telemedicine, virtual hospitals, and unified records.',
    patientJourneyTitle: '🩺 Integrated Patient Digital Journey',

    // Section 5: Quiz
    sec5Tag: 'Section 5 | Knowledge Challenge',
    sec5Title: 'National Quiz: Digital Transformation Challenge',
    sec5Desc: 'Test your knowledge on Saudi Arabia\'s digital achievements and UQU milestones for National Day 96.',

    // Section 6: Certificate
    // Section 6: Certificate & Registration
    sec6Tag: 'Section 6 | Attendance & Certificates 2026',
    sec6Title: 'Attendance Registration & Official Certification',
    sec6Desc: 'Enter your credentials to record your attendance. Your official 2026 certified certificate will be emailed directly to your registered inbox after the event concludes.',
    certNotice: 'Notice: Your details are recorded securely now. The official certified certificate will be dispatched to your email after the event.',
    formName: 'Full Name (For Certificate): *',
    formEmail: 'Email Address (To Receive Certificate): *',
    formPhone: 'Mobile / WhatsApp (Optional for updates):',
    formRole: 'Category / Role:',
    roleStudent: 'Student',
    roleFaculty: 'Faculty Member',
    roleEmployee: 'University Staff',
    roleVisitor: 'Valued Visitor',
    registerBtn: '✅ Register My Details & Confirm Delivery',
    generateCertBtn: '🎓 Issue & Certify Certificate',
    downloadCertBtn: '📥 Instant Preview / Download (PNG)',
    printCertBtn: '🖨️ Print',
    emailCertBtn: '📧 Send to My Email',
    certSlogan: 'Our Pride in Who We Are | National Day 96'
  }
};

class I18nManager {
  constructor() {
    this.currentLang = 'ar';
  }

  setLanguage(lang) {
    if (!I18N_TRANSLATIONS[lang]) return;
    this.currentLang = lang;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = I18N_TRANSLATIONS[lang];

    // تحديث النصوص ذات السمة data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // تحديث الخصائص ذات السمة data-i18n-attr (مثال: title:key أو placeholder:key)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const raw = el.getAttribute('data-i18n-attr');
      const [attr, key] = raw.split(':');
      if (attr && key && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });

    // تحديث زر اللغة
    const langBtn = document.getElementById('action-lang-btn');
    if (langBtn) {
      langBtn.textContent = dict.langBtn;
    }

    // إشعار المكونات الأخرى
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  t(key) {
    const dict = I18N_TRANSLATIONS[this.currentLang] || I18N_TRANSLATIONS.ar;
    return dict[key] || key;
  }

  toggle() {
    this.setLanguage(this.currentLang === 'ar' ? 'en' : 'ar');
  }
}

window.I18n = new I18nManager();
