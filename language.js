import { changeLocale, getActiveLocale } from './i18n.js';
import { t } from './ui.js';

const LANGUAGES = [
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es-419', label: 'Español', dir: 'ltr' },
  { code: 'pt-BR', label: 'Português', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'zh-Hans', label: '简体中文', dir: 'ltr' },
];

const getContextLocale = () => {
  try {
    return window.miniappI18n?.getContext?.()?.resolvedLocale || 'fr';
  } catch {
    return 'fr';
  }
};

export function initLanguageSelector(onChanged) {
  const select = document.getElementById('languageSelect');
  if (!select) return;
  const supported = new Set(LANGUAGES.map(({ code }) => code));
  const current = getActiveLocale() || getContextLocale();
  select.value = supported.has(current) ? current : 'fr';
  let activeCode = select.value;
  document.documentElement.lang = select.value;
  document.documentElement.dir = LANGUAGES.find((item) => item.code === select.value)?.dir || 'ltr';
  select.addEventListener('change', async () => {
    const previous = activeCode;
    const code = select.value;
    const language = LANGUAGES.find((item) => item.code === code) || LANGUAGES[0];
    select.disabled = true;
    try {
      await changeLocale(language.code);
      document.documentElement.lang = language.code;
      document.documentElement.dir = language.dir;
      activeCode = language.code;
      onChanged?.(language.code);
    } catch (error) {
      select.value = previous;
      document.getElementById('toast')?.classList.add('show');
      const toast = document.getElementById('toast');
      if (toast) toast.textContent = t('language.error');
      window.setTimeout(() => toast?.classList.remove('show'), 2600);
    } finally {
      select.disabled = false;
    }
  });
}

export { LANGUAGES };
