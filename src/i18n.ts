import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import translationEN from '@assets/locales/en/translation.json'
import translationRU from '@assets/locales/ru/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
}

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en'
  })
i18n.services.formatter?.add('Date_Hour', (value, lng, _option): string => {
  return value.toLocaleString(lng, { hour: 'numeric', minute: 'numeric' })
})
i18n.services.formatter?.add('Date_DayWeek', (value, lng, _option): string => {
  return value.toLocaleString(lng, { weekday: 'long' })
})
i18n.services.formatter?.add('Date_DayNumber', (value, lng, _option): string => {
  return value.toLocaleString(lng, { day: 'numeric' })
})
i18n.services.formatter?.add('Date_Rest', (value, lng, _option): string => {
  return value.toLocaleString(lng, {
    year: 'numeric',
    month: 'long'
  })
})

export default i18n
