/* =====================================================================
   عجلة الحوكمة الرقمية التفاعلية السداسية (ثنائية اللغة)
   Interactive Governance Wheel (Bilingual AR / EN)
   ===================================================================== */

const GOVERNANCE_ITEMS = [
  {
    id: 'transparency',
    titleAr: 'الشفافية الرقمية',
    titleEn: 'Digital Transparency',
    color: '#c6a25a',
    icon: '👁️',
    summaryAr: 'إتاحة البيانات المفتوحة ونشر لوحات المؤشرات الحية لتعزيز موثوقية القرارات ووضوح الإجراءات للمستفيدين.',
    summaryEn: 'Publishing open datasets and live dashboards to foster decision reliability and clear public procedures.',
    metricAr: '100% إتاحة للبيانات المفتوحة',
    metricEn: '100% Open Data Availability',
    angle: 0
  },
  {
    id: 'compliance',
    titleAr: 'الامتثال والمعايير',
    titleEn: 'Regulatory Compliance',
    color: '#5aba1c',
    icon: '⚖️',
    summaryAr: 'الالتزام التام بضوابط هيئة الحكومة الرقمية (DGA) ومعايير الهيئة الوطنية للأمن السيبراني (NCA).',
    summaryEn: 'Full adherence to DGA digital regulations and National Cybersecurity Authority (NCA) controls.',
    metricAr: 'امتثال كامل للمعايير الوطنية',
    metricEn: 'Full National Standards Compliance',
    angle: 60
  },
  {
    id: 'risk',
    titleAr: 'إدارة المخاطر الرقمية',
    titleEn: 'Risk Management',
    color: '#0050af',
    icon: '🛡️',
    summaryAr: 'الرصد الاستباقي للثغرات وضمان استمرارية الأعمال والتعافي السريع وحماية البنى التحتية الحرجة.',
    summaryEn: 'Proactive vulnerability monitoring, business continuity assurance, and critical infrastructure resilience.',
    metricAr: '99.98% جاهزية واستمرارية',
    metricEn: '99.98% Operational Readiness',
    angle: 120
  },
  {
    id: 'privacy',
    titleAr: 'حماية البيانات والخصوصية',
    titleEn: 'Data Privacy & Protection',
    color: '#6565e0',
    icon: '🔐',
    summaryAr: 'تطبيق نظام حماية البيانات الشخصية الصادر عن (سدايا) وتشفير البيانات وتوطين استضافتها سحابياً.',
    summaryEn: 'Implementing SDAIA personal data protection laws, encryption, and sovereign national hosting.',
    metricAr: 'سيادة رقمية وأمن سيبراني متقدم',
    metricEn: 'Sovereign Security & Privacy',
    angle: 180
  },
  {
    id: 'accountability',
    titleAr: 'المساءلة والتدقيق',
    titleEn: 'Accountability & Audit',
    color: '#971a4d',
    icon: '📋',
    summaryAr: 'تتبع سلاسل العمليات الرقمية وتدقيق مسارات الصلاحيات وإصدار التقارير الرقابية الدورية التلقائية.',
    summaryEn: 'Tracking automated workflow logs, access audit trails, and generating regulatory compliance reports.',
    metricAr: 'توثيق وأرشفة رقمية بنسبة 100%',
    metricEn: '100% Digital Traceability',
    angle: 240
  },
  {
    id: 'efficiency',
    titleAr: 'الكفاءة والترشيد',
    titleEn: 'Operational Efficiency',
    color: '#607c4f',
    icon: '⚡',
    summaryAr: 'تحسين كفاءة الإنفاق الحكومي الرقمي، تقليص مدد الإنجاز، وإلغاء الازدواجية البرمجية بين الأنظمة.',
    summaryEn: 'Optimizing digital government spending, reducing processing time, and eliminating redundancy.',
    metricAr: 'خفض التكاليف التشغيلية بـ 35%',
    metricEn: '35% Cost Optimization',
    angle: 300
  }
];

class GovernanceWheel {
  constructor(svgElement, panelElement) {
    this.svg = svgElement;
    this.panel = panelElement;
    this.currentIndex = 0;
    this.init();

    window.addEventListener('languageChanged', () => {
      this.selectSector(this.currentIndex);
    });
  }

