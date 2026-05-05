// =============================================
// LOGIN PAGE JAVASCRIPT
// =============================================

function switchTab(tab) {
  const loginPanel = document.getElementById('form-login');
  const registerPanel = document.getElementById('form-register');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (tab === 'login') {
    loginPanel.style.display = 'block';
    registerPanel.style.display = 'none';
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    loginPanel.style.display = 'none';
    registerPanel.style.display = 'block';
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const msg = document.getElementById('login-message');
  msg.className = 'form-message';
  msg.textContent = '';

  // Simulate loading
  const btn = document.getElementById('login-submit-btn');
  btn.innerHTML = '<span>Memproses...</span>';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<span>Login</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    btn.disabled = false;
    msg.className = 'form-message';
    msg.innerHTML = '⚠️ Fitur login belum aktif — <em>coming soon!</em>';
    msg.style.color = 'var(--primary)';
  }, 1200);
}

function handleRegister(e) {
  e.preventDefault();
  const msg = document.getElementById('register-message');
  msg.className = 'form-message';

  const btn = document.getElementById('register-submit-btn');
  btn.innerHTML = '<span>Memproses...</span>';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<span>Buat Akun</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    btn.disabled = false;
    msg.innerHTML = '⚠️ Fitur registrasi belum aktif — <em>coming soon!</em>';
    msg.style.color = 'var(--primary)';
  }, 1200);
}

function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
  }
}

function showComingSoon() {
  const toast = document.getElementById('coming-soon-toast');
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}
