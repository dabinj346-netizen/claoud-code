// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll fade-in
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll(
  '.skill-card, .project-card, .project-placeholder, .contact-card, .about-grid, .about-info'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Terminal typing effect
const lines = document.querySelectorAll('.terminal-body .output');
lines.forEach((line, i) => {
  const text = line.textContent;
  line.textContent = '';
  setTimeout(() => {
    let j = 0;
    const interval = setInterval(() => {
      line.textContent += text[j++];
      if (j >= text.length) clearInterval(interval);
    }, 40);
  }, 800 + i * 350);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});
