import { initAssistant, refreshAssistant } from './assistant.js';
import { initializeI18n } from './i18n.js';
import { initLanguageSelector } from './language.js';
import { initOfficialLibrary, refreshOfficialLibrary, renderChain, renderCommitments, renderMap, renderMetrics, renderNews, renderOperations, renderProjects, renderResources, renderTimeline, t } from './ui.js';

const applyTranslations = () => {
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder)); });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => { node.setAttribute('aria-label', t(node.dataset.i18nAriaLabel)); });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => { node.setAttribute('alt', t(node.dataset.i18nAlt)); });
};

const initMenu = () => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;
  const close = () => {
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
};

const initAiShortcuts = () => {
  const trigger = document.getElementById('aiOpen');
  if (!trigger) return;
  ['aiOpenTop', 'aiOpenMobile'].forEach((id) => {
    document.getElementById(id)?.addEventListener('click', () => trigger.click());
  });
};

const initScrollChrome = () => {
  const header = document.getElementById('siteHeader');
  const bar = document.getElementById('progressBar');
  const update = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 28);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
};

const initParallax = () => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  const media = document.querySelector('.hero-media');
  if (!media) return;
  let ticking = false;
  const update = () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      media.style.transform = `scale(1.08) translateY(${Math.min(window.scrollY * 0.08, 34)}px)`;
      ticking = false;
    });
    ticking = true;
  };
  window.addEventListener('scroll', update, { passive: true });
};

const initReveal = () => {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('visible')); return; }
  const observer = new IntersectionObserver((entries, current) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      current.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  items.forEach((item) => observer.observe(item));
};

const initCounters = () => {
  const items = document.querySelectorAll('.metric-value');
  if (!items.length || !('IntersectionObserver' in window)) return;
  const format = (value) => new Intl.NumberFormat('fr-FR').format(Math.round(value));
  const observer = new IntersectionObserver((entries, current) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const end = Number(node.dataset.value);
      const display = node.dataset.display;
      if (!Number.isFinite(end)) return;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1050, 1);
        node.textContent = progress < 1 ? format(end * (1 - Math.pow(1 - progress, 3))) : display;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      current.unobserve(node);
    });
  }, { threshold: 0.6 });
  items.forEach((item) => observer.observe(item));
};

const initImageFallbacks = () => {
  document.querySelectorAll('img').forEach((image) => image.addEventListener('error', () => {
    image.classList.add('image-missing');
    image.alt = t('common.imageUnavailable');
  }));
};

const renderDynamicContent = () => {
  renderMetrics(document.getElementById('metricGrid'));
  renderChain(document.getElementById('chainMap'), document.getElementById('chainDetail'));
  renderMap(document.getElementById('schematicMap'));
  renderOperations(document.getElementById('operationGrid'));
  renderTimeline(document.getElementById('timeline'));
  renderProjects(document.getElementById('projectGrid'));
  renderCommitments(document.getElementById('commitmentGrid'));
  renderNews(document.getElementById('newsGrid'));
  renderResources(document.getElementById('resourceList'));
};

const boot = async () => {
  await initializeI18n();
  applyTranslations();
  renderDynamicContent();
  initOfficialLibrary();
  initLanguageSelector(() => {
    applyTranslations();
    renderDynamicContent();
    refreshOfficialLibrary();
    refreshAssistant();
    initReveal();
    initCounters();
    initImageFallbacks();
  });
  initMenu();
  initAiShortcuts();
  initScrollChrome();
  initParallax();
  initReveal();
  initCounters();
  initImageFallbacks();
  initAssistant();
  const year = document.getElementById('currentYear');
  if (year) year.textContent = String(new Date().getFullYear());
};

document.addEventListener('DOMContentLoaded', boot);
