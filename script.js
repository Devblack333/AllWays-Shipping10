// Polished site script: comments + sign-in (localStorage) and locked contact info
const CONTACT = { phone: "+20 123 456 7890", whatsapp: "+201234567890", facebook: "https://facebook.com/" };

// apply contact links (locked - not editable via UI)
function applyContacts() {
  try {
    const phoneEl = document.getElementById('phone');
    const waEls = document.querySelectorAll('#wa, #waBtn');
    const fbEls = document.querySelectorAll('#fb, #fbBtn');
    const telEls = document.querySelectorAll('#tel');
    if (phoneEl) phoneEl.textContent = CONTACT.phone;
    waEls.forEach(e => e.href = 'https://wa.me/' + CONTACT.whatsapp.replace(/\D/g,''));
    fbEls.forEach(e => e.href = CONTACT.facebook);
    telEls.forEach(e => e.href = 'tel:' + CONTACT.phone.replace(/\s/g,''));
  } catch (e) { console.warn(e); }
}

document.addEventListener('DOMContentLoaded', () => { applyContacts(); initComments(); });

// Comments system (local)
function initComments(){
  try {
    const loginBox = document.getElementById('loginBox');
    const commentArea = document.getElementById('commentArea');
    const usernameInput = document.getElementById('username');
    const loginBtn = document.getElementById('loginBtn');
    const postBtn = document.getElementById('postBtn');
    const commentInput = document.getElementById('commentInput');
    const signOutBtn = document.getElementById('signOutBtn');
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;

    let user = localStorage.getItem('aw_user') || null;
    let comments = JSON.parse(localStorage.getItem('aw_comments') || '[]');

    window.renderComments = function(){
      commentsList.innerHTML = '';
      if (comments.length === 0) { commentsList.innerHTML = '<p class="muted">No comments yet — be the first!</p>'; return; }
      comments.slice().reverse().forEach(c => {
        const div = document.createElement('div'); div.className='comment';
        div.innerHTML = '<strong>' + escapeHtml(c.name) + '</strong><div style="margin-top:6px">' + escapeHtml(c.text) + '</div><div class="muted" style="font-size:12px;margin-top:6px">' + new Date(c.created).toLocaleString() + '</div>';
        commentsList.appendChild(div);
      });
    };

    function escapeHtml(s) { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]); }

    if (user) { if(loginBox) loginBox.style.display='none'; if(commentArea) commentArea.classList.remove('hidden'); }
    else { if(commentArea) commentArea.classList.add('hidden'); if(loginBox) loginBox.style.display='flex'; }

    if (loginBtn) loginBtn.addEventListener('click', ()=>{
      const name = usernameInput.value.trim();
      if(!name) return alert('Please enter your name.');
      localStorage.setItem('aw_user', name);
      user = name;
      loginBox.style.display='none';
      commentArea.classList.remove('hidden');
    });

    if (signOutBtn) signOutBtn.addEventListener('click', ()=>{
      localStorage.removeItem('aw_user'); user = null; if(loginBox) loginBox.style.display='flex'; if(commentArea) commentArea.classList.add('hidden');
    });

    if (postBtn) postBtn.addEventListener('click', ()=>{
      const text = commentInput.value.trim();
      if(!text) return alert('Please write a comment.');
      const newComment = { name: user, text, created: new Date().toISOString() };
      comments.push(newComment);
      localStorage.setItem('aw_comments', JSON.stringify(comments));
      commentInput.value = '';
      renderComments();
    });

    renderComments();
  } catch(e) { console.warn('comments init error', e); }
}

// Modal helpers
function openLogin(){ const m = document.getElementById('loginModal'); if(m){ m.style.display='flex'; m.classList.remove('hidden'); } }
function closeLogin(){ const m = document.getElementById('loginModal'); if(m){ m.style.display='none'; m.classList.add('hidden'); } }

function doModalLogin(){
  const name = document.getElementById('modalName').value.trim();
  if(!name) return alert('Please enter your name');
  localStorage.setItem('aw_user', name);
  closeLogin();
  initComments();
}

// small helper for devs (not used by UI)
function clearComments(){ localStorage.removeItem('aw_comments'); localStorage.removeItem('aw_user'); location.reload(); }
