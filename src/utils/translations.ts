// Translation system for shared components
import { translations as i18nTranslations, type Language as I18nLanguage, t as i18nT } from './i18n';

export type Language = I18nLanguage;
export const translations = i18nTranslations;

export function t(key: string, lang: Language = 'en'): string {
  return i18nT(key as any, lang);
}

export function getPostUrl(slug: string, lang: Language = 'en'): string {
  const cleanSlug = slug.replace(/^(it|en)\//, '');
  return `/posts/${cleanSlug}/`;
}

export function getLocaleString(lang: Language = 'en'): string {
  return lang === 'it' ? 'it-IT' : 'en-US';
}
