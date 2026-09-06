/**
 * WebServices Azerbaijan — Dinamik Məzmun və İnteraktiv Skriptlər
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     0. DİNAMİK MƏZMUNUN YÜKLƏNMƏSİ (ADMIN PANELİNDƏN)
     -------------------------------------------------------------------------- */
  applySavedSiteData();

  function applySavedSiteData() {
    const rawData = localStorage.getItem('webservices_site_data');
    if (!rawData) return;

    try {
      const data = JSON.parse(rawData);

      // Loqo və Brend
      if (data.brand) {
        if (data.brand.siteTitle) document.title = data.brand.siteTitle;
        document.querySelectorAll('.logo-symbol').forEach(el => {
          el.textContent = data.brand.symbol || 'W';
        });
        document.querySelectorAll('.logo-text').forEach(el => {
          el.innerHTML = `${data.brand.name || 'WebServices'}<span class="logo-accent">${data.brand.accent || '.az'}</span>`;
        });
      }

      // Hero Mətnləri
      if (data.hero) {
        const badgeSpan = document.querySelector('.hero-badge span:last-child');
        if (badgeSpan && data.hero.badge) badgeSpan.textContent = data.hero.badge;

        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && data.hero.titleStart) {
          heroTitle.innerHTML = `${data.hero.titleStart} <span class="gradient-text">${data.hero.titleGrad}</span> ${data.hero.titleEnd}`;
        }

        const heroSub = document.querySelector('.hero-subtitle');
        if (heroSub && data.hero.subtitle) heroSub.textContent = data.hero.subtitle;

        // Metrikalar
        if (data.hero.metrics && data.hero.metrics.length >= 4) {
          const metricBoxes = document.querySelectorAll('.hero-metrics .metric-box');
          metricBoxes.forEach((box, i) => {
            if (data.hero.metrics[i]) {
              const numEl = box.querySelector('.metric-num');
              const txtEl = box.querySelector('.metric-text');
              if (numEl) numEl.textContent = data.hero.metrics[i].num;
              if (txtEl) txtEl.textContent = data.hero.metrics[i].lbl;
            }
          });
        }
      }

      // Portfolio Layihələri
      if (data.portfolio && data.portfolio.length > 0) {
        const grid = document.querySelector('.projects-grid');
        if (grid) {
          grid.innerHTML = '';
          data.portfolio.forEach((p, idx) => {
            const article = document.createElement('article');
            article.className = 'project-item';
            article.setAttribute('data-category', p.category || 'corporate');

            const screenClass = `screen-${(idx % 4) + 1}`;
            const tagsHTML = (p.tags || []).map(t => `<span class="badge-pill">${t}</span>`).join('');
            const liveUrl = p.liveUrl || (p.url ? `https://${p.url}` : '');

            const screenHTML = p.imageUrl 
              ? `<div class="mockup-screen with-image" style="background-image: url('${p.imageUrl}');"></div>`
              : `<div class="mockup-screen ${screenClass}">
                  <div class="screen-content">
                    <span class="screen-tag">${p.category === 'ecommerce' ? 'Onlayn Mağaza' : p.category === 'seo' ? 'SEO Layihəsi' : 'Veb Platforma'}</span>
                    <h4>${p.title}</h4>
                    <p class="screen-stat">${p.stat || 'Sürət: 99/100'}</p>
                  </div>
                </div>`;

            const mediaWrapper = liveUrl 
              ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="media-link" title="Canlı sayta bax">${screenHTML}</a>` 
              : screenHTML;

            const liveBtnHTML = liveUrl 
              ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="link-view-project" style="color: var(--accent-secondary); margin-right: 1.25rem;">Canlı Sayta Keçid ↗</a>` 
              : '';

            article.innerHTML = `
              <div class="project-media">
                <div class="browser-mockup">
                  <div class="mockup-header">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="mockup-url">${p.url || 'layihe.az'}</span>
                  </div>
                  ${mediaWrapper}
                </div>
              </div>
              <div class="project-info">
                <div class="project-category">${(p.category || 'corporate').toUpperCase()}</div>
                <h3 class="project-heading">${p.title}</h3>
                <p class="project-description">${p.desc}</p>
                <div class="project-badges">
                  ${tagsHTML}
                </div>
                <div class="project-cta-row" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                  ${liveBtnHTML}
                  <a href="#contact" class="link-view-project" style="font-size: 0.8125rem; color: var(--text-muted);">Sifariş Et →</a>
                </div>
              </div>
            `;
            grid.appendChild(article);
          });
        }
      }

      // Xidmətlər
      if (data.services && data.services.length > 0) {
        const sCards = document.querySelectorAll('.services-grid .service-card');
        sCards.forEach((card, idx) => {
          if (data.services[idx]) {
            const titleEl = card.querySelector('.service-title');
            const descEl = card.querySelector('.service-text');
            if (titleEl) titleEl.textContent = data.services[idx].title;
            if (descEl) descEl.textContent = data.services[idx].desc;
          }
        });
      }

      // Əlaqə Məlumatları
      if (data.contact) {
        if (data.contact.phone) {
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.href = `tel:${data.contact.phone.replace(/\s+/g, '')}`;
            const valEl = el.querySelector('.c-val');
            if (valEl) valEl.textContent = data.contact.phone;
            else if (!el.querySelector('.c-val')) el.textContent = data.contact.phone;
          });
        }
        if (data.contact.whatsapp) {
          document.querySelectorAll('.c-item.whatsapp').forEach(el => {
            el.href = `https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`;
          });
        }
        if (data.contact.email) {
          document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
            el.href = `mailto:${data.contact.email}`;
            const valEl = el.querySelector('.c-val');
            if (valEl) valEl.textContent = data.contact.email;
            else if (!el.querySelector('.c-val')) el.textContent = data.contact.email;
          });
        }
        if (data.contact.address) {
          const addrEl = document.querySelector('.c-item.static .c-val');
          if (addrEl) addrEl.textContent = data.contact.address;
        }
      }
    } catch (err) {
      console.warn('Dinamik məlumatlar tətbiq edilərkən xəta:', err);
    }
  }

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

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      const projectItems = document.querySelectorAll('.project-item');

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

      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Göndərilir...</span>';

      setTimeout(() => {
        formStatus.textContent = `Təşəkkür edirik, ${name}! Müraciətiniz qəbul edildi. 1 saat ərzində sizinlə əlaqə saxlayacağıq.`;
        formStatus.className = 'form-status success';
        
        inquiryForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
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
