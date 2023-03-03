import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

import translationUK from './uk.json'
import translationEN from './en.json'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie']
    },
    resources: {
      en: {
        translation: translationEN 
      },
      uk: {
        translation: translationUK
      }
    },
    interpolation: {
      escapeValue: false
    }
  });
 
export default i18n