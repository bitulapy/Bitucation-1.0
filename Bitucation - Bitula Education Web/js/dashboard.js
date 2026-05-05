// =============================================
// DASHBOARD JAVASCRIPT
// =============================================

// ---- FILTER CATEGORIES ----
function filterCategory(cat, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('.lesson-card');
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ---- URL PARAM FILTER ----
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    const btn = document.querySelector(`.filter-btn[data-cat="${cat}"]`);
    if (btn) filterCategory(cat, btn);
  }
});
