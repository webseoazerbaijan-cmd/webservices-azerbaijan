/**
 * WebServices Azerbaijan — Admin Panel Logic
 */

// Default Sayt Məlumatları
const defaultSiteData = {
  brand: {
    symbol: "W",
    name: "WebServices",
    accent: ".az",
    siteTitle: "WebServices Azerbaijan — Müasir Veb Saytların Yaradılması və Peşəkar SEO"
  },
  hero: {
    badge: "Azərbaycanda №1 Sürət və SEO Standartları",
    titleStart: "Biznesiniz üçün",
    titleGrad: "sürətli, müasir",
    titleEnd: "və Google-da lider saytlar.",
    subtitle: "WebServices Azerbaijan — adi şablonlardan uzaq, fərdi dizayna malik, 1 saniyədən tez açılan və axtarış sistemlərində müştəri gətirən peşəkar veb platformalar hazırlayır.",
    metrics: [
      { num: "99+", lbl: "PageSpeed Performans" },
      { num: "100%", lbl: "Mobil və Planşet Uyğunluğu" },
      { num: "3X", lbl: "Daha Çox Üzvi Ziyarətçi" },
      { num: "24/7", lbl: "Texniki Dəstək və Təhlükəsizlik" }
    ]
  },
  portfolio: [
    {
      id: "p1",
      title: "Forma Architecture & Design",
      category: "corporate",
      url: "forma-architecture.az",
      stat: "Sürət: 99/100 • Google Top 1",
      desc: "Müasir memarlıq və interyer dizayn şirkəti üçün fərdi minimalist veb sayt. Ağır portfel şəkillərinin keyfiyyət itkisi olmadan dərhal açılması təmin edilib.",
      tags: ["Fərdi Veb Tərtibatı", "Ultra Sürət (0.3s)", "+160% Üzvi Sorğu"]
    },
    {
      id: "p2",
      title: "Baku Moda Online Store",
      category: "ecommerce",
      url: "baku-modashop.az",
      stat: "Kartla Ödəniş • 2.8x Satış Artımı",
      desc: "1000-dən artıq məhsul çeşidi olan geyim mağazasının tam e-ticarət sistemi. Bank kartları ilə onlayn ödəniş, avtomatik kuryer bildirişi və rahat sifariş səbəti.",
      tags: ["Onlayn Ödəniş İnteqrasiyası", "Sürətli Məhsul Filteri", "+85% Satış Artımı"]
    },
    {
      id: "p3",
      title: "Logix Beynəlxalq Karqo & Logistika",
      category: "seo",
      url: "logix-cargo.az",
      stat: "Axtarışda İlk Sırada • 100% Green CWV",
      desc: "Daşıma və yük izləmə sistemi olan karqo şirkəti üçün korporativ platforma. Həyata keçirilən texniki SEO nəticəsində əsas açar sözlər üzrə Google-da ilk 3 pilləyə yüksəlib.",
      tags: ["Google 1-ci Pillə", "Bağlama İzləmə Sistemi", "Həftəlik +2400 Ziyarətçi"]
    },
    {
      id: "p4",
      title: "Prime Dental & Health Mərkəzi",
      category: "corporate",
      url: "prime-clinic.az",
      stat: "Onlayn Qəbul • Lokal SEO",
      desc: "Klinika üçün pasiyentlərin həkimləri seçərək vaxt təyin edə bildiyi onlayn qeydiyyat sistemi. Bakı üzrə lokal SEO və xəritə optimizasiyası ilə təchiz olunub.",
      tags: ["Onlayn Həkim Qəbulu", "Google Maps Optimizasiyası", "Sadə İdarəetmə"]
    }
  ],
  services: [
    {
      title: "Fərdi Veb Saytların Hazırlanması",
      desc: "Korporativ şirkət saytları, brend vizitkaları, xidmət təqdimatları və yüksək konversiyalı landing səhifələri. Şablonsuz, təmiz kod və müasir dizayn."
    },
    {
      title: "Peşəkar və Texniki SEO",
      desc: "Saytınızın Google axtarış sistemində ilk sıralarda çıxması üçün dərindən hesablanmış texniki, struktur və açar söz optimizasiyası."
    },
    {
      title: "Onlayn Mağazalar (E-ticarət)",
      desc: "Məhsullarınızı internet üzərindən 24/7 satmağınız üçün təhlükəsiz, sürətli və onlayn ödəniş sistemləri (MilliÖN, E-Manat, Visa/Mastercard) inteqrasiyalı mağazalar."
    },
    {
      title: "Sürət və Core Web Vitals",
      desc: "Mövcud ləng və gec açılan saytlarınızı təhlil edib sürətini 95-100 bal səviyyəsinə qaldırırıq. Müştərilər gözləməsin, sifariş versin."
    },
    {
      title: "Texniki Dəstək və Təhlükəsizlik",
      desc: "Saytınızın fasiləsiz işləməsi, SSL sertifikatları, viruslardan mühafizə, ehtiyat nüsxələmə (backup) və mütəmadi yenilənmələr."
    },
    {
      title: "Sayt Auditi və Rəqəmsal Strategiya",
      desc: "Rəqiblərinizin axtarışdakı mövqelərini təhlil edirik, saytınızın çatışmazlıqlarını aşkar edir və real satış artımı üçün fəaliyyət planı qururuq."
    }
  ],
  contact: {
    phone: "+994 50 000 00 00",
    whatsapp: "994500000000",
    email: "info@webservices.az",
    address: "Bakı şəhəri, Azərbaycan"
  }
};

