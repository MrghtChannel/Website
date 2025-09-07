import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '@/language/en.json'
import ua from '@/language/ua.json'
import de from '@/language/de.json'
import pl from '@/language/pl.json'
import ru from '@/language/ru.json'

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
      de: { translation: de },
      pl: { translation: pl },
      ru: { translation: ru },
    },
    fallbackLng: 'en', 
    detection: {
      order: ['path', 'localStorage', 'navigator'], 
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

export default i18n
