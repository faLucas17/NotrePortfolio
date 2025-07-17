// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    this.reset();
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});

// Particles
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
  particle.style.animationDelay = Math.random() * 2 + 's';

  document.getElementById('particles').appendChild(particle);

  setTimeout(() => particle.remove(), 8000);
}
setInterval(createParticle, 300);

// Parallax
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Typing effect
function typeWriter(element, text, delay = 100) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

window.addEventListener('load', function () {
  setTimeout(() => {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    typeWriter(heroTitle, originalText, 50);
  }, 1000);
});

// Ripple effect
document.querySelector('.cta-button').addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  const rect = this.getBoundingClientRect();
  const size = 60;
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  this.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// Dynamic hue-rotate
window.addEventListener('scroll', function () {
  const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  const hue = scrollPercent * 360;
  document.body.style.filter = `hue-rotate(${hue}deg)`;
});
