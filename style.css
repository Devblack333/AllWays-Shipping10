// Language data and UI logic + comments system
const LANG = {
  en: {
    company_name: "AllWays Shipping Company",
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_contact: "Contact",
    hero_title: "AllWays Shipping Company",
    hero_lead: "Fast. Secure. Global. We deliver packages and freight across the world with reliable tracking and friendly service.",
    btn_services: "Our Services", btn_contact: "Contact Us", btn_signin: "Sign In", btn_signin_small: "Sign In",
    why_title: "Why Choose AllWays?",
    why_speed: "Speed", why_speed_p: "Quick deliveries and on-time performance.",
    why_security: "Security", why_security_p: "Insured shipping and real-time tracking.",
    why_global: "Global Reach", why_global_p: "Partnerships across continents for smooth delivery.",
    services_title: "Our Services", svc_air: "Air Freight", svc_air_p: "Fast international air shipping.",
    svc_sea: "Sea Freight", svc_sea_p: "Cost-efficient container shipping.", svc_ground: "Ground Delivery", svc_ground_p: "Local & last-mile delivery solutions.",
    comments_title: "Client Feedback", comments_lead: "Sign in to post a comment. Recent comments are shown below.",
    btn_post: "Post Comment", btn_signout: "Sign Out", modal_title: "Sign In", btn_cancel: "Cancel",
    contact_heading: "Contact Us", contact_info: "Phone: {phone} — Email: support@allways.example",
    footer_text: "© AllWays Shipping Company — All rights reserved",
    about_title: "About AllWays Shipping Company", about_p: "We are a team of logistics professionals dedicated to safe and reliable shipments worldwide.",
    services_title: "Our Services", svc_customs: "Customs Clearance", svc_customs_p: "Documentation and compliance support.",
    btn_whatsapp: "Message on WhatsApp", btn_facebook: "Visit our Facebook"
  },
  ar: {
    company_name: "AllWays Shipping Company",
    nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "خدماتنا", nav_contact: "اتصل بنا",
    hero_title: "شركة الشحن AllWays", hero_lead: "سريع. آمن. عالمي. نوفر تتبعًا موثوقًا وخدمة ودودة لشحن الطرود والبضائع حول العالم.",
    btn_services: "خدماتنا", btn_contact: "اتصل بنا", btn_signin: "تسجيل الدخول", btn_signin_small: "تسجيل",
    why_title: "لماذا تختار AllWays؟",
    why_speed: "السرعة", why_speed_p: "توصيل سريع وموعد دقيق.",
    why_security: "الأمان", why_security_p: "تأمين الشحن وتتبع فوري.",
    why_global: "تغطية عالمية", why_global_p: "شراكات عبر القارات لتوصيل سلس.",
    services_title: "خدماتنا", svc_air: "الشحن الجوي", svc_air_p: "شحن جوي دولي سريع.",
    svc_sea: "الشحن البحري", svc_sea_p: "شحن حاويات اقتصادي.", svc_ground: "التوصيل البري", svc_ground_p: "حلول التوزيع المحلي.",
    comments_title: "آراء العملاء", comments_lead: "سجّل لتستطيع نشر تعليق. أحدث التعليقات تظهر أدناه.",
    btn_post: "انشر", btn_signout: "تسجيل خروج", modal_title: "تسجيل الدخول", btn_cancel: "إلغاء",
    contact_heading: "اتصل بنا", contact_info: "الهاتف: {phone} — البريد: support@allways.example",
    footer_text: "© AllWays Shipping Company — جميع الحقوق محفوظة",
    about_title: "عن شركة AllWays", about_p: "نحن فريق من المختصين في الخدمات اللوجستية نعمل على شحن آمن وموثوق عبر العالم.",
    services_title: "خدماتنا", svc_customs: "التخليص الجمركي", svc_customs_p: "دعم الوثائق والامتثال.",
    btn_whatsapp: "مراسلة عبر واتساب", btn_facebook: "صفحتنا على فيسبوك"
  }
};

// Replace phone inside strings
const PHONE = "+20 123 456 7890";
for (let k of ['en','ar']) {
  if (LANG[k] && LANG[k].contact_info) LANG[k].contact_info = LANG[k].contact_info.replace("{phone}", PHONE);
}

