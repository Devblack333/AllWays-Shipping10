/* Main script: lightweight, handles full language swap. */

const SITE_PHONE = "+20 123 456 7890";

// --- IMAGE PATH VARIABLES (Make sure these files exist in your 'images/' folder) ---
const IMG_AIR_EN = "images/air-freight-en.jpg"; 
const IMG_SEA_EN = "images/sea-freight-en.jpg";
const IMG_GROUND_EN = "images/ground-delivery-en.jpg"; 

const IMG_AIR_AR = "images/air-freight-ar.jpg"; 
const IMG_SEA_AR = "images/sea-freight-ar.jpg";
const IMG_GROUND_AR = "images/ground-delivery-ar.jpg"; 
// Note: I left some images as dummy URLs for simplicity, but you can swap them all like the first one.


// --- 1. Static Translations (Header/Footer/Metadata) ---
const LANG = {
  en: {
    title: "ThreeWays Shipping — Home",
    meta_desc: "ThreeWays — Fast. Secure. Global. Reliable shipping and freight with real tracking and friendly service.",
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_contact: "Contact",
    call_us: "Call us:",
    footer_text: "© ThreeWays Shipping Company — All rights reserved"
  },
  ar: {
    title: "ThreeWays شركة شحن — الرئيسية",
    meta_desc: "ThreeWays — سريع. آمن. عالمي. شحن موثوق للبضائع مع تتبع حقيقي وخدمة ودودة.",
    nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "خدماتنا", nav_contact: "اتصل بنا",
    call_us: "اتصل بنا:",
    footer_text: "© ThreeWays شركة شحن — جميع الحقوق محفوظة"
  }
};

// --- 2. Full Content HTML Templates (for <main id="pageContent">) ---

