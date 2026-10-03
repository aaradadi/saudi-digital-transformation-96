/* =====================================================================
   مسارات الرحلات التفاعلية (Student, Faculty, Patient Journeys - Bilingual)
   ===================================================================== */

const JOURNEYS_DATA = {
  student: [
    {
      step: 1,
      titleAr: 'القبول والتسجيل الذكي الفوري',
      titleEn: 'Instant Smart Admission',
      icon: '📝',
      summaryAr: 'فرز إلكتروني ومفاضلة مؤتمتة بنسبة 100% بالربط مع نظام نور وهيئة قياس.',
      summaryEn: '100% automated screening integrated with Noor and Qiyas national platforms.'
    },
    {
      step: 2,
      titleAr: 'الهوية الرقمية والبطاقة الجامعية',
      titleEn: 'Digital Student ID Card',
      icon: '🪪',
      summaryAr: 'إصدار فوري للبطاقة عبر محفظة الهاتف الذكي والعبور الذكي للمرافق عبر NFC.',
      summaryEn: 'Instant issuance via mobile wallet for seamless NFC access to campus facilities.'
    },
    {
      step: 3,
      titleAr: 'البيئة الأكاديمية والتعلم المدمج',
      titleEn: 'Smart Learning Environment',
      icon: '💻',
      summaryAr: '6M ساعة استخدام لنظام بلاك بورد، و105 معامل محدثة، ومساعد أكاديمي ذكي.',
      summaryEn: '6M Blackboard hours, 105 modern tech labs, and intelligent student guidance.'
    },
    {
      step: 4,
      titleAr: 'الحياة الجامعية والخدمات الذاتية',
      titleEn: 'Campus Self-Services (Wafi & Clinic)',
      icon: '🏥',
      summaryAr: 'إنجاز أكثر من 850 ألف طلب إلكتروني عبر "بوابتي" وتطبيق "عيادتي" الصحي.',
      summaryEn: 'Over 850K e-requests resolved via MyPortal and MyClinic healthcare system.'
    },
    {
      step: 5,
      titleAr: 'التخرج الرقمي وبرامج MicroX',
      titleEn: 'Digital Graduation & MicroX',
      icon: '🎓',
      summaryAr: 'وثائق تخرج رقمية مشفرة فورية، و13 برنامجاً قصيراً مؤهلاً لسوق العمل.',
      summaryEn: 'Instant encrypted digital degrees, with 13 certified market-driven micro-credentials.'
    }
  ],

  faculty: [
    {
      step: 1,
      titleAr: 'المباشرة والملف الأكاديمي الموحد',
      titleEn: 'Smart Onboarding & Profile',
      icon: '👤',
      summaryAr: 'أتمتة شاملة للموارد البشرية وإدارة النصاب التدريسي بالجدولة الآلية الذكية.',
      summaryEn: 'Automated HR workflows and intelligent course scheduling algorithms.'
    },
    {
      step: 2,
      titleAr: 'التدريس الذكي ومطور المحتوى',
      titleEn: 'AI Content Developer & Teaching',
      icon: '📊',
      summaryAr: 'توليد وإثراء المقررات وبنوك الأسئلة بالذكاء الاصطناعي التوليدي.',
      summaryEn: 'Generative AI course enrichment and standardized automated assessments.'
    },
    {
      step: 3,
      titleAr: 'منظومة البحث والتمويل المؤسسي',
      titleEn: 'Research Grants & Global Journals',
      icon: '🔬',
      summaryAr: 'إدارة المنح البحثية إلكترونياً، والنشر في المجلات العالمية المصنفة.',
      summaryEn: 'Digital grant management and publications in globally indexed journals.'
    },
    {
      step: 4,
      titleAr: 'العطاء المعرفي في المنصة الوطنية OERX',
      titleEn: 'Open Knowledge & Leadership (OERX)',
      icon: '🌟',
      summaryAr: 'صدارة جامعة أم القرى للمملكة بتقديم 2,091 مورداً تعليمياً مفتوحاً.',
      summaryEn: 'UQU leading Saudi Arabia with 2,091 open resources on the OERX platform.'
    }
  ],

  patient: [
    {
      step: 1,
      titleAr: 'حجز الموعد والاستشارة الرقمية',
      titleEn: 'Digital Appointment Booking',
      icon: '📱',
      summaryAr: 'حجز فوري واستشارة مرئية مباشرة عبر تطبيقي "صحتي" و"موعد".',
      summaryEn: 'Instant scheduling and virtual consultations via Sehhaty & Mawid apps.'
    },
    {
      step: 2,
      titleAr: 'مستشفى صحة الافتراضي (الأكبر عالمياً)',
      titleEn: 'Seha Virtual Hospital (Global Leader)',
      icon: '🏥',
      summaryAr: 'ربط 150+ مستشفى حول المملكة لتقديم أدق الاستشارات بالذكاء الاصطناعي.',
      summaryEn: 'Connecting 150+ hospitals offering AI-assisted multi-specialty care.'
    },
    {
      step: 3,
      titleAr: 'الوصفة الإلكترونية الفورية (وصفتي)',
      titleEn: 'Instant E-Prescription (Wasfaty)',
      icon: '💊',
      summaryAr: 'استلام الدواء مجاناً وفورياً من أكثر من 5,000 صيدلية تجارية في المملكة.',
      summaryEn: 'Free medicine dispensation from 5,000+ community pharmacies nationwide.'
    },
    {
      step: 4,
      titleAr: 'الملف الصحي الوطني الموحد (نفيس NPHIES)',
      titleEn: 'Unified Health Record (Nphies)',
      icon: '📂',
      summaryAr: 'سجل طبي موحد يربط كافة منشآت القطاعين الحكومي والخاص لمشاركة التاريخ العلاجي.',
      summaryEn: 'Unified electronic records interconnecting public and private hospitals.'
    },
    {
      step: 5,
      titleAr: 'الرعاية الاستباقية والطب الوقائي',
      titleEn: 'Preventive Care & Wellness',
      icon: '❤️',
      summaryAr: 'متابعة المؤشرات الحيوية والفحص المبكر للأمراض المزمنة لتعزيز جودة الحياة.',
      summaryEn: 'Continuous vitals monitoring and early screening enhancing quality of life.'
    }
  ]
};

window.JOURNEYS_DATA = JOURNEYS_DATA;
