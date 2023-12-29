import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';
export const defaultNS = 'ns1';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .use(intervalPlural)
  .init({
    debug: true,
    defaultNS,
  });

export default i18next;
