import intlEn from 'react-intl/locale-data/en'
import intlPt from 'react-intl/locale-data/pt'
import intlEs from 'react-intl/locale-data/es'

import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'

import { addLocaleData } from 'react-intl'

const locales = {
  en: {
    messages: { ...en },
    locale: 'en',
    data: intlEn,
  },
  pt: {
    messages: { ...pt },
    locale: 'pt',
    data: intlPt,
  },
  es: {
    messages: { ...es },
    locale: 'es',
    data: intlEs,
  },
}

addLocaleData(locales.en.data)
addLocaleData(locales.es.data)
addLocaleData(locales.pt.data)

export default locales
