/* =====================================================================
   خريطة المملكة العربية السعودية التفاعلية الحقيقية (المعتمدة من المستخدم)
   Authentic Map Overlay & Vision 2030 Explorer
   ===================================================================== */

const REAL_SAUDI_REGIONS = [
  {
    id: 'riyadh',
    nameAr: 'منطقة الرياض | العاصمة الرقمية',
    nameEn: 'Riyadh Region | Digital Capital',
    x: 320,
    y: 240,
    pillar: 'ambitious',
    pillarNameAr: 'وطن طموح',
    pillarNameEn: 'Ambitious Nation',
    icon: '🏛️',
    color: '#c6a25a',
    showcaseKey: 'services_pillar',
    projectsAr: [
      'مقر الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
      'هيئة الحكومة الرقمية (DGA) ومؤشر قياس الوطني',
      'السحابة الحكومية الوطنية السيادية (ديم)'
    ],
    projectsEn: [
      'SDAIA Headquarters & National AI Center',
      'Digital Government Authority & Qiyas Index',
      'DEEM National Sovereign Cloud'
    ],
    kpiAr: 'أكثر من 97% أتمتة للمعاملات الحكومية',
    kpiEn: 'Over 97% government transaction automation'
  },
  {
    id: 'makkah',
    nameAr: 'منطقة مكة المكرمة | جامعة أم القرى والحج الذكي',
    nameEn: 'Makkah Region | UQU & Smart Hajj',
    x: 185,
    y: 275,
    pillar: 'vibrant',
    pillarNameAr: 'مجتمع حيوي',
    pillarNameEn: 'Vibrant Society',
    icon: '🕋',
    color: '#5aba1c',
    showcaseKey: 'uqu_visits',
    projectsAr: [
      'جامعة أم القرى: 60M زيارة لمنصاتها و95% أتمتة لخدماتها',
      'المنظومة الرقمية لخدمة ضيوف الرحمن وبطاقة نسك الذكية',
      'صدارة جامعة أم القرى للمملكة في المنصة الوطنية OERX'
    ],
    projectsEn: [
      'UQU Campus: 60M visits, 95% service automation',
      'Smart Pilgrim Services & Nusuk Card',
      'UQU Ranked #1 Nationally in OERX (2,091 resources)'
    ],
    kpiAr: 'خدمة أكثر من مليوني حاج ومعتمر بأنظمة رقمية موحدة',
    kpiEn: 'Serving 2M+ pilgrims via unified digital platforms'
  },
  {
    id: 'tabuk_neom',
    nameAr: 'منطقة تبوك | نيوم وذا لاين (THE LINE)',
    nameEn: 'Tabuk Region | NEOM & THE LINE',
    x: 115,
    y: 110,
    pillar: 'thriving',
    pillarNameAr: 'اقتصاد مزدهر',
    pillarNameEn: 'Thriving Economy',
    icon: '🌐',
    color: '#0050af',
    showcaseKey: 'neom_theline',
    projectsAr: [
      'مدينة "ذا لاين" (THE LINE) الإدراكية بالذكاء الاصطناعي',
      'أوكساجون: عاصمة الصناعات المتقدمة وإنترنت الأشياء',
      'بنية تحتية رقمية خالية من الانبعاثات بنسبة 100%'
    ],
    projectsEn: [
      'THE LINE: Cognitive AI Urbanism',
      'OXAGON: Advanced Industry & IoT Hub',
      '100% Zero-Emission Digital Infrastructure'
    ],
    kpiAr: 'أول نموذج للمدن الإدراكية ذاتية الإدارة عالمياً',
    kpiEn: 'World\'s first cognitive self-governing city model'
  },
  {
    id: 'eastern',
    nameAr: 'المنطقة الشرقية | الصناعة الذكية والموانئ',
    nameEn: 'Eastern Province | Smart Industry & Ports',
    x: 420,
    y: 250,
    pillar: 'thriving',
    pillarNameAr: 'اقتصاد مزدهر',
    pillarNameEn: 'Thriving Economy',
    icon: '⚡',
    color: '#dfc27e',
    showcaseKey: 'services_pillar',
    projectsAr: [
      'موانئ الجيل الخامس (5G) الذكية والرافعات المؤتمتة',
      'التحول الرقمي الصناعي للثورة الصناعية الرابعة',
      'منصات سلاسل الإمداد اللوجستية الموحدة'
    ],
    projectsEn: [
      'Smart 5G Ports & Automated Crane Systems',
      'Fourth Industrial Revolution (4IR) Integration',
      'Unified Digital Supply Chain Logistics'
    ],
    kpiAr: 'تقليص زمن مناولة الحاويات بنسبة 60% عبر الأنظمة الذكية',
    kpiEn: '60% container handling time reduction via smart tech'
  },
  {
    id: 'madinah',
    nameAr: 'المدينة المنورة | المدن الذكية وخدمات الزوار',
    nameEn: 'Madinah Region | Smart City & Visitor Platforms',
    x: 175,
    y: 195,
    pillar: 'vibrant',
    pillarNameAr: 'مجتمع حيوي',
    pillarNameEn: 'Vibrant Society',
    icon: '🕌',
    color: '#6565e0',
    showcaseKey: 'governance_pillar',
    projectsAr: [
      'منصة المدينة المنورة للمدن الذكية وجودة الحياة (رؤوم)',
      'الربط الرقمي الفوري للمنظومة الإسعافية ومراكز الرعاية',
      'حلول النقل الذكي والتوجيه التنبؤي للحشود'
    ],
    projectsEn: [
      'Madinah Smart City & Quality of Life Platform',
      'Real-Time Emergency Response & Digital Care',
      'Smart Transit & Predictive Crowd Management'
    ],
    kpiAr: 'تصنيف متقدم في المؤشر العالمي للمدن الذكية (IMD)',
    kpiEn: 'Leading global rank in IMD Smart City Index'
  },
  {
    id: 'asir',
    nameAr: 'منطقة عسير | السياحة الرقمية وحماية البيئة',
    nameEn: 'Asir Region | Digital Eco-Tourism',
    x: 220,
    y: 360,
    pillar: 'vibrant',
    pillarNameAr: 'مجتمع حيوي',
    pillarNameEn: 'Vibrant Society',
    icon: '🌲',
    color: '#607c4f',
    showcaseKey: 'seha_virtual',
    projectsAr: [
      'منصة "قمم وشيم" الرقمية لتجارب السياحة الطبيعية',
      'شبكات الاستشعار الذكية لحماية الغابات والبيئة',
      'الشمول الرقمي وتغطية النطاق العريض للقرى الجبلية'
    ],
    projectsEn: [
      'Qimam & Shim Digital Eco-Tourism Platform',
      'IoT Sensor Networks for Forest Protection',
      'Broadband Inclusion for High-Altitude Villages'
    ],
    kpiAr: 'تغطية شبكات الاتصال فائقة السرعة بنسبة 98% للمواقع السياحية',
    kpiEn: '98% high-speed network coverage across tourist summits'
  },
  {
    id: 'qassim',
    nameAr: 'منطقة القصيم | التقنيات الزراعية الذكية',
    nameEn: 'Al-Qassim Region | Smart Agri-Tech',
    x: 265,
    y: 180,
    pillar: 'thriving',
    pillarNameAr: 'اقتصاد مزدهر',
    pillarNameEn: 'Thriving Economy',
    icon: '🌴',
    color: '#5aba1c',
    showcaseKey: 'ai_pillar',
    projectsAr: [
      'إنترنت الأشياء لإدارة الري الذكي للنخيل والمزارع',
      'منصات التتبع الرقمي لسلامة الغذاء والتمور',
      'مستودعات التجارة الإلكترونية الزراعية الموحدة'
    ],
    projectsEn: [
      'IoT Smart Irrigation for Date Palm Agriculture',
      'Digital Traceability for Food Safety',
      'Unified E-Commerce Agricultural Warehouses'
    ],
    kpiAr: 'ترشيد استهلاك المياه بنسبة 45% بالاستشعار الذكي',
    kpiEn: '45% water conservation through smart IoT sensors'
  }
];

