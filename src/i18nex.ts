import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем JSON напрямую (Webpack сам превратит их в объекты)
import ruTranslation from './../public/Ru/translation.json'
import uzTranslation from './../public/Uz/translation.json'


i18next
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: ruTranslation
      },
      uz: {
        translation: uzTranslation
      }
    },
    lng: 'uz', // начальный язык
    fallbackLng: 'uz',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;