// Apply language to all elements with data-i18n attribute
function applyLanguage(lang){
  try{
    document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    const enBtn = document.getElementById('lang-en');
    const arBtn = document.getElementById('lang-ar');
    if(enBtn && arBtn){
      enBtn.classList.toggle('active', lang === 'en');
      arBtn.classList.toggle('active', lang === 'ar');
    }

    document.querySelectorAll('[data-i18n]').forEach(node=>{
      const key = node.getAttribute('data-i18n');
      if(LANG[lang] && LANG[lang][key]) {
        node.textContent = LANG[lang][key];
      }
    });

    // small direction class for custom styling if needed
    if(lang === 'ar') document.body.classList.add('rtl'); else document.body.classList.remove('rtl');

    localStorage.setItem('site_lang', lang);
  }catch(e){ console.warn('lang apply error', e); }
}

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    document.getElementById('lang-en').addEventListener('click', ()=> applyLanguage('en'));
    document.getElementById('lang-ar').addEventListener('click', ()=> applyLanguage('ar'));
    const saved = localStorage.getItem('site_lang') || 'en';
    applyLanguage(saved);
  }catch(e){ console.warn(e); }
});

// Comments system (local)
(function(){
  try{
    window.initComments = function(){
      const loginBox = document.getElementById('loginBox');
      const commentArea = document.getElementById('commentArea');
      const usernameInput = document.getElementById('username');
      const loginBtn = document.getElementById('loginBtn');
      const postBtn = document.getElementById('postBtn');
      const commentInput = document.getElementById('commentInput');
      const signOutBtn = document.getElementById('signOutBtn');
      const commentsList = document.getElementById('commentsList');
      if(!commentsList) return;

      let user = localStorage.getItem('aw_user') || null;
      let comments = JSON.parse(localStorage.getItem('aw_comments') || '[]');

      function escapeHtml(s){ return String(s).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]); }

      window.renderComments = function(){
        commentsList.innerHTML = '';
        if(comments.length === 0){ commentsList.innerHTML = '<p class="muted">No comments yet — be the first!</p>'; return; }
        comments.slice().reverse().forEach(c=>{
          const div = document.createElement('div'); div.className='comment';
          div.innerHTML = '<strong>' + escapeHtml(c.name) + '</strong><div style="margin-top:6px">' + escapeHtml(c.text) + '</div><div class="muted" style="font-size:12px;margin-top:6px">' + new Date(c.created).toLocaleString() + '</div>';
          commentsList.appendChild(div);
        });
      };

      if(user){ if(loginBox) loginBox.style.display='none'; if(commentArea) commentArea.classList.remove('hidden'); }
      else{ if(commentArea) commentArea.classList.add('hidden'); if(loginBox) loginBox.style.display='flex'; }

      if(loginBtn) loginBtn.addEventListener('click', ()=>{ const name = usernameInput.value.trim(); if(!name) return alert('Please enter your name.'); localStorage.setItem('aw_user', name); user = name; if(loginBox) loginBox.style.display='none'; if(commentArea) commentArea.classList.remove('hidden'); });
      if(signOutBtn) signOutBtn.addEventListener('click', ()=>{ localStorage.removeItem('aw_user'); user=null; if(loginBox) loginBox.style.display='flex'; if(commentArea) commentArea.classList.add('hidden'); });
      if(postBtn) postBtn.addEventListener('click', ()=>{ const text = commentInput.value.trim(); if(!text) return alert('Please write a comment.'); const newComment = { name: user, text, created: new Date().toISOString() }; comments.push(newComment); localStorage.setItem('aw_comments', JSON.stringify(comments)); commentInput.value=''; renderComments(); });

      renderComments();
    };

    if(document.readyState === 'complete' || document.readyState === 'interactive') initComments();
    else document.addEventListener('DOMContentLoaded', initComments);
  }catch(e){ console.warn('init comments error', e); }
})();

// modal helpers
function openLogin(){ const m = document.getElementById('loginModal'); if(m){ m.style.display='flex'; m.classList.remove('hidden'); } }
function closeLogin(){ const m = document.getElementById('loginModal'); if(m){ m.style.display='none'; m.classList.add('hidden'); } }
function doModalLogin(){ const name = document.getElementById('modalName').value.trim(); if(!name) return alert('Please enter your name'); localStorage.setItem('aw_user', name); closeLogin(); initComments(); }
