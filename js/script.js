/* ======================= Typed headline ======================= */
const typed = new Typed('.typing', {
  strings: ['Systems Architect', 'Innovation Catalyst', 'Experience Engineer'],
  typeSpeed: 70,
  backSpeed: 45,
  backDelay: 2000,
  loop: true,
});

/* ======================= Mobile navigation ======================= */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  menuToggle.addEventListener('click', toggleMenu);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ======================= Auto year ======================= */
const yearTarget = document.getElementById('currentYear');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

/* ======================= Scroll hint subtle animation ======================= */
const scroller = document.querySelector('.service-scroller');
if (scroller) {
  let hasAnimated = false;

  const animateScroll = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    scroller.scrollTo({ left: Math.min(180, scroller.scrollWidth), behavior: 'smooth' });

    setTimeout(() => {
      scroller.scrollTo({ left: 0, behavior: 'smooth' });
    }, 800);
  };

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateScroll();
          observerInstance.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(scroller);
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