class SaudiMapExplorer {
  constructor(svgContainerId, infoBoxId) {
    this.container = document.getElementById(svgContainerId);
    this.infoBox = document.getElementById(infoBoxId);
    this.activePillar = 'all';
    this.selectedRegion = REAL_SAUDI_REGIONS[0];
    this.init();
  }

  init() {
    this.renderMap();
    this.setupFilters();
    this.selectRegion(this.selectedRegion);

    window.addEventListener('languageChanged', () => {
      this.renderMap();
      this.selectRegion(this.selectedRegion);
    });
  }

  renderMap() {
    if (!this.container) return;
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;

    // الخريطة الرسمية الدقيقة المرفوعة من المستخدم مع طبقة النقاط التفاعلية
    this.container.innerHTML = `
      <div class="real-map-stage" style="width: 100%; min-height: 560px; position: relative; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle, rgba(0, 58, 39, 0.4) 0%, rgba(3, 20, 14, 0.8) 100%); border-radius: var(--radius-lg); border: 2px solid var(--snd-gold); overflow: hidden; box-shadow: var(--glass-shadow); padding: 16px;">
        <div style="position: relative; width: 100%; max-width: 720px; aspect-ratio: 624 / 468; display: flex; align-items: center; justify-content: center;">
          <!-- صورة خريطة المملكة الحقيقية المفرغة والملونة بالهوية السعودية -->
          <img src="assets/map/saudi-map-transparent.png" alt="خريطة المملكة العربية السعودية" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: fill; filter: drop-shadow(0 0 25px rgba(0, 110, 61, 0.6)); pointer-events: none;" />

          <!-- طبقة SVG للنقاط التفاعلية فوق الخريطة بدقة تامة 624x468 -->
          <svg viewBox="0 0 624 468" style="position: absolute; inset: 0; width: 100%; height: 100%;" preserveAspectRatio="none">
            <defs>
              <filter id="nodeGlowReal" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

          <!-- خطوط الربط الرقمية بين المناطق -->
          <g stroke="rgba(198, 162, 90, 0.3)" stroke-width="1.5" stroke-dasharray="4 4">
            <line x1="320" y1="240" x2="185" y2="275" />
            <line x1="320" y1="240" x2="115" y2="110" />
            <line x1="320" y1="240" x2="420" y2="250" />
            <line x1="320" y1="240" x2="175" y2="195" />
            <line x1="320" y1="240" x2="220" y2="360" />
            <line x1="320" y1="240" x2="265" y2="180" />
            <line x1="185" y1="275" x2="175" y2="195" />
            <line x1="185" y1="275" x2="220" y2="360" />
          </g>

          <!-- النقاط التفاعلية الحية -->
          ${REAL_SAUDI_REGIONS.map(reg => {
            const isMatch = this.activePillar === 'all' || this.activePillar === reg.pillar;
            const isSelected = this.selectedRegion && this.selectedRegion.id === reg.id;
            const opacity = isMatch ? '1' : '0.2';
            const name = isEn ? reg.nameEn.split('|')[0].trim() : reg.nameAr.split('|')[0].trim();
            const haloRadius = isSelected ? 30 : 22;

            return `
              <g class="real-map-node" data-id="${reg.id}" style="cursor: pointer; opacity: ${opacity}; transition: transform 0.3s;">
                <circle cx="${reg.x}" cy="${reg.y}" r="${haloRadius}" fill="${reg.color}" fill-opacity="0.25" stroke="${reg.color}" stroke-width="1.5" class="pulsing-halo"></circle>
                <circle cx="${reg.x}" cy="${reg.y}" r="15" fill="rgba(3, 20, 14, 0.95)" stroke="${reg.color}" stroke-width="3" filter="url(#nodeGlowReal)"></circle>
                <text x="${reg.x}" y="${reg.y + 6}" text-anchor="middle" font-size="14" fill="#ffffff">${reg.icon}</text>
                
                <!-- وسم اسم المنطقة -->
                <rect x="${reg.x - 55}" y="${reg.y + 20}" width="110" height="22" rx="11" fill="rgba(3, 20, 14, 0.9)" stroke="${reg.color}" stroke-width="1" />
                <text x="${reg.x}" y="${reg.y + 35}" text-anchor="middle" font-size="11" font-weight="800" fill="${reg.color}">${name}</text>
              </g>
            `;
          }).join('')}
        </svg>
        </div>
      </div>
    `;

    // ربط أحداث النقر
    this.container.querySelectorAll('.real-map-node').forEach(node => {
      node.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        const id = node.getAttribute('data-id');
        const reg = REAL_SAUDI_REGIONS.find(r => r.id === id);
        if (reg) {
          this.selectRegion(reg);
          if (window.SoundEffects) SoundEffects.play('click');
        }
      });
    });
  }

  setupFilters() {
    const filterBtns = document.querySelectorAll('.map-pillar-filter');
    filterBtns.forEach(btn => {
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activePillar = btn.getAttribute('data-pillar');
        this.renderMap();
        if (window.SoundEffects) SoundEffects.play('click');
      });
    });
  }

  selectRegion(reg) {
    this.selectedRegion = reg;
    if (!this.infoBox) return;

    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const name = isEn ? reg.nameEn : reg.nameAr;
    const pillarName = isEn ? reg.pillarNameEn : reg.pillarNameAr;
    const projects = isEn ? reg.projectsEn : reg.projectsAr;
    const kpi = isEn ? reg.kpiEn : reg.kpiAr;

    this.infoBox.style.borderColor = reg.color;
    this.infoBox.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1.5px solid rgba(198, 162, 90, 0.3); padding-bottom: 14px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="font-size: 40px;">${reg.icon}</span>
          <div>
            <h4 style="font-family: var(--font-display); font-size: 26px; color: ${reg.color}; font-weight: 800; line-height: 1.2;">${name}</h4>
            <span style="font-size: 16px; color: var(--text-muted);">${isEn ? 'Vision 2030 Pillar:' : 'محور الرؤية المعتمد:'} <strong style="color: var(--snd-gold);">${pillarName}</strong></span>
          </div>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <span class="badge-trait" style="background: ${reg.color}25; color: ${reg.color}; border: 1.5px solid ${reg.color}; font-size: 15px; padding: 8px 18px;">
            ⚡ ${kpi}
          </span>
          <button class="dock-nav-btn primary" data-showcase="${reg.showcaseKey}" style="height: 50px; padding: 0 20px; font-size: 15px;">
            ✨ ${isEn ? 'Live Simulation & Details ➔' : 'عرض المحاكاة والتفاصيل ➔'}
          </button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;">
        ${projects.map(p => `
          <div style="background: rgba(255, 255, 255, 0.06); padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid rgba(198, 162, 90, 0.25); font-size: 16px; color: var(--text-cream); display: flex; align-items: center; gap: 12px; line-height: 1.4;">
            <span style="color: ${reg.color}; font-size: 20px;">✦</span>
            <span>${p}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

window.SaudiMapExplorer = SaudiMapExplorer;