// Hal-hazırdakı məlumatlar
let currentData = JSON.parse(JSON.stringify(defaultSiteData));

function loadSavedData() {
  const saved = localStorage.getItem('webservices_site_data');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      currentData = { ...defaultSiteData, ...parsed };
    } catch (e) {
      console.warn('Yaddaşdan oxunarkən xəta:', e);
    }
  }
}

function saveDataToStorage() {
  localStorage.setItem('webservices_site_data', JSON.stringify(currentData));
  showToast('✓ Bütün dəyişikliklər yadda saxlanıldı və saytda tətbiq edildi!');
  updateJsonExport();
}

function showToast(msg) {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// UI elementlərini məlumatlarla doldur
function populateForm() {
  // Brand
  document.getElementById('cfgLogoSymbol').value = currentData.brand.symbol || "W";
  document.getElementById('cfgBrandName').value = currentData.brand.name || "WebServices";
  document.getElementById('cfgBrandAccent').value = currentData.brand.accent || ".az";
  document.getElementById('cfgSiteTitle').value = currentData.brand.siteTitle || "";
  updateLogoPreview();

  // Hero
  document.getElementById('cfgHeroBadge').value = currentData.hero.badge || "";
  document.getElementById('cfgHeroTitleStart').value = currentData.hero.titleStart || "";
  document.getElementById('cfgHeroTitleGrad').value = currentData.hero.titleGrad || "";
  document.getElementById('cfgHeroTitleEnd').value = currentData.hero.titleEnd || "";
  document.getElementById('cfgHeroSubtitle').value = currentData.hero.subtitle || "";

  // Metrics
  if (currentData.hero.metrics && currentData.hero.metrics.length >= 4) {
    document.getElementById('cfgMetricVal1').value = currentData.hero.metrics[0].num;
    document.getElementById('cfgMetricLbl1').value = currentData.hero.metrics[0].lbl;
    document.getElementById('cfgMetricVal2').value = currentData.hero.metrics[1].num;
    document.getElementById('cfgMetricLbl2').value = currentData.hero.metrics[1].lbl;
    document.getElementById('cfgMetricVal3').value = currentData.hero.metrics[2].num;
    document.getElementById('cfgMetricLbl3').value = currentData.hero.metrics[2].lbl;
    document.getElementById('cfgMetricVal4').value = currentData.hero.metrics[3].num;
    document.getElementById('cfgMetricLbl4').value = currentData.hero.metrics[3].lbl;
  }

  // Portfolio
  renderAdminProjects();

  // Services
  renderAdminServices();

  // Contact
  document.getElementById('cfgPhone').value = currentData.contact.phone || "";
  document.getElementById('cfgWhatsApp').value = currentData.contact.whatsapp || "";
  document.getElementById('cfgEmail').value = currentData.contact.email || "";
  document.getElementById('cfgAddress').value = currentData.contact.address || "";

  // Export
  updateJsonExport();
}

function updateLogoPreview() {
  const sym = document.getElementById('cfgLogoSymbol').value || "W";
  const name = document.getElementById('cfgBrandName').value || "WebServices";
  const acc = document.getElementById('cfgBrandAccent').value || ".az";

  document.getElementById('prevLogoSym').textContent = sym;
  document.getElementById('prevLogoText').innerHTML = `${name}<span class="logo-accent">${acc}</span>`;
}

// Portfolio Layihələrinin Siyahısı
function renderAdminProjects() {
  const container = document.getElementById('projectsListAdmin');
  if (!container) return;
  container.innerHTML = '';

  if (!currentData.portfolio || currentData.portfolio.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted);">Hələ heç bir layihə yoxdur. "+ Yeni Layihə Əlavə Et" düyməsinə basaraq əlavə edin.</p>';
    return;
  }

  currentData.portfolio.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'admin-project-card';
    card.innerHTML = `
      <div class="p-meta">
        <h4>${p.title}</h4>
        <p>${p.category.toUpperCase()} &bull; ${p.url || ''} &bull; ${p.stat || ''}</p>
      </div>
      <div class="p-actions">
        <button class="btn-p-edit" onclick="editProject(${idx})">Redaktə et</button>
        <button class="btn-p-del" onclick="deleteProject(${idx})">Sil</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Layihə Sil
window.deleteProject = function(idx) {
  if (confirm('Bu layihəni silmək istədiyinizdən əminsiniz?')) {
    currentData.portfolio.splice(idx, 1);
    saveDataToStorage();
    renderAdminProjects();
  }
};

let editingProjectIndex = -1;

// Layihə Redaktə
window.editProject = function(idx) {
  const p = currentData.portfolio[idx];
  editingProjectIndex = idx;

  document.getElementById('projectDrawerTitle').textContent = 'Layihəni Redaktə Et';
  document.getElementById('pTitle').value = p.title;
  document.getElementById('pCategory').value = p.category;
  document.getElementById('pUrl').value = p.url;
  document.getElementById('pStat').value = p.stat;
  document.getElementById('pDesc').value = p.desc;
  document.getElementById('pTags').value = (p.tags || []).join(', ');

  document.getElementById('newProjectDrawer').style.display = 'block';
  document.getElementById('pTitle').focus();
};

// Xidmətləri Redaktə Siyahısı
function renderAdminServices() {
  const container = document.getElementById('servicesListAdmin');
  if (!container) return;
  container.innerHTML = '';

  currentData.services.forEach((s, idx) => {
    const item = document.createElement('div');
    item.className = 'service-admin-item';
    item.innerHTML = `
      <h4>Xidmət #${idx + 1}</h4>
      <div class="form-field">
        <label>Xidmətin Başlığı</label>
        <input type="text" id="srvTitle_${idx}" value="${s.title}">
      </div>
      <div class="form-field">
        <label>Xidmətin Təsviri</label>
        <textarea id="srvDesc_${idx}" rows="2">${s.desc}</textarea>
      </div>
    `;
    container.appendChild(item);
  });
}

function updateJsonExport() {
  const out = document.getElementById('jsonOutput');
  if (out) {
    out.value = JSON.stringify(currentData, null, 2);
  }
}

// Bütün sahələri oxuyub currentData-ya yazır
function readFormToData() {
  // Brand
  currentData.brand.symbol = document.getElementById('cfgLogoSymbol').value.trim() || "W";
  currentData.brand.name = document.getElementById('cfgBrandName').value.trim() || "WebServices";
  currentData.brand.accent = document.getElementById('cfgBrandAccent').value.trim() || ".az";
  currentData.brand.siteTitle = document.getElementById('cfgSiteTitle').value.trim() || "";

  // Hero
  currentData.hero.badge = document.getElementById('cfgHeroBadge').value.trim();
  currentData.hero.titleStart = document.getElementById('cfgHeroTitleStart').value.trim();
  currentData.hero.titleGrad = document.getElementById('cfgHeroTitleGrad').value.trim();
  currentData.hero.titleEnd = document.getElementById('cfgHeroTitleEnd').value.trim();
  currentData.hero.subtitle = document.getElementById('cfgHeroSubtitle').value.trim();

  currentData.hero.metrics = [
    { num: document.getElementById('cfgMetricVal1').value.trim(), lbl: document.getElementById('cfgMetricLbl1').value.trim() },
    { num: document.getElementById('cfgMetricVal2').value.trim(), lbl: document.getElementById('cfgMetricLbl2').value.trim() },
    { num: document.getElementById('cfgMetricVal3').value.trim(), lbl: document.getElementById('cfgMetricLbl3').value.trim() },
    { num: document.getElementById('cfgMetricVal4').value.trim(), lbl: document.getElementById('cfgMetricLbl4').value.trim() }
  ];

  // Services
  currentData.services.forEach((s, idx) => {
    const tInput = document.getElementById(`srvTitle_${idx}`);
    const dInput = document.getElementById(`srvDesc_${idx}`);
    if (tInput) s.title = tInput.value.trim();
    if (dInput) s.desc = dInput.value.trim();
  });

  // Contact
  currentData.contact.phone = document.getElementById('cfgPhone').value.trim();
  currentData.contact.whatsapp = document.getElementById('cfgWhatsApp').value.trim();
  currentData.contact.email = document.getElementById('cfgEmail').value.trim();
  currentData.contact.address = document.getElementById('cfgAddress').value.trim();
}

document.addEventListener('DOMContentLoaded', () => {
  // PIN Giriş Yoxlanışı
  const pinForm = document.getElementById('pinForm');
  const pinInput = document.getElementById('pinInput');
  const loginOverlay = document.getElementById('loginOverlay');
  const adminWrapper = document.getElementById('adminWrapper');
  const loginError = document.getElementById('loginError');

  // Əgər sessiyada artıq daxil olubsa:
  if (sessionStorage.getItem('admin_authenticated') === 'true') {
    loginOverlay.style.display = 'none';
    adminWrapper.style.display = 'grid';
  }

  pinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pin = pinInput.value.trim();
    if (pin === 'admin123' || pin === 'admin' || pin === '1234') {
      sessionStorage.setItem('admin_authenticated', 'true');
      loginOverlay.style.display = 'none';
      adminWrapper.style.display = 'grid';
      loginError.textContent = '';
    } else {
      loginError.textContent = 'Yanlış PIN kod! Standart kod: admin123';
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('admin_authenticated');
    window.location.reload();
  });

  // Məlumatları yüklə
  loadSavedData();
  populateForm();

  // Loqo canlı dəyişməsi
  ['cfgLogoSymbol', 'cfgBrandName', 'cfgBrandAccent'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateLogoPreview);
  });

  // Tab keçidləri
  const tabs = document.querySelectorAll('.nav-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const currentTabTitle = document.getElementById('currentTabTitle');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
      currentTabTitle.textContent = tab.querySelector('span').textContent;
    });
  });

  // Əsas "Dəyişiklikləri Saxla" düyməsi
  document.getElementById('saveChangesBtn').addEventListener('click', () => {
    readFormToData();
    saveDataToStorage();
  });

  // Yeni Layihə Drawer Aç/Bağla
  const drawer = document.getElementById('newProjectDrawer');
  document.getElementById('openNewProjectBtn').addEventListener('click', () => {
    editingProjectIndex = -1;
    document.getElementById('projectDrawerTitle').textContent = 'Yeni Layihə Məlumatları';
    document.getElementById('pTitle').value = '';
    document.getElementById('pCategory').value = 'corporate';
    document.getElementById('pUrl').value = '';
    document.getElementById('pStat').value = '';
    document.getElementById('pDesc').value = '';
    document.getElementById('pTags').value = '';
    drawer.style.display = 'block';
  });

  document.getElementById('cancelProjectBtn').addEventListener('click', () => {
    drawer.style.display = 'none';
  });

  document.getElementById('saveProjectBtn').addEventListener('click', () => {
    const title = document.getElementById('pTitle').value.trim();
    const category = document.getElementById('pCategory').value;
    const url = document.getElementById('pUrl').value.trim();
    const stat = document.getElementById('pStat').value.trim();
    const desc = document.getElementById('pDesc').value.trim();
    const rawTags = document.getElementById('pTags').value.trim();
    const tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : [];

    if (!title) {
      alert('Zəhmət olmasa layihənin adını daxil edin.');
      return;
    }

    const projectObj = {
      id: editingProjectIndex >= 0 ? currentData.portfolio[editingProjectIndex].id : `p_${Date.now()}`,
      title,
      category,
      url,
      stat,
      desc,
      tags
    };

    if (editingProjectIndex >= 0) {
      currentData.portfolio[editingProjectIndex] = projectObj;
    } else {
      currentData.portfolio.unshift(projectObj);
    }

    drawer.style.display = 'none';
    saveDataToStorage();
    renderAdminProjects();
  });

  // JSON İxrac və Kopyalama
  document.getElementById('exportJsonBtn').addEventListener('click', () => {
    readFormToData();
    const str = JSON.stringify(currentData, null, 2);
    navigator.clipboard.writeText(str).then(() => {
      alert('Bütün konfiqurasiya JSON formatında buferə kopyalandı!');
    });
  });

  document.getElementById('downloadJsonBtn').addEventListener('click', () => {
    readFormToData();
    const str = JSON.stringify(currentData, null, 2);
    const blob = new Blob([str], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'webservices-sayt-melumatlari.json';
    a.click();
  });

  document.getElementById('resetDefaultsBtn').addEventListener('click', () => {
    if (confirm('Bütün fərdi dəyişiklikləri sıfırlayıb ilkin standartlara qaytarmaq istəyirsiniz?')) {
      localStorage.removeItem('webservices_site_data');
      currentData = JSON.parse(JSON.stringify(defaultSiteData));
      populateForm();
      showToast('Sayt ilkin standart vəziyyətinə qaytarıldı.');
    }
  });
});
