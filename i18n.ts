import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './app/language/en.json';
import ua from './app/language/ua.json';
import de from './app/language/de.json';
import pl from './app/language/pl.json';
import ru from './app/language/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
      de: { translation: de },
      pl: { translation: pl },
      ru: { translation: ru },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
