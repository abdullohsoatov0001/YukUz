import i18next from 'i18next'
const ru = await fetch('/Ru/translation.json').then(res => res.json());
const uz = await fetch('/Uz/translation.json').then(res => res.json());

import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
    fallbackLng: 'uz',
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
