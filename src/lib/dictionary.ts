import { Locale } from './i18n';
import he from '@/data/dictionaries/he.json';
import en from '@/data/dictionaries/en.json';
import es from '@/data/dictionaries/es.json';

const dictionaries = {
  he,
  en,
  es,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.he;
}
