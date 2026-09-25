document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();
  document.querySelectorAll('[data-mailto-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (!form.reportValidity()) return;
      const subject = form.dataset.subject || 'PUL Global Partners inquiry';
      const lines = [...new FormData(form)].map(([name, value]) => {
        const field = form.elements.namedItem(name);
        const label = field?.labels?.[0]?.childNodes?.[0]?.textContent?.trim() || name;
        return `${label}: ${value}`;
      });
      const mailto = `mailto:info@pulglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      if (status) status.textContent = 'Opening an email draft. If your email app does not open, write to info@pulglobal.com.';
      window.location.href = mailto;
    });
  });
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const localToday = new Date();
    localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
    dateInput.min = localToday.toISOString().slice(0, 10);
  }
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
    const duration = 4200;
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
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.setAttribute('title', 'Open navigation');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    toggle.setAttribute('title', open ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 1100) close(); });
});
