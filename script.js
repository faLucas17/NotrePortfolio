
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
      const project = document.getElementById('project').value;
      const message = document.getElementById('message').value.trim();

      if (name && email && project && message) {
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
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
      particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';

      document.getElementById('particles').appendChild(particle);

      setTimeout(() => particle.remove(), 12000);
    }
    setInterval(createParticle, 500);

    // Parallax effect
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });

    // Typing effect for hero title
    function typeWriter(element, text, delay = 80) {
      let i = 0;
      element.textContent = '';
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, delay);
        }
      }
      type();
    }

    // Initialize typing effect
    window.addEventListener('load', function () {
      setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
          const originalText = 'Réalisez vos idées avec DataFlow Studio';
          typeWriter(heroTitle, originalText, 60);
        }
      }, 1500);
    });

    // Smooth reveal animations
    window.addEventListener('scroll', function() {
      const cards = document.querySelectorAll('.service-card, .team-member, .project-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    });

    // Add initial styles for smooth animations
    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.service-card, .team-member, .project-card');
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      });
    });
