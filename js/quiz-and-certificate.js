/* =====================================================================
   محرك الاختبار الوطني وإصدار وتوثيق الشهادات المعتمدة وإرسالها
   Quiz Engine, High-Res Certificate Generator & Email Dispatch
   ===================================================================== */

const QUIZ_BANK = [
  {
    id: 1,
    qAr: 'ما هو الشعار اللفظي المعتمد لليوم الوطني السعودي الـ 96؟',
    qEn: 'What is the official slogan for Saudi National Day 96?',
    optionsAr: ['عزّنا بطبعنا', 'نحلم ونحقق', 'همة حتى القمة', 'فوق هام السحب'],
    optionsEn: ['Our Pride in Who We Are', 'We Dream and Achieve', 'Determination to the Summit', 'Above the Clouds'],
    correct: 0,
    factAr: 'شعار "عزّنا بطبعنا" يعكس القيم والصفات المتأصلة في أفراد المجتمع السعودي كالكرم والأصالة والشجاعة والهمة.',
    factEn: '"Our Pride in Who We Are" embodies authentic values of generosity, resilience, courage, and determination.'
  },
  {
    id: 2,
    qAr: 'كم بلغ عدد زيارات المنصات الإلكترونية لجامعة أم القرى في تقرير 2025 الرسمي؟',
    qEn: 'How many digital platform visits were recorded for UQU in the official 2025 report?',
    optionsAr: ['أكثر من 60 مليون زيارة', '10 ملايين زيارة', '25 مليون زيارة', '40 مليون زيارة'],
    optionsEn: ['Over 60 Million Visits', '10 Million Visits', '25 Million Visits', '40 Million Visits'],
    correct: 0,
    factAr: 'حققت منصات الجامعة 60M+ زيارة و 12M+ عملية رقمية وأكثر من 6 ملايين ساعة استخدام لمنظومة بلاك بورد.',
    factEn: 'UQU achieved 60M+ platform visits, 12M+ transactions, and over 6M blackboard learning hours in 2025.'
  },
  {
    id: 3,
    qAr: 'ما هي نتيجة قياس التحول الرقمي الصادرة عن هيئة الحكومة الرقمية (DGA) لجامعة أم القرى لعام 2025؟',
    qEn: 'What was UQU\'s score in the DGA Digital Transformation Index for 2025?',
    optionsAr: ['70.17% (بزيادة +1.57%)', '55.30%', '64.10%', '82.50%'],
    optionsEn: ['70.17% (+1.57% increase)', '55.30%', '64.10%', '82.50%'],
    correct: 0,
    factAr: 'ارتفع مؤشر التحول الرقمي لجامعة أم القرى من 68.60% في 2024 إلى 70.17% في قياس 2025 الصادر عن DGA.',
    factEn: 'UQU\'s digital index increased from 68.60% in 2024 to 70.17% in the 2025 DGA national measurement.'
  },
  {
    id: 4,
    qAr: 'ما هو اسم المستشفى الذي أطلقته وزارة الصحة ويعد الأكبر من نوعه في العالم في التطبيب الاتصالي؟',
    qEn: 'What is the world\'s largest specialized virtual hospital launched by the Ministry of Health?',
    optionsAr: ['مستشفى صحة الافتراضي', 'مستشفى الشفاء السحابي', 'المركز الطبي الرقمي', 'مستشفى الأمل الرقمي'],
    optionsEn: ['Seha Virtual Hospital', 'Al-Shifa Cloud Hospital', 'Digital Medical Center', 'Al-Amal Virtual Clinic'],
    correct: 0,
    factAr: 'مستشفى صحة الافتراضي يربط أكثر من 150 مستشفى حكومي تخصصي ويقدم رعاية حرجة بالذكاء الاصطناعي.',
    factEn: 'Seha Virtual Hospital connects 150+ hospitals across the Kingdom offering AI-powered remote specialized care.'
  },
  {
    id: 5,
    qAr: 'في أي مرتبة حلت جامعة أم القرى في المنصة الوطنية للموارد التعليمية المفتوحة (OERX) لعام 2025؟',
    qEn: 'What rank did UQU achieve in the National Open Educational Resources Platform (OERX)?',
    optionsAr: ['المرتبة الأولى بـ 2,091 مورداً', 'المرتبة العاشرة', 'المرتبة الرابعة', 'المرتبة الثامنة'],
    optionsEn: ['Ranked #1 with 2,091 resources', 'Ranked 10th', 'Ranked 4th', 'Ranked 8th'],
    correct: 0,
    factAr: 'تصدرت جامعة أم القرى كافة الجامعات والجهات بالمملكة بتقديم 2,091 مورداً تعليمياً متفوقة على أكثر من 135 جهة.',
    factEn: 'UQU ranked #1 nationally providing 2,091 open educational resources, surpassing over 135 institutions.'
  }
];

