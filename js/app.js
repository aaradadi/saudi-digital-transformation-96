/* =====================================================================
   المحرك التنفيذي العام للإصدار الثاني (v2)
   Master Controller for Saudi Digital Transformation Experience v2
   ===================================================================== */

class AppControllerV2 {
  constructor() {
    this.currentSection = 0;
    this.totalSections = 7;
    this.sections = [];
    this.dots = [];
    this.inactivitySeconds = 0;
    this.inactivityLimit = 90; // 90 ثانية لإعادة الضبط التلقائي
    this.inactivityInterval = null;

    this.init();
  }

  init() {
    this.sections = Array.from(document.querySelectorAll('.kiosk-section'));
    this.dots = Array.from(document.querySelectorAll('.dock-dot'));

    this.setupViewportScale();
    window.addEventListener('resize', () => this.setupViewportScale());
    window.addEventListener('orientationchange', () => setTimeout(() => this.setupViewportScale(), 150));
    window.addEventListener('load', () => this.setupViewportScale());
    setTimeout(() => this.setupViewportScale(), 100);
    setTimeout(() => this.setupViewportScale(), 400);

    this.setupNavigation();
    this.setupInactivityTimer();
    this.setupActions();
    this.setupModal();
    this.setupUquTabs();
    this.setupSourceButtons();
    this.setupConfetti();

    // تشغيل العجلة التفاعلية
    const wheelSvg = document.getElementById('governance-wheel-svg');
    const wheelPanel = document.getElementById('governance-details-panel');
    if (wheelSvg && wheelPanel && window.GovernanceWheel) {
      this.wheel = new GovernanceWheel(wheelSvg, wheelPanel);
    }

    // تشغيل خريطة المملكة التفاعلية
    if (window.SaudiMapExplorer) {
      this.map = new SaudiMapExplorer('saudi-map-container', 'map-region-info-box');
    }

    // تشغيل محرك الاختبار والشهادات
    if (window.QuizAndCertificateManager) {
      this.quizAndCert = new QuizAndCertificateManager();
    }

    // تشغيل لوحة المفاتيح اللمسية الافتراضية
    if (window.VirtualTouchKeyboard) {
      this.keyboard = new VirtualTouchKeyboard();
    }

    // إعداد اللغة الافتراضية
    if (window.I18n) {
      window.I18n.setLanguage('ar');
    }

    this.goToSection(0, false);
  }

  setupViewportScale() {
    const viewport = document.getElementById('totem-viewport');
    if (!viewport) return;

    const winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 1080;
    const winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 1920;
    const targetW = 1080;
    const targetH = 1920;

    const scale = Math.min(winW / targetW, winH / targetH);
    viewport.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  setupNavigation() {
    const prevBtn = document.getElementById('dock-prev-btn');
    const nextBtn = document.getElementById('dock-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.SoundEffects) SoundEffects.play('click');
        this.goToSection(this.currentSection - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.SoundEffects) SoundEffects.play('click');
        if (this.currentSection === this.totalSections - 1) {
          this.goToSection(0);
        } else {
          this.goToSection(this.currentSection + 1);
        }
      });
    }

