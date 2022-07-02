import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from '../locales/en_US'
import id_ID from '../locales/id_ID'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...en_US
        }
      },
      id: {
        translation: {
          translation: {
            ...id_ID
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })

export default i18n;