// The user-provided content in English (EN)
// NOTE: Must be enclosed in BACKTICKS (`)
const EN_MAIN_CONTENT = `
    <section id="home" class="hero">
    <video id="heroVideo" class="hero-video" autoplay muted loop playsinline crossorigin="anonymous">
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>

    <div class="hero-left">
      <h1>ThreeWays Shipping</h1>
      <p class="lead">Fast. Secure. Global. We deliver packages and freight worldwide with transparent tracking, competitive pricing, and exceptional customer care.</p>
      <div class="hero-cta">
        <a class="btn" href="#services">Our Services</a>
        <a class="btn secondary" href="#contact">Contact Us</a>
      </div>

      <div class="trust-row" aria-hidden="false" style="margin-top:14px">
        <div class="icon">24/7</div>
        <div style="margin-left:10px">
          <div style="font-weight:700">Real-time Support</div>
          <div class="muted">Dedicated agents and live tracking for every shipment.</div>
        </div>
      </div>
    </div>

    <div class="hero-right" aria-hidden="true">
      <div class="hero-card card" style="padding:12px;max-width:360px">
        <h3>Instant Quote</h3>
        <p class="muted">Get an approximate shipping cost for air, sea or ground in seconds — no sign in required.</p>
        <div style="margin-top:12px">
          <a class="btn" href="#contact">Request Quote</a>
        </div>
      </div>
          </div>
  </section>

    <section id="about" class="card">
    <h2>About ThreeWays Shipping</h2>
    <p class="muted">We are a global logistics team simplifying trade and delivery for businesses and individuals. Like any other global shipping company, we handle customs paperwork, insurance options, and custom routing to keep goods moving efficiently.</p>
    <p>Founded by logistics professionals with decades of experience, our focus is safety, transparency, and lowering time-in-transit for your cargo.</p>
  </section>

    <section id="services" class="card">
    <h2>Our Services</h2>
    <div class="grid services-grid">
      <div class="card svc">
        <img src="${plane}" alt="Air freight">
        <h3>Air Freight</h3>
        <p>Priority air shipping for time-sensitive cargo with airport-to-airport or door-to-door options.</p>
      </div>
      <div class="card svc">
        <img src="${Ship}" alt="Sea freight">
        <h3>Sea Freight</h3>
        <p>Full container loads (FCL) and less-than-container (LCL) services with global carrier partnerships.</p>
      </div>
      <div class="card svc">
        <img src="${truck}" alt="Ground delivery">
        <h3>Ground Delivery</h3>
        <p>Last-mile solutions, local couriers and palletized freight for regional distribution.</p>
      </div>
    </div>
  </section>

    <section class="card why-section">
    <h2>Why Choose ThreeWays?</h2>
    <div class="why-us">
      <div class="why-card">
        <img src="${minaa}" alt="Speed">
        <div class="txt">
          <h3>Speed</h3>
          <p>Optimized routes and express options to keep your supply chain moving.</p>
        </div>
      </div>
      <div class="why-card">
        <img src="${plane}" alt="Security">
        <div class="txt">
          <h3>Security</h3>
          <p>Secured handling, optional insurance, and tamper-evident packaging for sensitive shipments.</p>
        </div>
        </div>
      <div class="why-card">
        <img src="${plane}" alt="Global Reach">
        <div class="txt">
          <h3>Global Reach</h3>
          <p>Strong carrier network and customs expertise across continents.</p>
        </div>
      </div>
    </div>
  </section>

    <section class="card comments-wrap" id="testimonialsSection">
    <h2>Customer Stories</h2>
    <p class="muted">Real customers, real results — selected from recent shipments handled by ThreeWays.</p>

    <div class="grid" style="grid-template-columns:repeat(2,1fr);margin-top:12px">
      <div class="card">
        <strong>Ahmed M. — E-commerce Manager</strong>
        <p class="muted" style="margin-top:8px">"ThreeWays cut our international delivery time by 30% and their support helped us resolve a customs hold fast."</p>
      </div>
      <div class="card">
        <strong>Sara L. — Startup Founder</strong>
        <p class="muted" style="margin-top:8px">"Great pricing and the team helped with packaging advice — our fragile items arrived safely."</p>
      </div>
    </div>
  </section>

    <section id="contact" class="card contact-section">
    <div class="left">
      <h2>Contact Us</h2>
      <p class="muted">Phone: <strong id="contactPhone">${SITE_PHONE}</strong> — Email: <a href="mailto:support@threeways.example">support@threeways.example</a></p>
      <p>Office hours: Sun–Thu, 08:00–18:00 (EET). We operate customs clearance & documentation services for import/export.</p>
    </div>
    <div class="right">
      <a class="btn" href="https://wa.me/201234567890" target="_blank" rel="noopener">Message on WhatsApp</a>
      <a class="btn secondary" href="https://facebook.com" target="_blank" rel="noopener">Visit our Facebook</a>
    </div>
  </section>
`;

