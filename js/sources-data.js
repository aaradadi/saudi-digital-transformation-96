/* =====================================================================
   قاعدة بيانات المصادر والروابط الرسمية المعتمدة
   Verified Official Sources, Documentations & Live References
   ===================================================================== */

const OFFICIAL_SOURCES = {
  uquReports: {
    titleAr: 'تقارير جامعة أم القرى الرسمية المعتمدة 2025',
    titleEn: 'Official Umm Al-Qura University Reports (2025)',
    authorityAr: 'وكالة الجامعة للتطوير وخدمة المجتمع - إدارة التحول الرقمي',
    authorityEn: 'UQU Vice Presidency for Development - Digital Transformation Dept',
    sources: [
      {
        nameAr: 'تقرير أبرز إنجازات جامعة أم القرى لعام 2025م (الصفحات 19 - 22)',
        nameEn: 'UQU Key Achievements Report 2025 (Pages 19 - 22)',
        link: 'https://drive.uqu.edu.sa/_/vpbdcp/57a1dc80-c753-4d78-976b-e22ad6bce502.pdf',
        verifiedMetrics: '60M زيارة للمنصات، 12M عملية منفذة، 95% أتمتة، 6M ساعة بلاك بورد، 850K طلب إلكتروني، 105 معامل محدثة، 13 برنامجاً قصيراً MicroX، والمركز الأول في OERX بـ 2,091 مورداً.'
      },
      {
        nameAr: 'التقرير السنوي لجامعة أم القرى لعام 2025م (الصفحة 245 - 247)',
        nameEn: 'UQU Annual Report 2025 (Pages 245 - 247)',
        link: 'https://drive.uqu.edu.sa/_/vpbdcp/d9a3d213-2ea4-4aaa-a1a9-1d6c02d92a68.pdf',
        verifiedMetrics: 'مؤشر قياس التحول الرقمي لآخر ثلاث سنوات (2023: 75.08%، 2024: 68.60%، 2025: 70.17%)، 42 مشروعاً مكتملاً و21 تحت التنفيذ، ومبادرات الذكاء الاصطناعي الـ 8.'
      },
      {
        nameAr: 'بوابة جامعة أم القرى الإلكترونية الرسمية',
        nameEn: 'Umm Al-Qura University Official Portal',
        link: 'https://uqu.edu.sa/'
      }
    ]
  },

  dga: {
    titleAr: 'هيئة الحكومة الرقمية (DGA)',
    titleEn: 'Digital Government Authority (DGA)',
    authorityAr: 'الجهة المنظمة والمشرفة على التحول الرقمي والقياس الوطني للجهات الحكومية',
    authorityEn: 'Regulatory & supervisory authority for digital government & national measurement',
    sources: [
      {
        nameAr: 'مؤشر قياس التحول الرقمي الحكومي (قياس)',
        nameEn: 'National Digital Transformation Measurement Index (Qiyas)',
        link: 'https://dga.gov.sa/ar/qiyas',
        verifiedMetrics: 'منهجية تقييم نضج التحول الرقمي المؤسسي في المملكة، معايير التوافق، البيانات المفتوحة، وتجربة المستفيد.'
      },
      {
        nameAr: 'الموقع الرسمي لهيئة الحكومة الرقمية',
        nameEn: 'Digital Government Authority Portal',
        link: 'https://dga.gov.sa/'
      }
    ]
  },

  moh: {
    titleAr: 'وزارة الصحة ومستشفى صحة الافتراضي',
    titleEn: 'Ministry of Health & Seha Virtual Hospital',
    authorityAr: 'برنامج التحول الصحي - رؤية السعودية 2030',
    authorityEn: 'Health Sector Transformation Program - Saudi Vision 2030',
    sources: [
      {
        nameAr: 'مستشفى صحة الافتراضي (الأول والأكبر عالمياً)',
        nameEn: 'Seha Virtual Hospital (World\'s Largest)',
        link: 'https://seha.sa/',
        verifiedMetrics: 'يربط أكثر من 150 مستشفى حكومي تخصصي، ويقدم أدق الاستشارات عبر الذكاء الاصطناعي في الأورام والقلب والرعاية الحرجة.'
      },
      {
        nameAr: 'تطبيق صحتي والمنظومة الصحية الموحدة',
        nameEn: 'Sehhaty App & Unified Health Network',
        link: 'https://www.moh.gov.sa/eServices/Pages/Sehhaty.aspx',
        verifiedMetrics: '+30 مليون مستفيد موثق، +80 مليون موعد مجدول، +100 مليون وصفة إلكترونية عبر منصة وصفتي.'
      },
      {
        nameAr: 'المنصة الوطنية للتبادل الصحي (نفيس NPHIES)',
        nameEn: 'National Platform for Health and Insurance Exchange Services',
        link: 'https://nphies.sa/'
      }
    ]
  },

  sdaiaAndVision: {
    titleAr: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) ورؤية 2030',
    titleEn: 'SDAIA & Saudi Vision 2030',
    authorityAr: 'المشرف الوطني على السيادة السحابية وحوكمة البيانات والذكاء الاصطناعي',
    authorityEn: 'National guardian of sovereign cloud, data governance & artificial intelligence',
    sources: [
      {
        nameAr: 'بوابة رؤية السعودية 2030 - برنامج التحول الرقمي الوطني',
        nameEn: 'Saudi Vision 2030 - National Digital Transformation Program',
        link: 'https://www.vision2030.gov.sa/',
        verifiedMetrics: 'المركز الثاني بين دول مجموعة العشرين في التنافسية الرقمية (European Center for Digital Competitiveness).'
      },
      {
        nameAr: 'بوابة الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
        nameEn: 'Saudi Data & Artificial Intelligence Authority (SDAIA)',
        link: 'https://sdaia.gov.sa/'
      },
      {
        nameAr: 'المنصة الوطنية للموارد التعليمية المفتوحة (OERX)',
        nameEn: 'National Open Educational Resources Platform (OERX)',
        link: 'https://oerx.sa/',
        verifiedMetrics: 'تصدر جامعة أم القرى لجميع جهات المملكة بـ 2,091 مورداً تعليمياً مفتوحاً.'
      }
    ]
  }
};

window.OFFICIAL_SOURCES = OFFICIAL_SOURCES;
