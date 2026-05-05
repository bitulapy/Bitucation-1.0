// =============================================
// BITUCATION — MAIN JAVASCRIPT
// =============================================

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- ACTIVE NAV LINK ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// ---- PARTICLE BACKGROUND ----
function createParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const symbols = ['✦', '✧', '⋆', '◈', '◇', '⬡', '✺', '✹'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      font-size: ${Math.random() * 14 + 8}px;
      color: ${Math.random() > 0.5 ? '#9D4EDD' : '#E040A0'};
      opacity: ${Math.random() * 0.3 + 0.05};
      animation: particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      pointer-events: none;
      user-select: none;
    `;
    container.appendChild(p);
  }

  // Add CSS for particle animation if not already added
  if (!document.getElementById('particle-style')) {
    const style = document.createElement('style');
    style.id = 'particle-style';
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(10deg); }
        66% { transform: translateY(10px) rotate(-5deg); }
      }
    `;
    document.head.appendChild(style);
  }
}
createParticles();

// ---- BITULA QUOTES ----
const quotes = [
  "\"Ilmu pengetahuan adalah senjata yang paling ampuh yang bisa kamu gunakan untuk mengubah dunia. Satu baris kode hari ini bisa jadi solusi jutaan orang esok hari.\"",
  "\"Jangan takut sama error. Error itu bukan akhir, itu justru awal dari pemahaman yang lebih dalam. Debug itu seru!\"",
  "\"Setiap programmer hebat dulunya juga bingung. Bedanya, mereka nggak berhenti belajar. Kamu bisa kok!\"",
  "\"Mathematics dan coding itu kayak musik — awalnya susah, tapi begitu kamu 'get it', semuanya mengalir indah.\"",
  "\"Consistency beats talent. Belajar 30 menit setiap hari lebih powerful dari belajar 5 jam sekali seminggu!\"",
  "\"Data is the new oil, tapi yang bisa mengolah data... itu yang jadi masternya! Yuk belajar bareng!\"",
];
let currentQuoteIdx = 0;
function nextQuote() {
  currentQuoteIdx = (currentQuoteIdx + 1) % quotes.length;
  const el = document.getElementById('bitula-quote');
  if (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => {
      el.textContent = quotes[currentQuoteIdx];
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }
}

// ---- SCROLL REVEAL ----
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.category-card, .step-card, .section-header, .bitula-says-card, .topic-day-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', initReveal);

// ---- STREAK SYSTEM (localStorage visual) ----
function initStreak() {
  const streakDisplay = document.getElementById('streak-display');
  if (!streakDisplay) return;

  const today = new Date().toDateString();
  let streak = JSON.parse(localStorage.getItem('bitucation_streak') || '{"count":0,"lastDate":null,"history":[]}');

  // Mark today if coming from a lesson completion
  if (sessionStorage.getItem('lesson_completed')) {
    if (streak.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (streak.lastDate === yesterday.toDateString()) {
        streak.count++;
      } else {
        streak.count = 1;
      }
      streak.lastDate = today;
      if (!streak.history.includes(today)) streak.history.push(today);
      localStorage.setItem('bitucation_streak', JSON.stringify(streak));
    }
    sessionStorage.removeItem('lesson_completed');
  }

  streakDisplay.textContent = streak.count;

  // Render streak calendar (last 7 days)
  const calendar = document.getElementById('streak-calendar');
  if (calendar) {
    calendar.innerHTML = '';
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const ds = d.toDateString();
      const day = document.createElement('div');
      day.className = `streak-day ${streak.history.includes(ds) ? 'active' : ''}`;
      day.title = ds;
      const dayLabel = d.toLocaleDateString('id-ID', { weekday: 'short' });
      day.innerHTML = `<span class="streak-dot"></span><span class="streak-label">${dayLabel}</span>`;
      calendar.appendChild(day);
    }
  }
}
document.addEventListener('DOMContentLoaded', initStreak);

// ---- QUIZ HANDLER ----
function initQuiz() {
  const quizForm = document.getElementById('quiz-form');
  if (!quizForm) return;

  const submitBtn = document.getElementById('quiz-submit');
  const resultDiv = document.getElementById('quiz-result');

  submitBtn && submitBtn.addEventListener('click', () => {
    const questions = quizForm.querySelectorAll('.quiz-question');
    let score = 0;
    let total = questions.length;
    let allAnswered = true;

    questions.forEach(q => {
      const selected = q.querySelector('input[type="radio"]:checked');
      if (!selected) { allAnswered = false; return; }
      if (selected.dataset.correct === 'true') score++;
      // Visual feedback
      q.querySelectorAll('.quiz-option').forEach(opt => {
        const radio = opt.querySelector('input');
        if (radio.dataset.correct === 'true') opt.classList.add('correct');
        else if (radio.checked) opt.classList.add('wrong');
        opt.style.pointerEvents = 'none';
      });
    });

    if (!allAnswered) {
      resultDiv.innerHTML = `<div class="quiz-alert warning">⚠️ Jawab semua soal dulu ya!</div>`;
      return;
    }

    const pct = Math.round((score / total) * 100);
    const emoji = pct === 100 ? '🎉' : pct >= 60 ? '👍' : '💪';
    resultDiv.innerHTML = `
      <div class="quiz-result-card">
        <div class="result-score">${pct}%</div>
        <p>${emoji} Kamu menjawab <strong>${score} dari ${total}</strong> soal dengan benar!</p>
        ${pct === 100 ? '<p class="result-perfect">Sempurna! Bitula bangga sama kamu! 🌙</p>' : '<p class="result-retry">Yuk pelajari lagi bagian yang salah!</p>'}
      </div>`;

    // Mark streak
    sessionStorage.setItem('lesson_completed', 'true');
    submitBtn.style.display = 'none';
  });
}
document.addEventListener('DOMContentLoaded', initQuiz);

// ---- PROGRESS BAR (materi navigation) ----
function updateReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
  bar.style.width = pct + '%';
}
window.addEventListener('scroll', updateReadingProgress);

// ---- SMOOTH PAGE TRANSITIONS ----
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.25s ease';
      setTimeout(() => { window.location.href = href; }, 250);
    });
  }
});
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease';
});
