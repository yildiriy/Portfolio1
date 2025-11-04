document.body.classList.add('js-enabled');

/* ======================= Typed headline ======================= */
const typedTarget = document.querySelector('.typing');
if (typedTarget) {
  new Typed('.typing', {
    strings: ['Architecte systèmes', "Leader IVVQ", "Créateur d'expériences"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
  });
}

/* ======================= Mobile navigation ======================= */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('scroll-hidden', isOpen);
  };

  menuToggle.addEventListener('click', toggleMenu);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('scroll-hidden');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('scroll-hidden');
    }
  });
}

/* ======================= Auto year ======================= */
const yearTarget = document.getElementById('currentYear');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

/* ======================= Reveal on scroll ======================= */
const revealElements = document.querySelectorAll('.reveal-on-scroll');
if (revealElements.length) {
  const revealImmediately = (element) => element.classList.add('is-visible');

  const checkVisibility = () => {
    let hasHidden = false;
    revealElements.forEach((element) => {
      if (element.classList.contains('is-visible')) return;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top <= viewportHeight * 0.9 && rect.bottom >= viewportHeight * 0.1;
      if (inView) {
        revealImmediately(element);
      } else {
        hasHidden = true;
      }
    });

    if (!hasHidden) {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    }
  };

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealImmediately(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    window.addEventListener('load', checkVisibility, { once: true });
  } else {
    revealElements.forEach(revealImmediately);
  }

  window.addEventListener('scroll', checkVisibility, { passive: true });
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
}

/* ======================= Parallax layers ======================= */
const parallaxLayers = document.querySelectorAll('[data-parallax-depth]');
const calculateBaseTranslate = (depth) => window.scrollY * depth * -0.35;

if (parallaxLayers.length) {
  const handleParallax = () => {
    const scrollY = window.scrollY;
    parallaxLayers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.parallaxDepth) || 0;
      const translateY = scrollY * depth * -0.35;
      layer.dataset.baseTranslate = translateY;
      layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
  };

  handleParallax();
  window.addEventListener('scroll', handleParallax, { passive: true });

  const hero = document.querySelector('.hero');
  if (hero && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      parallaxLayers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.parallaxDepth) || 0;
        const baseTranslate = parseFloat(layer.dataset.baseTranslate) || calculateBaseTranslate(depth);
        const translateX = (offsetX / rect.width) * depth * -60;
        const translateY = baseTranslate + (offsetY / rect.height) * depth * -60;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    });

    hero.addEventListener('pointerleave', handleParallax);
  }
}

/* ======================= Tilt cards ======================= */
const tiltCards = document.querySelectorAll('.tilt-card');
if (tiltCards.length && window.matchMedia('(pointer: fine)').matches) {
  const tiltStrength = 10;
  const handleEnter = (event) => {
    event.currentTarget.classList.add('is-tilting');
  };

  const handleMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * tiltStrength;
    const rotateX = ((y / rect.height) - 0.5) * -tiltStrength;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = (event) => {
    const card = event.currentTarget;
    card.classList.remove('is-tilting');
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  tiltCards.forEach((card) => {
    card.addEventListener('pointerenter', handleEnter);
    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', handleLeave);
  });
}

/* ======================= Keyboard focus ring helper ======================= */
const handleFirstTab = (event) => {
  if (event.key !== 'Tab') return;
  document.body.classList.add('user-is-tabbing');
  window.removeEventListener('keydown', handleFirstTab);
  window.addEventListener('mousedown', handleMouseDownOnce);
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);