    this.dots.forEach((dot, idx) => {
      dot.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.SoundEffects) SoundEffects.play('click');
        this.goToSection(idx);
      });
    });

    const startBtn = document.getElementById('hero-start-btn');
    if (startBtn) {
      startBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.SoundEffects) SoundEffects.play('slide');
        this.goToSection(1);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        this.goToSection(this.currentSection + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        this.goToSection(this.currentSection - 1);
      }
    });
  }

  goToSection(index, playSound = true) {
    if (index < 0) index = 0;
    if (index >= this.totalSections) index = this.totalSections - 1;

    if (playSound && window.SoundEffects) {
      SoundEffects.play('slide');
    }

    this.sections.forEach((sec, idx) => {
      if (idx === index) {
        sec.classList.add('active');
        sec.scrollTop = 0;
      } else {
        sec.classList.remove('active');
      }
    });

    this.dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    this.currentSection = index;

    const prevBtn = document.getElementById('dock-prev-btn');
    const nextBtn = document.getElementById('dock-next-btn');
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;

    if (prevBtn) {
      prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    }
    if (nextBtn) {
      if (index === this.totalSections - 1) {
        nextBtn.innerHTML = isEn ? '🔄 Restart' : '🔄 البداية';
      } else {
        nextBtn.innerHTML = isEn ? 'Next ➔' : 'التالي ➔';
      }
    }

    if (index === 6 && window.fireConfetti) {
      window.fireConfetti(2);
      if (window.SoundEffects) SoundEffects.play('celebrate');
    }
  }

  setupActions() {
    const soundBtn = document.getElementById('action-sound-btn');
    if (soundBtn) {
      soundBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        const enabled = window.SoundEffects ? window.SoundEffects.toggle() : false;
        soundBtn.innerHTML = enabled ? '🔊' : '🔇';
      });
    }

    const fsBtn = document.getElementById('action-fullscreen-btn');
    if (fsBtn) {
      fsBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
          fsBtn.innerHTML = '🗗';
        } else {
          document.exitFullscreen().catch(() => {});
          fsBtn.innerHTML = '⛶';
        }
      });
    }

    const homeBtn = document.getElementById('action-home-btn');
    if (homeBtn) {
      homeBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.SoundEffects) SoundEffects.play('click');
        this.goToSection(0);
      });
    }

    const langBtn = document.getElementById('action-lang-btn');
    if (langBtn) {
      langBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.I18n) {
          window.I18n.toggle();
        }
      });
    }
  }

  setupSourceButtons() {
    document.querySelectorAll('.open-source-modal-btn').forEach(btn => {
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        const key = btn.getAttribute('data-source-key');
        this.openSourceModal(key);
      });
    });
  }

  openSourceModal(key) {
    if (!window.OFFICIAL_SOURCES) return;
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const data = window.OFFICIAL_SOURCES[key] || window.OFFICIAL_SOURCES.uquReports;

    const title = isEn ? data.titleEn : data.titleAr;
    const auth = isEn ? data.authorityEn : data.authorityAr;

    let sourcesHtml = '';
    data.sources.forEach(s => {
      const name = isEn ? s.nameEn : s.nameAr;
      const verified = s.verifiedMetrics ? (isEn ? `<strong>Verified Figures:</strong> ${s.verifiedMetrics}` : `<strong>الأرقام والمؤشرات المعتمدة:</strong> ${s.verifiedMetrics}`) : '';

      sourcesHtml += `
        <div style="background: rgba(255, 255, 255, 0.05); padding: 18px 22px; border-radius: var(--radius-md); border: 1px solid var(--snd-gold); margin-bottom: 14px;">
          <h4 style="color: var(--snd-gold); font-size: 19px; margin-bottom: 6px;">📄 ${name}</h4>
          ${verified ? `<p style="font-size: 15px; color: var(--text-cream); margin-bottom: 10px; line-height: 1.5;">${verified}</p>` : ''}
          <a href="${s.link}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; color: #5aba1c; text-decoration: none; font-weight: 700; font-size: 15px;">
            🔗 ${isEn ? 'Access Official Document / Portal' : 'الانتقال للمصدر والوثيقة الرسمية ➔'}
          </a>
        </div>
      `;
    });

    const body = `
      <div style="padding: 10px 0;">
        <p style="font-size: 16px; color: var(--text-muted); margin-bottom: 18px;">
          ${isEn ? 'Supervised Authority:' : 'الجهة الرسمية المشرفة:'} <strong style="color: var(--snd-gold);">${auth}</strong>
        </p>
        ${sourcesHtml}
      </div>
    `;

    this.openModal(title, body);
  }

  setupInactivityTimer() {
    const fill = document.getElementById('inactivity-fill');

    ['pointerdown', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
      window.addEventListener(evt, () => this.resetInactivity(), { passive: true });
    });

    this.inactivityInterval = setInterval(() => {
      this.inactivitySeconds++;
      if (fill) {
        const pct = (this.inactivitySeconds / this.inactivityLimit) * 100;
        fill.style.width = `${pct}%`;
      }
      if (this.inactivitySeconds >= this.inactivityLimit) {
        this.resetInactivity();
        if (this.currentSection !== 0) {
          this.goToSection(0, false);
        }
      }
    }, 1000);
  }

  resetInactivity() {
    this.inactivitySeconds = 0;
    const fill = document.getElementById('inactivity-fill');
    if (fill) fill.style.width = '0%';
  }

  setupModal() {
    const modal = document.getElementById('kiosk-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn && modal) {
      closeBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }

    if (modal) {
      modal.addEventListener('pointerdown', (e) => {
        if (e.target === modal) this.closeModal();
      });
    }
  }

  openModal(title, contentHtml) {
    const modal = document.getElementById('kiosk-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    if (modal && modalTitle && modalBody) {
      modalTitle.textContent = title;
      modalBody.innerHTML = contentHtml;
      modal.classList.add('active');
      if (window.SoundEffects) SoundEffects.play('click');
    }
  }

  closeModal() {
    const modal = document.getElementById('kiosk-modal');
    if (modal) {
      modal.classList.remove('active');
      if (window.SoundEffects) SoundEffects.play('click');
    }
  }

  setupUquTabs() {
    const tabs = document.querySelectorAll('.uqu-tab-btn');
    const contents = document.querySelectorAll('.uqu-tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.resetInactivity();
        if (window.SoundEffects) SoundEffects.play('click');

        const target = tab.getAttribute('data-target');
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.style.display = 'none');

        tab.classList.add('active');
        const activeContent = document.getElementById(target);
        if (activeContent) activeContent.style.display = 'block';
      });
    });
  }

  setupConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = 1080;
    canvas.height = 1920;

    let particles = [];
    const colors = ['#5aba1c', '#c6a25a', '#006e3d', '#ffffff', '#6565e0', '#dfc27e'];

    window.fireConfetti = (bursts = 1) => {
      for (let b = 0; b < bursts; b++) {
        setTimeout(() => {
          for (let i = 0; i < 90; i++) {
            particles.push({
              x: 1080 / 2 + (Math.random() - 0.5) * 400,
              y: 1920 / 2 - 200,
              vx: (Math.random() - 0.5) * 22,
              vy: Math.random() * -20 - 5,
              size: Math.random() * 12 + 6,
              color: colors[Math.floor(Math.random() * colors.length)],
              rotation: Math.random() * 360,
              vRot: (Math.random() - 0.5) * 10,
              gravity: 0.45,
              opacity: 1
            });
          }
        }, b * 200);
      }
    };

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.opacity -= 0.007;

        if (p.opacity <= 0 || p.y > 1920) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
      requestAnimationFrame(render);
    }
    render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new AppControllerV2();
});
