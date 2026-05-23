// Verte Energies Limited Website JS

document.addEventListener('DOMContentLoaded', function () {
  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.display = 'none';
    });
  }

  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky-nav');
    } else {
      navbar.classList.remove('sticky-nav');
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animated Counters
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  counters.forEach(counter => {
    const animate = () => {
      const value = +counter.getAttribute('data-target');
      const data = +counter.innerText;
      const increment = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + increment);
        setTimeout(animate, 10);
      } else {
        counter.innerText = value;
      }
    };
    animate();
  });

  // Scroll reveal animations (basic)
  const revealElements = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    for (let el of revealElements) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
