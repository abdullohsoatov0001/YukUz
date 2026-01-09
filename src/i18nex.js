import i18next from 'i18next'
import ru from '../public/Ru/translation.json'
import uz from '../public/Uz/translation.json'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        ru: {
            translation: ru
        },
        uz: {
            translation: uz
        }
    },
    interpolation: {
        escapeValue: false
    }
})
export default i18next
