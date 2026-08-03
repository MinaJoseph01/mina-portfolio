/* ==========================================================================
   MINA JOSEPH PORTFOLIO — main script
   Vanilla JS: nav toggle, scroll-spy, animated counters, reveal-on-scroll,
   case study tabs, scroll-to-top.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- mobile nav toggle ---------------- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.classList.toggle('is-open', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- scroll-spy active nav link ---------------- */
  const navAnchors = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navAnchors)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`[data-nav][href="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => spyObserver.observe(s));

  /* ---------------- animated stat counters ---------------- */
  const statEls = document.querySelectorAll('.stat__value[data-count]');

  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const statsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  statEls.forEach(el => statsObserver.observe(el));

  /* ---------------- reveal-on-scroll ---------------- */
  const revealTargets = document.querySelectorAll(
    '.pillar, .tl-item, .stack-card, .project-card, .cert-card, .education-card'
  );
  revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------------- case study tabs ---------------- */
  const caseTabs = document.querySelectorAll('.case-tab');
  const casePanels = document.querySelectorAll('[data-case-panel]');

  caseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.case;

      caseTabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      casePanels.forEach(panel => {
        panel.hidden = panel.dataset.casePanel !== target;
      });
    });
  });

  /* ---------------- nav shadow + scroll-to-top button ---------------- */
  const nav = document.getElementById('nav');
  const scrollTopBtn = document.getElementById('scrollTop');

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.style.boxShadow = y > 8 ? '0 1px 0 rgba(11,33,62,0.08)' : 'none';
    if (scrollTopBtn) scrollTopBtn.classList.toggle('is-visible', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