  init() {
    this.renderWheel();
    this.selectSector(0);
  }

  renderWheel() {
    if (!this.svg) return;
    const cx = 260, cy = 260, rOuter = 240, rInner = 100;
    let pathsHtml = '';

    GOVERNANCE_ITEMS.forEach((item, index) => {
      const startAngle = (index * 60 - 90) * (Math.PI / 180);
      const endAngle = ((index + 1) * 60 - 90) * (Math.PI / 180);

      const x1 = cx + rOuter * Math.cos(startAngle);
      const y1 = cy + rOuter * Math.sin(startAngle);
      const x2 = cx + rOuter * Math.cos(endAngle);
      const y2 = cy + rOuter * Math.sin(endAngle);

      const x3 = cx + rInner * Math.cos(endAngle);
      const y3 = cy + rInner * Math.sin(endAngle);
      const x4 = cx + rInner * Math.cos(startAngle);
      const y4 = cy + rInner * Math.sin(startAngle);

      const pathData = `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;

      const midAngle = ((index + 0.5) * 60 - 90) * (Math.PI / 180);
      const iconR = (rOuter + rInner) / 2;
      const iconX = cx + iconR * Math.cos(midAngle);
      const iconY = cy + iconR * Math.sin(midAngle);

      pathsHtml += `
        <g class="wheel-sector" data-index="${index}" style="cursor: pointer; transition: transform 0.3s;">
          <path d="${pathData}" fill="${item.color}" fill-opacity="0.22" stroke="${item.color}" stroke-width="2.5" class="sector-path"></path>
          <circle cx="${iconX}" cy="${iconY}" r="24" fill="rgba(0, 30, 20, 0.9)" stroke="${item.color}" stroke-width="1.5"></circle>
          <text x="${iconX}" y="${iconY + 6}" text-anchor="middle" font-size="20" fill="#ffffff">${item.icon}</text>
        </g>
      `;
    });

    this.svg.innerHTML = `
      <defs>
        <filter id="wheel-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g id="wheel-rotator" style="transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); transform-origin: 260px 260px;">
        ${pathsHtml}
      </g>
    `;

    const sectors = this.svg.querySelectorAll('.wheel-sector');
    sectors.forEach(sec => {
      sec.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        const idx = parseInt(sec.getAttribute('data-index'));
        this.selectSector(idx);
        if (window.SoundEffects) SoundEffects.play('click');
      });
    });
  }

  selectSector(index) {
    this.currentIndex = index;
    const item = GOVERNANCE_ITEMS[index];
    if (!item) return;

    const targetAngle = -(index * 60);
    const rotator = this.svg.querySelector('#wheel-rotator');
    if (rotator) {
      rotator.style.transform = `rotate(${targetAngle}deg)`;
    }

    const paths = this.svg.querySelectorAll('.sector-path');
    paths.forEach((p, idx) => {
      if (idx === index) {
        p.setAttribute('fill-opacity', '0.65');
        p.setAttribute('stroke-width', '4');
        p.setAttribute('filter', 'url(#wheel-glow)');
      } else {
        p.setAttribute('fill-opacity', '0.22');
        p.setAttribute('stroke-width', '2.5');
        p.removeAttribute('filter');
      }
    });

    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const title = isEn ? item.titleEn : item.titleAr;
    const summary = isEn ? item.summaryEn : item.summaryAr;
    const metric = isEn ? item.metricEn : item.metricAr;

    if (this.panel) {
      this.panel.style.borderColor = item.color;
      this.panel.innerHTML = `
        <div class="wheel-panel-icon" style="background: ${item.color}25; border: 2px solid ${item.color}; color: ${item.color};">
          ${item.icon}
        </div>
        <div class="wheel-panel-content">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <h4 style="color: ${item.color}; font-size: 22px;">${title}</h4>
            <span class="badge-trait" style="background: ${item.color}25; color: ${item.color}; border: 1px solid ${item.color}; font-size: 13px;">
              ${metric}
            </span>
          </div>
          <p style="font-size: 16px; color: var(--text-cream); line-height: 1.6;">${summary}</p>
        </div>
      `;
    }
  }
}

window.GovernanceWheel = GovernanceWheel;
