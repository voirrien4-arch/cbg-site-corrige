const SOURCE_LOCALE = 'fr';
const SUPPORTED_LOCALES = ['fr', 'en', 'es-419', 'pt-BR', 'ar', 'zh-Hans'];
const catalogs = new Map();
let activeLocale = SOURCE_LOCALE;

const getNested = (catalog, key) => key.split('.').reduce((value, part) => value?.[part], catalog);

const loadCatalog = async (locale) => {
  if (catalogs.has(locale)) return catalogs.get(locale);
  const response = await fetch(`locales/${encodeURIComponent(locale)}.json`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`LOCALE_${response.status}`);
  const catalog = await response.json();
  if (!catalog || typeof catalog !== 'object') throw new Error('LOCALE_INVALID');
  catalogs.set(locale, catalog);
  return catalog;
};

const interpolate = (value, values) => {
  if (!values || typeof value !== 'string') return value;
  return value.replace(/\{(\w+)\}/g, (match, name) => values[name] === undefined ? match : String(values[name]));
};

export const t = (key, values) => {
  const active = getNested(catalogs.get(activeLocale), key);
  const source = getNested(catalogs.get(SOURCE_LOCALE), key);
  const value = active ?? source;
  return interpolate(value === undefined ? key : value, values);
};

export const initializeI18n = async () => {
  try {
    await loadCatalog(SOURCE_LOCALE);
    const platformLocale = window.miniappI18n?.getContext?.()?.resolvedLocale;
    const exact = SUPPORTED_LOCALES.find((locale) => locale === platformLocale);
    const base = typeof platformLocale === 'string' ? platformLocale.split('-')[0].toLowerCase() : '';
    const matched = exact || SUPPORTED_LOCALES.find((locale) => locale.toLowerCase() === base);
    if (matched && matched !== SOURCE_LOCALE) {
      try {
        await loadCatalog(matched);
        activeLocale = matched;
      } catch (error) {
        console.warn('The platform language is not bundled; using French.', error);
      }
    }
  } catch (error) {
    console.warn('CBG translations could not be loaded.', error);
  }
  return activeLocale;
};

export const changeLocale = async (locale) => {
  const catalog = await loadCatalog(locale);
  catalogs.set(locale, catalog);
  activeLocale = locale;
  try {
    if (typeof window.miniappI18n?.setLocale === 'function') {
      const platformChange = Promise.resolve(window.miniappI18n.setLocale(locale));
      await Promise.race([platformChange, new Promise((resolve) => window.setTimeout(resolve, 1200))]);
    }
  } catch (error) {
    console.warn('Platform locale sync unavailable; using the bundled catalog.', error);
  }
  return activeLocale;
};

export const getActiveLocale = () => activeLocale;