// Arabic (AR) version of the full content (RTL ready)
// NOTE: Must be enclosed in BACKTICKS (`)
const AR_MAIN_CONTENT = `
    <section id="home" class="hero">
    <video id="heroVideo" class="hero-video" autoplay muted loop playsinline crossorigin="anonymous">
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>

    <div class="hero-left">
      <h1>ThreeWays شركة شحن</h1>
      <p class="lead">سريع. آمن. عالمي. نوفر تتبعًا موثوقًا وخدمة ودودة لشحن الطرود والبضائع حول العالم.</p>
      <div class="hero-cta">
        <a class="btn" href="#services">خدماتنا</a>
        <a class="btn secondary" href="#contact">اتصل بنا</a>
      </div>

      <div class="trust-row" aria-hidden="false" style="margin-top:14px">
        <div class="icon">24/7</div>
        <div style="margin-right:10px">
          <div style="font-weight:700">دعم فوري</div>
          <div class="muted">وكلاء متخصصون وتتبع مباشر لكل شحنة.</div>
        </div>
      </div>
    </div>

    <div class="hero-right" aria-hidden="true">
      <div class="hero-card card" style="padding:12px;max-width:360px">
        <h3>عرض سعر فوري</h3>
        <p class="muted">احصل على تكلفة شحن تقريبية جوية أو بحرية أو برية في ثوانٍ — لا يلزم تسجيل الدخول.</p>
        <div style="margin-top:12px">
          <a class="btn" href="#contact">طلب عرض سعر</a>
        </div>
      </div>
    </div>
  </section>

    <section id="about" class="card">
    <h2>عن شركة ThreeWays</h2>
    <p class="muted">نحن فريق لوجستي عالمي يعمل على تبسيط التجارة والتسليم للشركات والأفراد. نتعامل مع أوراق الجمارك وخيارات التأمين والتوجيه المخصص لضمان تحرك البضائع بكفاءة.</p>
    <p>تأسست الشركة من قبل مختصين في الخدمات اللوجستية بخبرة عقود، ونركز على السلامة والشفافية وتقليل وقت النقل لشحنتك.</p>
  </section>

    <section id="services" class="card">
    <h2>خدماتنا</h2>
    <div class="grid services-grid">
      <div class="card svc">
        <img src="${plane}" alt="الشحن الجوي الأولوية">
        <h3>الشحن الجوي</h3>
        <p>شحن جوي أولوية للبضائع الحساسة للوقت مع خيارات من مطار إلى مطار أو من الباب إلى الباب.</p>
      </div>
      <div class="card svc">
        <img src="${Ship}" alt="الشحن البحري">
        <h3>الشحن البحري</h3>
        <p>خدمات حاويات كاملة (FCL) وأقل من حمولة حاوية (LCL) بشراكات عالمية.</p>
      </div>
      <div class="card svc">
        <img src="${truck}" alt="التوصيل البري">
        <h3>التوصيل البري</h3>
        <p>حلول الميل الأخير، وخدمات البريد السريع المحلي، والشحن على منصات نقالة للتوزيع الإقليمي.</p>
      </div>
    </div>
  </section>

    <section class="card why-section">
    <h2>لماذا تختار ThreeWays؟</h2>
    <div class="why-us">
      <div class="why-card">
        <img src="${plane}" alt="السرعة">
        <div class="txt">
          <h3>السرعة</h3>
          <p>مسارات مُحسّنة وخيارات سريعة للحفاظ على حركة سلسلة التوريد الخاصة بك.</p>
        </div>
      </div>
      <div class="why-card">
        <img src="${plane}" alt="الأمان">
        <div class="txt">
          <h3>الأمان</h3>
          <p>مناولة مؤمنة، وتأمين اختياري، وتغليف مقاوم للعبث للشحنات الحساسة.</p>
        </div>
      </div>
      <div class="why-card">
        <img src="${plane}" alt="تغطية عالمية">
        <div class="txt">
          <h3>تغطية عالمية</h3>
          <p>شبكة قوية من شركات النقل والخبرة الجمركية عبر القارات.</p>
        </div>
      </div>
    </div>
  </section>

    <section class="card comments-wrap" id="testimonialsSection">
    <h2>قصص العملاء</h2>
    <p class="muted">عملاء حقيقيون، نتائج حقيقية — مختارة من الشحنات الأخيرة التي تعاملت معها ThreeWays.</p>

    <div class="grid" style="grid-template-columns:repeat(2,1fr);margin-top:12px">
      <div class="card">
        <strong>أحمد م. — مدير التجارة الإلكترونية</strong>
        <p class="muted" style="margin-top:8px">"قلصت ThreeWays وقت التسليم الدولي لدينا بنسبة 30% وساعدنا دعمهم في حل مشكلة جمركية بسرعة."</p>
        </div>
      <div class="card">
        <strong>سارة ل. — مؤسس شركة ناشئة</strong>
        <p class="muted" style="margin-top:8px">"أسعار رائعة وساعدنا الفريق في نصائح التغليف — وصلت أغراضنا القابلة للكسر بأمان."</p>
      </div>
    </div>
  </section>

    <section id="contact" class="card contact-section">
    <div class="left">
      <h2>اتصل بنا</h2>
      <p class="muted">هاتف: <strong id="contactPhone">${SITE_PHONE}</strong> — بريد إلكتروني: <a href="mailto:support@threeways.example">support@threeways.example</a></p>
      <p>مواعيد العمل: الأحد - الخميس، 08:00 - 18:00 (توقيت شرق أوروبا). نقوم بتشغيل خدمات التخليص الجمركي والتوثيق للاستيراد والتصدير.</p>
    </div>
    <div class="right">
      <a class="btn" href="https://wa.me/201234567890" target="_blank" rel="noopener">راسلنا على WhatsApp</a>
      <a class="btn secondary" href="https://facebook.com" target="_blank" rel="noopener">قم بزيارة صفحتنا على Facebook</a>
    </div>
  </section>
`;

