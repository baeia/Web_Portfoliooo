document.getElementById('year').textContent = new Date().getFullYear();

if (window.AOS) {
  window.AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120,
    delay: 70,
    mirror: false,
  });
}

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  if (button) {
    button.textContent = 'Message sent';
  }
});

// Theme toggle: persist and apply theme preference
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});
