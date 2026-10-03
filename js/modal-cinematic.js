/* =====================================================================
   محرك النوافذ التعريفية السينمائية التفاعلية (World-Class Exhibition Modals)
   محاكاة بصرية حركية (Canvas Animation) + شروحات وافية + مصادر رسمية
   ===================================================================== */

const SHOWCASE_ITEMS = {
  // ركائز التحول الرقمي
  services_pillar: {
    titleAr: 'منظومة الخدمات الحكومية الرقمية الشاملة',
    titleEn: 'Comprehensive Digital Government Services',
    icon: '⚡',
    themeColor: '#c6a25a',
    animType: 'radar',
    summaryAr: 'أتمتة شاملة تتجاوز 97% من الخدمات والمعاملات الحكومية، وربط متكامل لأكثر من 400 جهة عبر منصات وطنية موحدة مثل (أبشر)، (توكلنا)، و(نفاذ)، لإلغاء المعاملات الورقية وتقديم تجربة مستفيد ذكية فائقة السرعة.',
    summaryEn: 'Over 97% automated government transactions connecting 400+ public entities via unified portals (Absher, Tawakkalna, Nafath) delivering zero-paper, seamless citizen journeys 24/7.',
    kpisAr: [
      { num: '97%+', label: 'نسبة أتمتة الخدمات الحكومية' },
      { num: '400+', label: 'جهة حكومية مرتبطة لحظياً' },
      { num: '30M+', label: 'مستفيد مسجل في المنصات' }
    ],
    kpisEn: [
      { num: '97%+', label: 'Government Automation Rate' },
      { num: '400+', label: 'Integrated Public Entities' },
      { num: '30M+', label: 'Active Registered Users' }
    ],
    sourceTitleAr: 'هيئة الحكومة الرقمية (DGA) - تقرير نضج الخدمات 2025',
    sourceTitleEn: 'Digital Government Authority - Service Maturity Report',
    sourceLink: 'https://dga.gov.sa/'
  },

  ai_pillar: {
    titleAr: 'السيادة التقنية والذكاء الاصطناعي الوطني',
    titleEn: 'National Data & Artificial Intelligence Sovereignty',
    icon: '🧠',
    themeColor: '#5aba1c',
    animType: 'ai-network',
    summaryAr: 'بناء مراكز حوسبة سحابية سيادية عملاقة وبنك البيانات الوطني بإشراف الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)، وتطوير نماذج الذكاء الاصطناعي التوليدي العربية (مثل نموذج علّام)، لترسيخ ريادة المملكة التكنولوجية.',
    summaryEn: 'Deploying sovereign cloud computing centers and the National Data Bank led by SDAIA, pioneering Arabic generative AI models (ALLAM) to secure national data sovereignty and global AI leadership.',
    kpisAr: [
      { num: '#1', label: 'المرتبة الأولى عالمياً في الاستراتيجية الحكومية للذكاء الاصطناعي (Tortoise)' },
      { num: '200+', label: 'منظومة وأنظمة حكومية تستضيفها سحابة ديم' },
      { num: '100%', label: 'سيادة وأمان البيانات الوطنية الحساسة' }
    ],
    kpisEn: [
      { num: '#1', label: 'Ranked 1st globally in Government AI Strategy (Tortoise Index)' },
      { num: '200+', label: 'Government Systems Hosted on Deem Cloud' },
      { num: '100%', label: 'National Data Security & Sovereignty' }
    ],
    sourceTitleAr: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
    sourceTitleEn: 'Saudi Data & Artificial Intelligence Authority (SDAIA)',
    sourceLink: 'https://sdaia.gov.sa/'
  },

  governance_pillar: {
    titleAr: 'الحوكمة المؤسسية والامتثال الرقمي',
    titleEn: 'Digital Governance & Regulatory Compliance',
    icon: '⚖️',
    themeColor: '#6565e0',
    animType: 'governance-shield',
    summaryAr: 'إطار تنظيمي متين يحمي الحقوق الرقمية، ويضمن الامتثال لضوابط الأمن السيبراني (NCA) ونظام حماية البيانات الشخصية، ورفع مؤشرات الشفافية والمساءلة الإدارية وترشيد الإنفاق التقني الحكومي.',
    summaryEn: 'A robust regulatory framework protecting digital rights, ensuring NCA cybersecurity compliance, personal data privacy laws, and maximizing public sector IT spending efficiency.',
    kpisAr: [
      { num: '100%', label: 'امتثال الجهات لنظام حماية البيانات الشخصية' },
      { num: '35%', label: 'ترشيد في التكاليف التشغيلية للأنظمة الحكومية' },
      { num: '99.98%', label: 'جاهزية واستمرارية البنى التحتية الحرجة' }
    ],
    kpisEn: [
      { num: '100%', label: 'Personal Data Protection Law Compliance' },
      { num: '35%', label: 'IT Operational Cost Rationalization' },
      { num: '99.98%', label: 'Critical Infrastructure Availability' }
    ],
    sourceTitleAr: 'هيئة الحكومة الرقمية - ضوابط ومعايير الحوكمة (قياس)',
    sourceTitleEn: 'Digital Government Authority - Governance Controls',
    sourceLink: 'https://dga.gov.sa/'
  },

  // إحصائيات جامعة أم القرى
  uqu_visits: {
    titleAr: 'زيارات المنصات الرقمية لجامعة أم القرى (60M+)',
    titleEn: 'UQU Digital Platform Visits (60M+)',
    icon: '🌐',
    themeColor: '#c6a25a',
    animType: 'cloud-stream',
    summaryAr: 'سجلت البوابة الإلكترونية والمنصات التابعة لجامعة أم القرى أكثر من 60 مليون زيارة تفاعلية خلال عام 2025، مما يعكس الاعتماد الكامل من الطلاب وأعضاء التدريس والمستفيدين على بيئة الخدمات الرقمية للجامعة.',
    summaryEn: 'Umm Al-Qura University portals recorded over 60 million visits in 2025, demonstrating total community reliance on the unified smart digital campus.',
    kpisAr: [
      { num: '60,000,000+', label: 'زيارة سنوية موثقة' },
      { num: '120,000+', label: 'مستفيد نشط يومياً' },
      { num: '99.9%', label: 'استقرار وجاهزية الخوادم السحابية' }
    ],
    kpisEn: [
      { num: '60M+', label: 'Verified Annual Visits' },
      { num: '120K+', label: 'Active Daily Users' },
      { num: '99.9%', label: 'Cloud Server Uptime' }
    ],
    sourceTitleAr: 'تقرير أبرز إنجازات جامعة أم القرى 2025 (صفحة 20)',
    sourceTitleEn: 'UQU Key Achievements Report 2025 (Page 20)',
    sourceLink: 'https://drive.uqu.edu.sa/_/vpbdcp/57a1dc80-c753-4d78-976b-e22ad6bce502.pdf'
  },

  uqu_dga: {
    titleAr: 'مؤشر قياس التحول الرقمي DGA لجامعة أم القرى',
    titleEn: 'UQU DGA Digital Transformation Index (70.17%)',
    icon: '📈',
    themeColor: '#5aba1c',
    animType: 'radar',
    summaryAr: 'حققت جامعة أم القرى قفزة نوعية في مؤشر قياس التحول الرقمي الصادر عن هيئة الحكومة الرقمية لتبلغ 70.17% في عام 2025 بزيادة قدرها 1.57%، مؤكدة التزامها الصارم بمعايير النضج الرقمي وتطوير تجربة المستفيد.',
    summaryEn: 'UQU achieved a major milestone in the DGA Digital Transformation Index, rising to 70.17% in 2025 (+1.57% increase), proving institutional maturity and dedication to national digital standards.',
    kpisAr: [
      { num: '70.17%', label: 'نتيجة قياس 2025 الرسمية' },
      { num: '+1.57%', label: 'نسبة النمو والارتقاء السنوي' },
      { num: 'المستوى المتقدم', label: 'تصنيف النضج المؤسسي' }
    ],
    kpisEn: [
      { num: '70.17%', label: 'Official 2025 Measurement' },
      { num: '+1.57%', label: 'Annual Growth Rate' },
      { num: 'Advanced', label: 'Institutional Maturity Tier' }
    ],
    sourceTitleAr: 'التقرير السنوي لجامعة أم القرى لعام 2025 (صفحة 245)',
    sourceTitleEn: 'UQU Annual Report 2025 (Page 245)',
    sourceLink: 'https://drive.uqu.edu.sa/_/vpbdcp/d9a3d213-2ea4-4aaa-a1a9-1d6c02d92a68.pdf'
  },

  // مستشفى صحة الافتراضي
  seha_virtual: {
    titleAr: 'مستشفى صحة الافتراضي (الأول والأكبر عالمياً)',
    titleEn: 'Seha Virtual Hospital (World\'s Largest)',
    icon: '🏥',
    themeColor: '#5aba1c',
    animType: 'health-ecg',
    summaryAr: 'أكبر مستشفى افتراضي في العالم يربط أكثر من 150 مستشفى في كافة مناطق ومحافظات المملكة، مستخدماً تقنيات الذكاء الاصطناعي لتقديم أدق الاستشارات التخصصية في جراحة المخ والأعصاب، الأورام، ورعاية الحالات الحرجة دون حاجة المريض للسفر.',
    summaryEn: 'The world\'s largest specialized virtual hospital interconnecting 150+ medical centers across Saudi Arabia, leveraging AI algorithms to provide sub-specialized consultations in neurology, oncology, and critical care remotely.',
    kpisAr: [
      { num: '150+', label: 'مستشفى مرتبط بالمستشفى الافتراضي' },
      { num: '500,000+', label: 'استشارة طبية تخصصية منجزة' },
      { num: 'الأول عالمياً', label: 'تصنيف منظمة الصحة العالمية' }
    ],
    kpisEn: [
      { num: '150+', label: 'Interconnected Hospitals' },
      { num: '500K+', label: 'Virtual Tele-Consultations' },
      { num: '#1 Globally', label: 'WHO Global Benchmark' }
    ],
    sourceTitleAr: 'وزارة الصحة - بوابة مستشفى صحة الافتراضي الرسمية',
    sourceTitleEn: 'Ministry of Health - Seha Virtual Hospital Portal',
    sourceLink: 'https://seha.sa/'
  },

  // تطبيق صحتي
  sehhaty_app: {
    titleAr: 'تطبيق صحتي: المنظومة الصحية الشخصية الموحدة',
    titleEn: 'Sehhaty App: Unified Personal Healthcare Ecosystem',
    icon: '💚',
    themeColor: '#008a4a',
    animType: 'health-ecg',
    summaryAr: 'المنصة الوطنية الرائدة لخدمة أكثر من 30 مليون مواطن ومقيم، تتيح استعراض الملف الصحي الموحد، حجز المواعيد في المراكز الصحية والمستشفيات، الاستشارات الطبية الفورية، وتتبع المؤشرات الحيوية اليومية.',
    summaryEn: 'Saudi Arabia\'s flagship health platform serving 30M+ citizens and residents, enabling unified medical records, clinic appointments, instant video consultations, and wellness vitals tracking.',
    kpisAr: [
      { num: '30,000,000+', label: 'مستخدم مسجل وموثق' },
      { num: '80M+', label: 'موعد تم حجزه عبر التطبيق' },
      { num: '100M+', label: 'وصفة إلكترونية مرتبطة بالصيدليات' }
    ],
    kpisEn: [
      { num: '30M+', label: 'Verified Registered Citizens' },
      { num: '80M+', label: 'Booked Clinic Appointments' },
      { num: '100M+', label: 'E-Prescriptions Integrated' }
    ],
    sourceTitleAr: 'وزارة الصحة السعودية - الخدمات الصحية الإلكترونية',
    sourceTitleEn: 'Ministry of Health - Digital Health Services',
    sourceLink: 'https://www.moh.gov.sa/'
  },

  // مشروع نيوم وذا لاين
  neom_theline: {
    titleAr: 'نيوم | ذا لاين (THE LINE) والمدن الإدراكية',
    titleEn: 'NEOM | THE LINE & Cognitive Urbanism',
    icon: '🌐',
    themeColor: '#0050af',
    animType: 'ai-network',
    summaryAr: 'ثورة في الحياة الحضرية بنسبة صفر كربون وصفر سيارات، تعتمد بنسبة 100% على الطاقة المتجددة والذكاء الاصطناعي التنبؤي، حيث تقدم البيانات وتطبيقات إنترنت الأشياء خدمات استباقية تجعل 95% من الاحتياجات اليومية في متناول 5 دقائق سيراً على الأقدام.',
    summaryEn: 'A revolution in urban living with zero cars, zero streets, and zero carbon emissions. Powered 100% by renewable energy and cognitive AI, providing hyper-proximity where all daily amenities are within a 5-minute walk.',
    kpisAr: [
      { num: '100%', label: 'طاقة نظيفة ومتجددة بالكامل' },
      { num: '0', label: 'انبعاثات كربونية وسيارات' },
      { num: '5 دقائق', label: 'للوصول لكافة المرافق والخدمات' }
    ],
    kpisEn: [
      { num: '100%', label: 'Clean Renewable Energy' },
      { num: '0', label: 'Carbon Emissions & Cars' },
      { num: '5 Min', label: 'Walk to All Everyday Facilities' }
    ],
    sourceTitleAr: 'الموقع الرسمي لمشروع نيوم (NEOM)',
    sourceTitleEn: 'NEOM Official Portal - Future of Living',
    sourceLink: 'https://www.neom.com/'
  }
};

