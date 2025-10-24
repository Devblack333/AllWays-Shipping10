/* Main script: lightweight, sign-in & comments removed as requested.
   Keeps language toggle, mobile nav, hero video enhancements and small accessibility. */

const LANG = {
  en: {
    company_name: "ThreeWays Shipping Company",
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_contact: "Contact",
    hero_title: "ThreeWays Shipping", hero_lead: "Fast. Secure. Global. We deliver packages and freight worldwide with transparent tracking.",
    btn_services: "Our Services", btn_contact: "Contact Us",
    why_title: "Why Choose ThreeWays?", why_speed: "Speed", why_speed_p: "Optimized routes for faster delivery.",
    why_security: "Security", why_security_p: "Secured handling and optional insurance.", why_global: "Global Reach", why_global_p: "Partners across continents.",
    services_title: "Our Services", svc_air: "Air Freight", svc_air_p: "Priority air shipping.", svc_sea: "Sea Freight", svc_sea_p: "Container shipping options.", svc_ground: "Ground Delivery", svc_ground_p: "Local & last-mile solutions.",
    contact_heading: "Contact Us", contact_info: "Phone: {phone} — Email: support@threeways.example", footer_text: "© ThreeWays Shipping — All rights reserved",
    about_title: "About ThreeWays Shipping", about_p: "We are a team of logistics professionals dedicated to safe and reliable shipments worldwide."
  },
  ar: {
    company_name: "ThreeWays Shipping Company",
    nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "خدماتنا", nav_contact: "اتصل بنا",
    hero_title: "ThreeWays شركة شحن", hero_lead: "سريع. آمن. عالمي. نوفر تتبعًا موثوقًا وخدمة ودودة لشحن الطرود والبضائع حول العالم.",
    btn_services: "خدماتنا", btn_contact: "اتصل بنا",
    why_title: "ThreeWays لماذا اختار", why_speed: "السرعة", why_speed_p: "توصيل سريع وموعد دقيق.",
    why_security: "الأمان", why_security_p: "تأمين الشحن وتتبع فوري.", why_global: "تغطية عالمية", why_global_p: "شراكات عبر القارات لتوصيل سلس.",
    services_title: "خدماتنا", svc_air: "الشحن الجوي", svc_air_p: "شحن جوي دولي سريع.", svc_sea: "الشحن البحري", svc_sea_p: "شحن حاويات اقتصادي.", svc_ground: "التوصيل البري", svc_ground_p: "حلول التوزيع المحلي.",
    comments_title: "آراء العملاء", comments_lead: "تُعرض هنا آراء العملاء.", btn_post: "انشر",
    contact_heading: "اتصل بنا", contact_info: "الهاتف: {phone} — البريد: support@threeways.example", footer_text: "© ThreeWays Shipping Company — جميع الحقوق محفوظة",
    about_title: "ThreeWays عن شركة", about_p: "نحن فريق من المختصين في الخدمات اللوجستية نعمل على شحن آمن وموثوق عبر العالم."
  }
};

const SITE_PHONE = "+20 123 456 7890";
LANG.en.contact_info = LANG.en.contact_info.replace("{phone}", SITE_PHONE);
LANG.ar.contact_info = LANG.ar.contact_info.replace("{phone}", SITE_PHONE);

function $id(id) { return document.getElementById(id); }

function applyLanguage(lang) {
  try {
    document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    const enBtn = $id('lang-en');
    const arBtn = $id('lang-ar');
    if (enBtn && arBtn) { enBtn.classList.toggle('active', lang === 'en'); arBtn.classList.toggle('active', lang === 'ar'); }
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (LANG[lang] && LANG[lang][key]) node.textContent = LANG[lang][key];
    });
    // some manual replacements
    $id('phone') && ($id('phone').textContent = SITE_PHONE);
    $id('contactPhone') && ($id('contactPhone').textContent = SITE_PHONE);
    localStorage.setItem('site_lang', lang);
  } catch (e) { console.warn(e); }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    // language buttons
    const enBtn = $id('lang-en'), arBtn = $id('lang-ar');
    if (enBtn) enBtn.addEventListener('click', () => applyLanguage('en'));
    if (arBtn) arBtn.addEventListener('click', () => applyLanguage('ar'));
    const savedLang = localStorage.getItem('site_lang') || 'en';
    applyLanguage(savedLang);

    // mobile nav toggle
    const navToggle = $id('navToggle');
    const nav = document.querySelector('.nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });

      // close nav when clicking outside
      document.addEventListener('click', (ev) => {
        if (!nav.contains(ev.target) && !navToggle.contains(ev.target)) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // smooth scroll for nav links
    document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (nav && nav.classList.contains('open')) { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
      });
    });

    // hero video enhancements
    (function heroVideoEnhancements(){
      try {
        const v = $id('heroVideo');
        if (!v) return;
        v.muted = true;
        v.playsInline = true;
        v.autoplay = true;
        v.loop = true;
        v.addEventListener('error', () => {
          v.style.display = 'none';
          const hero = document.querySelector('.hero');
          if (hero) hero.style.backgroundImage = 'linear-gradient(180deg, rgba(3,86,182,0.12), rgba(255,255,255,0.6))';
        });
        const io = new IntersectionObserver((entries) => {
          entries.forEach(ent => {
            if (ent.isIntersecting) {
              try { v.play().catch(()=>{}); } catch(_) {}
            } else {
              try { v.pause(); } catch(_) {}
            }
          });
        }, { threshold: 0.2 });
        io.observe(document.querySelector('.hero'));
      } catch(e){/*noop*/ }
    })();
  } catch (e) { console.warn('init error', e); }
});