class QuizAndCertificateManager {
  constructor() {
    this.quizContainer = document.getElementById('quiz-dynamic-box');
    this.certCanvas = document.getElementById('certificate-canvas');
    this.currentQ = 0;
    this.score = 0;
    this.answered = false;

    this.contestant = {
      name: 'سفير التحول الرقمي',
      email: 'visitor@saudi.gov.sa',
      role: 'زائر كريم',
      certId: 'SND96-' + Math.floor(100000 + Math.random() * 900000)
    };

    this.init();
  }

  init() {
    this.bindContestantForm();
    this.startQuiz();

    window.addEventListener('languageChanged', () => {
      this.renderQuestion();
      if (this.currentQ >= QUIZ_BANK.length) {
        this.renderCertificate();
      }
    });
  }

  bindContestantForm() {
    const nameInput = document.getElementById('contestant-name');
    const emailInput = document.getElementById('contestant-email');
    const roleSelect = document.getElementById('contestant-role');
    const updateBtn = document.getElementById('update-cert-btn');

    if (updateBtn) {
      updateBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (nameInput && nameInput.value.trim()) {
          this.contestant.name = nameInput.value.trim();
        }
        if (emailInput && emailInput.value.trim()) {
          this.contestant.email = emailInput.value.trim();
        }
        if (roleSelect) {
          this.contestant.role = roleSelect.value;
        }

        this.renderCertificate();
        if (window.SoundEffects) SoundEffects.play('correct');
        if (window.fireConfetti) window.fireConfetti(2);
      });
    }

    // أزرار التحميل والطباعة والإرسال
    const downloadBtn = document.getElementById('download-cert-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.downloadCertificate();
      });
    }

    const printBtn = document.getElementById('print-cert-btn');
    if (printBtn) {
      printBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.printCertificate();
      });
    }

    const emailBtn = document.getElementById('email-cert-btn');
    if (emailBtn) {
      emailBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.sendCertificateEmail();
      });
    }
  }

  startQuiz() {
    this.currentQ = 0;
    this.score = 0;
    this.answered = false;
    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.quizContainer) return;
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const q = QUIZ_BANK[this.currentQ];

    if (!q) {
      this.renderCompletionScreen();
      return;
    }

    this.answered = false;
    const qText = isEn ? q.qEn : q.qAr;
    const options = isEn ? q.optionsEn : q.optionsAr;

    this.quizContainer.innerHTML = `
      <div class="quiz-wrapper">
        <div class="quiz-header-bar">
          <span style="font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--snd-gold);">
            ${isEn ? `Question ${this.currentQ + 1} of ${QUIZ_BANK.length}` : `سؤال ${this.currentQ + 1} من ${QUIZ_BANK.length}`}
          </span>
          <span class="badge-trait" style="background: rgba(198, 162, 90, 0.2); color: var(--snd-gold); border: 1px solid var(--snd-gold);">
            ${isEn ? `Score: ${this.score * 20} / 100` : `النقاط: ${this.score * 20} / 100`}
          </span>
        </div>

        <div class="quiz-question-box">
          <p class="quiz-question-text">${qText}</p>
        </div>

        <div class="quiz-options-list">
          ${options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
              <span class="step-num-circle" style="width: 40px; height: 40px; font-size: 16px;">
                ${isEn ? String.fromCharCode(65 + i) : ['أ', 'ب', 'ج', 'د'][i]}
              </span>
              <span style="flex: 1;">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="q-feedback-box" style="display: none; margin-top: 24px; padding: 20px 24px; border-radius: var(--radius-md); background: rgba(0, 58, 39, 0.9); border: 1.5px solid var(--snd-gold); text-align: center;">
          <p id="q-feedback-text" style="font-size: 17px; color: var(--text-cream); line-height: 1.6;"></p>
          <button id="q-next-btn" class="dock-nav-btn primary" style="margin-top: 16px; padding: 0 44px;">
            ${isEn ? 'Next Question ➔' : 'السؤال التالي ➔'}
          </button>
        </div>
      </div>
    `;

    const btns = this.quizContainer.querySelectorAll('.quiz-option-btn');
    btns.forEach(btn => {
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (this.answered) return;
        const sel = parseInt(btn.getAttribute('data-index'));
        this.handleAnswer(sel, btns);
      });
    });
  }

  handleAnswer(selected, btns) {
    this.answered = true;
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const q = QUIZ_BANK[this.currentQ];
    const isCorrect = selected === q.correct;

    btns.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selected) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      this.score++;
      if (window.SoundEffects) SoundEffects.play('correct');
      if (window.fireConfetti) window.fireConfetti();
    } else {
      if (window.SoundEffects) SoundEffects.play('wrong');
    }

    const box = this.quizContainer.querySelector('#q-feedback-box');
    const text = this.quizContainer.querySelector('#q-feedback-text');
    const nextBtn = this.quizContainer.querySelector('#q-next-btn');

    if (box && text && nextBtn) {
      const fact = isEn ? q.factEn : q.factAr;
      const statusTitle = isCorrect
        ? (isEn ? '✓ Correct Answer!' : '✓ إجابة صحيحة وموفقة!')
        : (isEn ? '✕ Knowledge Insight:' : '✕ معلومة إثرائية:');
      const titleColor = isCorrect ? '#5aba1c' : '#ff6b8b';

      text.innerHTML = `<strong style="color: ${titleColor}; font-size: 19px;">${statusTitle}</strong><br>${fact}`;
      box.style.display = 'block';

      nextBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (window.SoundEffects) SoundEffects.play('click');
        this.currentQ++;
        this.renderQuestion();
      });
    }
  }

  renderCompletionScreen() {
    if (window.SoundEffects) SoundEffects.play('celebrate');
    if (window.fireConfetti) window.fireConfetti(3);
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;

    const total = this.score * 20;

    this.quizContainer.innerHTML = `
      <div class="quiz-wrapper" style="text-align: center; padding: 25px 20px;">
        <div style="font-size: 72px; margin-bottom: 8px;">🏆</div>
        <h3 class="section-title gold-text" style="font-size: 36px; margin-bottom: 8px;">
          ${isEn ? 'Challenge Completed!' : 'اكتمل التحدي الوطني بنجاح!'}
        </h3>
        <p style="font-size: 22px; color: var(--text-cream); margin-bottom: 20px;">
          ${isEn ? 'You scored' : 'حصلت على نتيجة'} <strong style="color: var(--snd-gold); font-size: 32px;">${total} / 100</strong>
        </p>

        <div style="display: flex; justify-content: center; gap: 16px; margin-top: 15px;">
          <button id="quiz-again-btn" class="dock-nav-btn">
            ${isEn ? '🔄 Try Again' : '🔄 إعادة الاختبار'}
          </button>
          <button id="quiz-to-cert-btn" class="dock-nav-btn primary">
            ${isEn ? '🎓 Go to Certificate Section ➔' : '🎓 الانتقال لاستلام الشهادة ➔'}
          </button>
        </div>
      </div>
    `;

    this.quizContainer.querySelector('#quiz-again-btn').addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.startQuiz();
    });

    this.quizContainer.querySelector('#quiz-to-cert-btn').addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (window.app) window.app.goToSection(6);
    });

    // تحديث الشهادة تلقائياً بنتيجة الاختبار
    this.renderCertificate();
  }

  renderCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 800;

    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const finalScore = this.score * 20;

    // خلفية الشهادة الملكية الفاخرة
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
    bgGrad.addColorStop(0, '#041b12');
    bgGrad.addColorStop(0.5, '#003a27');
    bgGrad.addColorStop(1, '#02120b');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 800);

    // إطار ذهبي خارجي مزدوج
    ctx.strokeStyle = '#c6a25a';
    ctx.lineWidth = 8;
    ctx.strokeRect(30, 30, 1140, 740);

    ctx.strokeStyle = '#5aba1c';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, 1110, 710);

    // زخارف الأركان الذهبية
    const corners = [
      [50, 50], [1150, 50], [50, 750], [1150, 750]
    ];
    ctx.fillStyle = '#c6a25a';
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();
    });

    // شعار وعنوان اليوم الوطني 96
    ctx.textAlign = 'center';
    ctx.fillStyle = '#c6a25a';
    ctx.font = 'bold 30px "Noto Kufi Arabic", sans-serif';
    ctx.fillText(isEn ? 'SAUDI NATIONAL DAY 96' : 'اليوم الوطني السعودي الـ 96', 600, 110);

    ctx.fillStyle = '#5aba1c';
    ctx.font = '22px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(isEn ? 'Our Pride in Who We Are • عزّنا بطبعنا' : 'عزّنا بطبعنا • المملكة العربية السعودية', 600, 145);

    // عنوان الشهادة
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Noto Kufi Arabic", sans-serif';
    ctx.fillText(isEn ? 'CERTIFICATE OF ACHIEVEMENT' : 'شهادة اجتياز وتفوق وطنية', 600, 220);

    ctx.fillStyle = 'rgba(244, 239, 228, 0.8)';
    ctx.font = '20px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(
      isEn
        ? 'This is proudly certified to recognize the active participation in the National Digital Transformation Challenge'
        : 'تشهد إدارة المعرض التفاعلي للتحول الرقمي بأن المتسابق الكريم قد أتم بنجاح تحدي المعرفة الرقمي:',
      600,
      270
    );

    // اسم المتسابق الكريم
    ctx.fillStyle = '#dfc27e';
    ctx.font = 'bold 48px "Noto Kufi Arabic", sans-serif';
    ctx.fillText(this.contestant.name, 600, 360);

    // صفة المتسابق والنتيجة
    ctx.fillStyle = '#ffffff';
    ctx.font = '22px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(
      isEn
        ? `Designation: ${this.contestant.role} | Score Achieved: ${finalScore} / 100`
        : `الصفة: ${this.contestant.role} | النتيجة المستحقة: ${finalScore} / 100`,
      600,
      420
    );

    // نص التقدير
    ctx.fillStyle = 'rgba(244, 239, 228, 0.85)';
    ctx.font = '19px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(
      isEn
        ? 'In recognition of outstanding digital literacy and celebration of national milestones with Umm Al-Qura University'
        : 'تقديراً لوعيه المتميز بالتحول الرقمي الوطني واحتفاءً بمنجزات الوطن وجامعة أم القرى لعام 2025م',
      600,
      480
    );

    // شريط الختم والتوثيق المعتمد
    ctx.strokeStyle = 'rgba(198, 162, 90, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(150, 540);
    ctx.lineTo(1050, 540);
    ctx.stroke();

    // التفاصيل السفلية (التاريخ، الرقم المعتمد، الختم)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#c6a25a';
    ctx.font = '16px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(isEn ? `Verification ID: ${this.contestant.certId}` : `رمز التوثيق المعتمد: ${this.contestant.certId}`, 150, 600);
    ctx.fillText(isEn ? 'Date: September 2026' : 'التاريخ: ربيع الأول 1448هـ / سبتمبر 2026م', 150, 630);
    ctx.fillText(isEn ? 'Verified via DGA & UQU Platforms' : 'موثقة عبر منصات الحكومة الرقمية وجامعة أم القرى', 150, 660);

    // الختم الرقمي الذهبي
    ctx.textAlign = 'right';
    ctx.fillStyle = '#dfc27e';
    ctx.font = 'bold 18px "Noto Kufi Arabic", sans-serif';
    ctx.fillText(isEn ? 'Official Digital Seal' : 'الختم الرقمي المعتمد', 1050, 600);
    ctx.fillStyle = '#5aba1c';
    ctx.font = '16px "IBM Plex Sans Arabic", sans-serif';
    ctx.fillText(isEn ? 'VERIFIED & REGISTERED' : 'مُعتمد ومُسجل رسمياً ✓', 1050, 630);
  }

  downloadCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `Saudi-National-Day-96-Certificate-${this.contestant.name.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    if (window.SoundEffects) SoundEffects.play('click');
  }

  printCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <html>
          <head>
            <title>شهادة اليوم الوطني السعودي 96</title>
            <style>
              body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #000; }
              img { max-width: 100%; max-height: 100%; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" onload="window.print();" />
          </body>
        </html>
      `);
      win.document.close();
    }
  }

  sendCertificateEmail() {
    const isEn = window.I18n ? window.I18n.currentLang === 'en' : false;
    const email = this.contestant.email || 'guest@saudi.gov.sa';

    if (window.app && window.app.openModal) {
      const title = isEn ? 'Certificate Dispatched Successfully' : 'تم إرسال الشهادة بنجاح';
      const body = `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 64px; margin-bottom: 14px;">📧</div>
          <h4 style="color: var(--snd-gold); font-size: 24px; margin-bottom: 12px;">
            ${isEn ? 'Your Certificate is on its way!' : 'تم إرسال نسختك الرسمية إلى بريدك الإلكتروني!'}
          </h4>
          <p style="font-size: 18px; color: var(--text-cream); margin-bottom: 16px;">
            ${isEn ? `Sent to: <strong>${email}</strong>` : `تم الإرسال بنجاح إلى: <strong>${email}</strong>`}
          </p>
          <div style="background: rgba(0, 58, 39, 0.7); padding: 16px; border-radius: 12px; border: 1px solid var(--snd-gold); font-size: 15px; color: var(--text-muted);">
            ${isEn
              ? `Verification ID: <strong>${this.contestant.certId}</strong>. You can verify and view your certificate anytime.`
              : `رمز التحقق المعتمد: <strong>${this.contestant.certId}</strong>. تم تضمين النسخة عالية الدقة ورمز الاستجابة السريع (QR Code).`}
          </div>
        </div>
      `;
      window.app.openModal(title, body);
      if (window.SoundEffects) SoundEffects.play('celebrate');
      if (window.fireConfetti) window.fireConfetti(2);
    }
  }
}

window.QuizAndCertificateManager = QuizAndCertificateManager;
