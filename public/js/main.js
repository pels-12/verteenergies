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
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky-nav');
      } else {
        navbar.classList.remove('sticky-nav');
      }
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Hero slideshow
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroNext = document.querySelector('.hero-next');
  const heroPrev = document.querySelector('.hero-prev');
  let heroIndex = 0;

  function showHeroSlide(index) {
    if (!heroSlides.length) return;

    heroIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('opacity-100', slideIndex === heroIndex);
      slide.classList.toggle('opacity-0', slideIndex !== heroIndex);
    });
    heroDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('w-8', dotIndex === heroIndex);
      dot.classList.toggle('w-2.5', dotIndex !== heroIndex);
      dot.classList.toggle('bg-[#B89B5E]', dotIndex === heroIndex);
      dot.classList.toggle('bg-white/45', dotIndex !== heroIndex);
    });
  }

  heroNext?.addEventListener('click', () => showHeroSlide(heroIndex + 1));
  heroPrev?.addEventListener('click', () => showHeroSlide(heroIndex - 1));
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => showHeroSlide(index));
  });
  if (heroSlides.length) {
    setInterval(() => showHeroSlide(heroIndex + 1), 6000);
  }

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

  // Scroll reveal animations
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
