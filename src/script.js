// === Bouton de changement de thème avec fade ===
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Applique le thème sauvegardé si présent
const saved = localStorage.getItem('theme');
if (saved === 'dark' || saved === 'light') {
  html.setAttribute('data-bs-theme', saved);
}

function updateIcon() {
  themeToggle.textContent = html.getAttribute('data-bs-theme') === 'dark' ? '🌙' : '☀️';
}
updateIcon();

function withFade(cb) {
  html.classList.add('theme-fade');    // active les transitions globales
  cb();
  setTimeout(() => html.classList.remove('theme-fade'), 500); // retire après l’anim
}

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  withFade(() => {
    html.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
});

// exemple perso existant pour le modal
document.addEventListener('shown.bs.modal', (e) => {
  if (e.target.id === 'newsletterModal') {
    console.log('Modal newsletter ouvert');
  }
});
