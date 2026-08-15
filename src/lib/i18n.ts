export const locales = ['he', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'he';

export const localeNames: Record<Locale, { name: string; nativeName: string; dir: 'rtl' | 'ltr' }> = {
  he: { name: 'Hebrew', nativeName: 'עברית', dir: 'rtl' },
  en: { name: 'English', nativeName: 'English', dir: 'ltr' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
};

export function isRTL(locale: Locale): boolean {
  return locale === 'he';
}