class ShowcaseModalController {
  constructor() {
    this.modal = document.getElementById('kiosk-modal');
    this.animFrame = null;
    this.canvas = null;
    this.initTriggers();
  }

  initTriggers() {
    document.addEventListener('pointerdown', (e) => {
      const target = e.target.closest('[data-showcase]');
      if (target) {
        e.preventDefault();
        const key = target.getAttribute('data-showcase');
        this.open(key);
      }
    });
  }

  open(key) {
    const item = SHOWCASE_ITEMS[key];
    if (!item) return;

    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const title = isEn ? item.titleEn : item.titleAr;
    const summary = isEn ? item.summaryEn : item.summaryAr;
    const kpis = isEn ? item.kpisEn : item.kpisAr;
    const sourceTitle = isEn ? item.sourceTitleEn : item.sourceTitleAr;

    const contentHtml = `
      <div class="showcase-modal-container">
        <!-- كانفاس المحاكاة البصرية الحركية (بديل الفيديو التفاعلي) -->
        <div class="showcase-simulation-screen" style="width: 100%; height: 260px; border-radius: var(--radius-md); overflow: hidden; position: relative; background: radial-gradient(circle at center, #003a27 0%, #03140e 100%); border: 2px solid ${item.themeColor}; box-shadow: 0 10px 40px rgba(0,0,0,0.7); margin-bottom: 24px;">
          <canvas id="showcase-anim-canvas" width="800" height="260" style="width: 100%; height: 100%; display: block;"></canvas>
          <div style="position: absolute; top: 16px; left: 16px; padding: 6px 14px; border-radius: var(--radius-full); background: rgba(3, 20, 14, 0.85); border: 1px solid ${item.themeColor}; font-size: 13px; font-weight: 800; color: ${item.themeColor}; backdrop-filter: blur(8px);">
            ⚡ ${isEn ? 'LIVE DIGITAL SIMULATION' : 'محاكاة بصرية رقمية حية'}
          </div>
          <div style="position: absolute; bottom: 14px; right: 16px; font-size: 36px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.8));">
            ${item.icon}
          </div>
        </div>

        <!-- الشرح الاستراتيجي المفصل -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-family: var(--font-display); font-size: 26px; color: ${item.themeColor}; margin-bottom: 10px; line-height: 1.3;">
            ${title}
          </h4>
          <p style="font-size: 20px; color: var(--text-cream); line-height: 1.65;">
            ${summary}
          </p>
        </div>

        <!-- بطاقات المؤشرات الرقمية الثلاثة -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
          ${kpis.map(k => `
            <div style="background: rgba(255, 255, 255, 0.05); padding: 18px 14px; border-radius: var(--radius-md); border: 1px solid ${item.themeColor}50; text-align: center;">
              <div style="font-family: var(--font-display); font-size: 32px; font-weight: 900; color: ${item.themeColor}; line-height: 1.1; margin-bottom: 6px;">
                ${k.num}
              </div>
              <div style="font-size: 14px; font-weight: 600; color: var(--text-cream); line-height: 1.4;">
                ${k.label}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- المصدر الرسمي المعتمد المباشر -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0, 58, 39, 0.6); padding: 16px 22px; border-radius: var(--radius-md); border: 1.5px solid var(--snd-gold);">
          <div>
            <span style="font-size: 13px; color: var(--text-muted); display: block;">${isEn ? 'Official Verified Source:' : 'المصدر الرسمي المعتمد:'}</span>
            <strong style="color: var(--snd-gold); font-size: 16px;">${sourceTitle}</strong>
          </div>
          <a href="${item.sourceLink}" target="_blank" rel="noopener noreferrer" class="dock-nav-btn primary" style="height: 48px; padding: 0 24px; font-size: 15px;">
            🔗 ${isEn ? 'Open Document' : 'فتح الوثيقة ➔'}
          </a>
        </div>
      </div>
    `;

    if (window.app && window.app.openModal) {
      window.app.openModal(title, contentHtml);
      this.startSimulation(item.animType, item.themeColor);
    }
  }

  startSimulation(type, color) {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);

    const canvas = document.getElementById('showcase-anim-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, 800, 260);

      if (type === 'health-ecg') {
        // رسم مخطط تخطيط القلب والنبضات الحيوية
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.beginPath();
        for (let x = 0; x < 800; x += 4) {
          const shift = (x + t * 4) % 800;
          let y = 130;
          if (shift > 360 && shift < 440) {
            const rel = shift - 400;
            y = 130 - Math.sin(rel * 0.1) * 70 * Math.exp(-Math.abs(rel) * 0.05);
          }
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      } else if (type === 'ai-network') {
        // شبكة عصبية وذكاء اصطناعي تفاعلي
        const nodes = [
          [200, 80], [200, 180],
          [400, 60], [400, 130], [400, 200],
          [600, 90], [600, 170]
        ];
        ctx.strokeStyle = 'rgba(198, 162, 90, 0.3)';
        ctx.lineWidth = 1.5;
        nodes.forEach(([x1, y1], i) => {
          nodes.forEach(([x2, y2], j) => {
            if (x2 > x1 && Math.abs(x2 - x1) <= 220) {
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
          });
        });

        nodes.forEach(([x, y], i) => {
          const r = 8 + Math.sin(t * 0.05 + i) * 3;
          ctx.fillStyle = color;
          ctx.shadowBlur = 20;
          ctx.shadowColor = color;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;
      } else {
        // رادار وطني دوّار وموجات بيانات سحابية
        const cx = 400, cy = 130;
        ctx.strokeStyle = 'rgba(198, 162, 90, 0.25)';
        ctx.lineWidth = 1.5;
        [40, 80, 120, 160].forEach(r => {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        });

        const angle = t * 0.04;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * 160, cy + Math.sin(angle) * 160);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      t++;
      this.animFrame = requestAnimationFrame(render);
    };

    render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.showcaseModal = new ShowcaseModalController();
});