function $id(id) { return document.getElementById(id); }
function $q(selector) { return document.querySelector(selector); }

/**
 * Toggles the main content and static header/footer text for the selected language.
 * @param {('en'|'ar')} lang 
 */
function applyLanguage(lang) {
  try {
    const isAR = (lang === 'ar');
    const currentLangData = isAR ? LANG.ar : LANG.en;
    // Using eval here is a common trick for dynamic template literals, 
    // but since the content is fully controlled and safe, it's fine.
    const contentToInject = isAR ? AR_MAIN_CONTENT : EN_MAIN_CONTENT;

    // 1. Full Site Change: HTML, Direction, and Meta
    document.documentElement.lang = isAR ? 'ar' : 'en';
    document.documentElement.dir = isAR ? 'rtl' : 'ltr';
    document.title = currentLangData.title;
    $id('meta-description').setAttribute('content', currentLangData.meta_desc);

    // 2. Main Content Swap (This is the most critical line)
    $id('pageContent').innerHTML = contentToInject;

    // 3. Static Text/Header/Footer Update 
    $id('footer-text').textContent = currentLangData.footer_text;
    
    // Apply language to elements with data-i18n (nav links, call us pill)
    document.querySelectorAll('.header [data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (currentLangData[key]) node.textContent = currentLangData[key];
    });

    // 4. Manual Text & Button Toggles
    $id('phone') && ($id('phone').textContent = SITE_PHONE);
    $id('contactPhone') && ($id('contactPhone').textContent = SITE_PHONE);
    const enBtn = $id('lang-en');
    const arBtn = $id('lang-ar');
    if (enBtn && arBtn) { 
      enBtn.classList.toggle('active', !isAR); 
      arBtn.classList.toggle('active', isAR); 
      // Update ARIA attributes
      enBtn.setAttribute('aria-checked', String(!isAR));
      arBtn.setAttribute('aria-checked', String(isAR));
    }

    // 5. Re-run post-swap scripts
    heroVideoEnhancements(); // Needed to re-bind the video logic after content swap
    
    localStorage.setItem('site_lang', lang);
  } catch (e) { console.warn('applyLanguage error:', e); }
}

function heroVideoEnhancements(){
  // Check if the element exists before attempting to access its properties
  const v = $id('heroVideo');
  if (!v) return;
  try {
    // Ensure properties are set 
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    v.loop = true;

    // Error handling for video not loading (falls back to a background image/color)
    v.addEventListener('error', () => {
      v.style.display = 'none';
      const hero = $q('.hero');
      if (hero) hero.style.backgroundImage = 'linear-gradient(180deg, #0356b6, #3b82f6)';
    });
    
    // Intersection Observer to pause video when off-screen for performance
    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          try { v.play().catch(()=>{}); } catch(_) {}
        } else {
          try { v.pause(); } catch(_) {}
        }
      });
    }, { threshold: 0.2 });
    
    const heroSection = $q('.hero');
    if (heroSection) io.observe(heroSection);
  } catch(e){/*noop*/ }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    // Language buttons
    const enBtn = $id('lang-en'), arBtn = $id('lang-ar');
    if (enBtn) enBtn.addEventListener('click', () => applyLanguage('en'));
    if (arBtn) arBtn.addEventListener('click', () => applyLanguage('ar'));
    
    // Apply initial saved language, defaults to 'en'
    const savedLang = localStorage.getItem('site_lang') || 'en';
    applyLanguage(savedLang);

    // Mobile nav toggle 
    const navToggle = $id('navToggle');
    const nav = $q('.nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });

      // close nav when clicking a link (or outside on desktop, if implemented)
      document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          const id = a.getAttribute('href').slice(1);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (nav && nav.classList.contains('open')) { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
        });
      });

      // close nav when clicking outside (mobile only)
      document.addEventListener('click', (ev) => {
        if (window.innerWidth <= 900 && nav && nav.classList.contains('open') &&
            !nav.contains(ev.target) && !navToggle.contains(ev.target)) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  } catch (e) { console.warn('init error', e); }
});
