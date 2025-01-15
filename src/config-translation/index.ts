import i18next from 'i18next'
import TranslationEN from '../locales/en/en.json'
import TranslationVI from '../locales/vi/vi.json'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {translation : TranslationEN},
    vi: {translation : TranslationVI}
}

i18next.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources
})
