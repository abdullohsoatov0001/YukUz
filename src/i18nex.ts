import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

// Синхронный импорт JSON
import ru from './Locales/Ru/translation.json'
import uz from './Locales/Uz/translation.json'

i18next.use(initReactI18next).init({
    fallbackLng: 'uz',
    debug: true,
    resources: {
        ru: { translation: ru },
        uz: { translation: uz }
    },
    interpolation: { escapeValue: false }
})

export default i18next
