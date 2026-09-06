/**
 * WebServices Azerbaijan — Interaktiv Skriptlər
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     1. MOBİL MENYU TOGGLE
     -------------------------------------------------------------------------- */
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link, .btn-mobile-cta');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. PORTFOLİO FİLTRLƏNMƏSİ
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Aktiv düymə stilini dəyiş
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectItems.forEach((item) => {
        const itemCat = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCat === filterVal) {
          item.style.display = 'flex';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     3. ƏLAQƏ FORMASI VƏ MÜRACİƏTİN QƏBULU
     -------------------------------------------------------------------------- */
  const inquiryForm = document.getElementById('projectInquiryForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (inquiryForm && formStatus && submitBtn) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phoneNum').value.trim();
      const email = document.getElementById('emailAddr').value.trim();
      const service = document.getElementById('serviceType').value;
      const message = document.getElementById('projectDesc').value.trim();

      if (!name || !phone) {
        formStatus.textContent = 'Zəhmət olmasa, adınızı və əlaqə nömrənizi daxil edin.';
        formStatus.className = 'form-status error';
        return;
      }

      // Düymənin yüklənmə vəziyyəti
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Göndərilir...</span>';

      setTimeout(() => {
        formStatus.textContent = `Təşəkkür edirik, ${name}! Müraciətiniz qəbul edildi. 1 saat ərzində sizinlə əlaqə saxlayacağıq.`;
        formStatus.className = 'form-status success';
        
        inquiryForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // WhatsApp birbaşa keçid təklifi
        const waText = encodeURIComponent(`Salam WebServices Azerbaijan, mən ${name}. Sayt üçün müraciət göndərdim. Xidmət: ${service}.`);
        console.log(`Müraciət qeydə alındı: ${name}, ${phone}, ${email}`);
      }, 900);
    });
  }

  /* --------------------------------------------------------------------------
     4. RAHAT KEÇİD (SMOOTH SCROLL)
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
