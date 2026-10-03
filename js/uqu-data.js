/* =====================================================================
   قاعدة بيانات منجزات جامعة أم القرى الرسمية المعتمدة 2025 (ثنائية اللغة)
   Official Certified UQU Digital Transformation Dataset (Bilingual)
   ===================================================================== */

const UQU_DATA = {
  // مؤشر قياس التحول الرقمي الصادر عن هيئة الحكومة الرقمية DGA لآخر ثلاث سنوات (صفحة 245)
  dgaIndex: [
    { year: 2023, score: 75.08, change: '+4.39%', status: 'up', noteAr: 'المستوى المتقدم في تأسيس المعايير', noteEn: 'Advanced tier in foundational compliance' },
    { year: 2024, score: 68.60, change: '-6.48%', status: 'down', noteAr: 'تطبيق معايير القياس الحادي عشر المحدثة', noteEn: 'Application of 11th updated standards' },
    { year: 2025, score: 70.17, change: '+1.57%', status: 'up', noteAr: 'نمو مستدام وتكامل شامل لمنظومة الخدمات', noteEn: 'Sustainable growth and unified services' }
  ],

  // أبرز الأرقام والإحصائيات لعام 2025 (صفحة 20 و 245)
  keyMetrics: [
    { id: 'visits', number: '60M+', labelAr: 'زيارات المنصات الرقمية', labelEn: 'Platform Visits', subAr: 'تفاعل نشط للمستفيدين', subEn: 'Active beneficiary traffic', sourceKey: 'uquReports' },
    { id: 'ops', number: '12M+', labelAr: 'العمليات الإلكترونية المنفذة', labelEn: 'Executed Transactions', subAr: 'سرعة وموثوقية عالية', subEn: 'High-speed reliability', sourceKey: 'uquReports' },
    { id: 'automation', number: '95%', labelAr: 'نسبة أتمتة الخدمات', labelEn: 'Service Automation', subAr: 'إلغاء المعاملات الورقية', subEn: '100% paperless campus', sourceKey: 'uquReports' },
    { id: 'blackboard', number: '6M', labelAr: 'ساعة استخدام بلاك بورد', labelEn: 'Blackboard Hours', subAr: 'ساعات تعلم إلكتروني', subEn: 'E-learning interaction', sourceKey: 'uquReports' },
    { id: 'requests', number: '850K', labelAr: 'الطلبات الإلكترونية', labelEn: 'Electronic Requests', subAr: 'إنجاز ذاتي فوري', subEn: 'Instant self-service', sourceKey: 'uquReports' },
    { id: 'labs', number: '105', labelAr: 'المعامل المحدثة', labelEn: 'Modernized Tech Labs', subAr: 'أحدث التجهيزات التقنية', subEn: 'State-of-the-art tech', sourceKey: 'uquReports' },
    { id: 'platforms', number: '+100', labelAr: 'خدمة إلكترونية و16 منصة', labelEn: 'E-Services & 16 Platforms', subAr: 'منظومة أكاديمية موحدة', subEn: 'Unified academic network', sourceKey: 'uquReports' },
    { id: 'traffic', number: '5,500', labelAr: 'تيرابايت بيانات منقولة', labelEn: 'Transferred Data (TB)', subAr: 'بنية شبكية وسحابية متقدمة', subEn: 'Gigabit cloud networks', sourceKey: 'uquReports' }
  ],

  // المشاريع والعقود الرقمية (صفحة 20 و 245)
  projects: {
    completed: {
      total: 42,
      breakdown: [
        { nameAr: 'أعمال وتشغيل الأنظمة', nameEn: 'Operations & Maintenance', count: 125, icon: '🖥️' },
        { nameAr: 'بنية تحتية وأدوات تقنية', nameEn: 'Infrastructure & Tools', count: 9, icon: '🏗️' },
        { nameAr: 'منصات رقمية', nameEn: 'Digital Platforms', count: 8, icon: '🌐' },
        { nameAr: 'أمن سيبراني', nameEn: 'Cybersecurity', count: 6, icon: '🛡️' },
        { nameAr: 'خدمات سحابية', nameEn: 'Cloud Services', count: 2, icon: '☁️' }
      ]
    },
    inProgress: {
      total: 21,
      breakdown: [
        { nameAr: 'بنية تحتية وأدوات متقدمة', nameEn: 'Advanced Infrastructure', count: 4, icon: '🏗️' },
        { nameAr: 'منصات وأنظمة جديدة', nameEn: 'New Systems & Portals', count: 4, icon: '🌐' },
        { nameAr: 'حلول أمن سيبراني', nameEn: 'Cybersecurity Upgrades', count: 4, icon: '🛡️' },
        { nameAr: 'أعمال تشغيل وتطوير', nameEn: 'Operations Upgrades', count: 4, icon: '🖥️' },
        { nameAr: 'دعم وصيانة مستمرة', nameEn: 'Ongoing Support', count: 4, icon: '🔧' },
        { nameAr: 'توسعات سحابية سيادية', nameEn: 'Sovereign Cloud Expansion', count: 2, icon: '☁️' }
      ]
    }
  },

  // مبادرات الذكاء الاصطناعي الـ 8 المعتمدة (صفحة 21 و 246)
  aiInitiatives: [
    { titleAr: 'مطور المحتوى الذكي', titleEn: 'Smart Content Developer', descAr: 'إثراء المقررات والمواد بالذكاء الاصطناعي التوليدي.', descEn: 'Enriching course materials via generative AI.', icon: '🤖' },
    { titleAr: 'الجدولة الآلية الذكية', titleEn: 'Automated Scheduling', descAr: 'خوارزميات لتوزيع الشعب والقاعات ومنع التعارضات.', descEn: 'Algorithms optimizing schedules and venue allocation.', icon: '📅' },
    { titleAr: 'الدعم الفني الذكي', titleEn: 'Smart Technical Support', descAr: 'مساعد آلي يقدم الحلول الفورية للاستفسارات 24/7.', descEn: 'AI assistant resolving IT inquiries round-the-clock.', icon: '💬' },
    { titleAr: 'مساعد البيانات', titleEn: 'Data Assistant', descAr: 'استخلاص الرؤى الفورية من مستودعات البيانات الضخمة.', descEn: 'Extracting executive insights from big data warehouses.', icon: '📊' },
    { titleAr: 'التنبؤ الذكي بأداء الطلاب', titleEn: 'Predictive Student Analytics', descAr: 'رصد مبكر لحالات التعثر الأكاديمي وتقديم الدعم.', descEn: 'Early detection of academic challenges with proactive advice.', icon: '📈' },
    { titleAr: 'AI للمطورين', titleEn: 'AI for Developers', descAr: 'أدوات ذكية تدعم مهندسي البرمجيات في بناء الأنظمة.', descEn: 'Accelerating software engineering and code generation.', icon: '💻' },
    { titleAr: 'المساعد الشخصي للمنسوبين', titleEn: 'Personal Staff Assistant', descAr: 'إدارة المهام والمواعيد والطلبات الإدارية المؤتمتة.', descEn: 'Automating staff tasks, appointments and workflows.', icon: '👤' },
    { titleAr: 'المشرف الأكاديمي الذكي', titleEn: 'Smart Academic Advisor', descAr: 'إرشاد آلي وتوجيه لاختيار المسارات والخطط الدراسية.', descEn: 'Intelligent advising for curriculum and career roadmaps.', icon: '🎓' }
  ],

  // المنجزات الوطنية الكبرى لجامعة أم القرى (صفحة 247)
  nationalAchievements: [
    {
      titleAr: 'المركز الثاني بالمملكة في البرامج الجامعية القصيرة (MicroX)',
      titleEn: 'Ranked 2nd in the Kingdom in Short University Programs (MicroX)',
      descAr: 'تقديم 13 برنامجاً قصيراً لمواكبة متطلبات سوق العمل بالتعاون مع المركز الوطني للتعليم الإلكتروني.',
      descEn: 'Delivering 13 market-ready short programs in partnership with the National E-Learning Center.',
      badgeAr: 'المركز 2 بالمملكة',
      badgeEn: '#2 Nationally'
    },
    {
      titleAr: 'المرتبة الأولى في المنصة الوطنية للموارد المفتوحة OERX',
      titleEn: 'Ranked #1 Nationally in Open Educational Resources (OERX)',
      descAr: 'تقديم 2,091 مورداً تعليمياً مفتوحاً متفوقة على أكثر من 135 جهة مشاركة في المملكة.',
      descEn: 'Contributing 2,091 open educational resources, outperforming over 135 national institutions.',
      badgeAr: 'المرتبة الأولى (2,091 مورداً)',
      badgeEn: '#1 (2,091 Resources)'
    },
    {
      titleAr: 'الانتقال إلى المستوى المتقدم في المؤشر الوطني للتعليم الإلكتروني',
      titleEn: 'Transitioning to the Advanced Tier in National E-Learning Index',
      descAr: 'الارتقاء بفارق مرحلتين عن المستوى التأسيسي لعام 2023 لتحقق الجامعة التميز الشامل.',
      descEn: 'Advancing two complete tiers from the 2023 foundational baseline to achieve excellence.',
      badgeAr: 'المستوى المتقدم',
      badgeEn: 'Advanced Tier'
    }
  ]
};

window.UQU_DATA = UQU_DATA;
