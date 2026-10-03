/* =====================================================================
   لوحة المفاتيح اللمسية الافتراضية لشاشات التوتم 55 بوصة
   On-Screen Virtual Touch Keyboard for Outdoor TV-550L
   ===================================================================== */

class VirtualTouchKeyboard {
  constructor() {
    this.activeInput = null;
    this.currentLayout = 'ar'; // 'ar' or 'en'
    this.caps = false;
    this.container = null;
    this.init();
  }

  init() {
    this.createDom();
    this.bindInputs();
  }

  createDom() {
    this.container = document.createElement('div');
    this.container.id = 'virtual-touch-keyboard';
    this.container.className = 'virtual-keyboard-drawer';
    document.getElementById('totem-viewport').appendChild(this.container);
    this.renderKeys();
  }

  bindInputs() {
    document.querySelectorAll('.kiosk-touch-input').forEach(input => {
      input.addEventListener('focus', () => {
        this.open(input);
      });
      input.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        this.open(input);
      });
    });

    document.addEventListener('pointerdown', (e) => {
      if (this.container && !this.container.contains(e.target) && !e.target.classList.contains('kiosk-touch-input')) {
        this.close();
      }
    });
  }

  open(input) {
    this.activeInput = input;
    // إذا كان الحقل بريداً إلكترونياً، افتح تلقائياً على الأحرف الإنجليزية
    if (input.type === 'email' || input.id.includes('email')) {
      this.currentLayout = 'en';
    } else {
      this.currentLayout = 'ar';
    }
    this.renderKeys();
    this.container.classList.add('visible');
  }

  close() {
    if (this.container) {
      this.container.classList.remove('visible');
    }
    this.activeInput = null;
  }

  renderKeys() {
    if (!this.container) return;

    const rowsAr = [
      ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠', '⌫'],
      ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د'],
      ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
      ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'],
      ['EN', '@', '.', 'مسافة', '✓ تم']
    ];

    const rowsEn = [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '⌫'],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['⇧', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '@', '.'],
      ['عربي', '.com', '@gmail.com', 'Space', '✓ Done']
    ];

    const rows = this.currentLayout === 'ar' ? rowsAr : rowsEn;

    this.container.innerHTML = `
      <div class="vk-header">
        <span>⌨️ لوحة مفاتيح لمسية تفاعلية | Touch Keyboard</span>
        <button class="vk-close-btn">✕ إغلاق</button>
      </div>
      <div class="vk-keys-grid">
        ${rows.map(row => `
          <div class="vk-row">
            ${row.map(key => {
              let displayKey = key;
              if (this.currentLayout === 'en' && this.caps && key.length === 1) {
                displayKey = key.toUpperCase();
              }
              const isSpecial = ['⌫', '⇧', 'EN', 'عربي', 'مسافة', 'Space', '✓ تم', '✓ Done'].includes(key);
              const extraClass = isSpecial ? 'special-key' : '';
              return `<button class="vk-key ${extraClass}" data-key="${key}">${displayKey}</button>`;
            }).join('')}
          </div>
        `).join('')}
      </div>
    `;

    this.container.querySelector('.vk-close-btn').addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.close();
    });

    this.container.querySelectorAll('.vk-key').forEach(btn => {
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        const key = btn.getAttribute('data-key');
        this.handleKey(key);
        if (window.SoundEffects) SoundEffects.play('click');
      });
    });
  }

  handleKey(key) {
    if (!this.activeInput) return;

    if (key === '⌫') {
      this.activeInput.value = this.activeInput.value.slice(0, -1);
    } else if (key === 'مسافة' || key === 'Space') {
      this.activeInput.value += ' ';
    } else if (key === 'EN') {
      this.currentLayout = 'en';
      this.renderKeys();
    } else if (key === 'عربي') {
      this.currentLayout = 'ar';
      this.renderKeys();
    } else if (key === '⇧') {
      this.caps = !this.caps;
      this.renderKeys();
    } else if (key === '✓ تم' || key === '✓ Done') {
      this.close();
    } else {
      let char = key;
      if (this.currentLayout === 'en' && this.caps && char.length === 1) {
        char = char.toUpperCase();
      }
      this.activeInput.value += char;
    }

    // إطلاق حدث input لضمان تحديث النماذج
    this.activeInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

window.VirtualTouchKeyboard = VirtualTouchKeyboard;
