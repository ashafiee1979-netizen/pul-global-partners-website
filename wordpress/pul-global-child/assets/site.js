document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();
  document.querySelectorAll('[data-prototype-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) status.textContent = 'Thank you. Our team will review your request and respond within two business days.';
      form.reset();
    });
  });
  const counters = document.querySelectorAll('[data-counter]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animateCounter = counter => {
    const start = Number(counter.dataset.start);
    const end = Number(counter.dataset.end);
    const suffix = counter.dataset.suffix || '';
    if (reducedMotion) {
      counter.textContent = `${end.toLocaleString()}${suffix}`;
      return;
    }
    const duration = 1900;
    const started = performance.now();
    const frame = now => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(start + (end - start) * eased).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    }), { threshold: .45 });
    counters.forEach(counter => observer.observe(counter));
  } else counters.forEach(animateCounter);
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); document.body.classList.remove('menu-open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  window.addEventListener('resize', () => { if (window.innerWidth > 760) close(); });
});
