import locales from '../locales'
import {
  defaultLanguage
} from '../config'

const getLocalizedPath = (router, lang) => {
  const splitPath = router.pathname.split('/')
  const localizedSlice = !!locales[splitPath[1]] ? 2 : 1
  const newLanguage = !!locales[lang] ? lang : ''

  return ['', newLanguage, ...splitPath.slice(localizedSlice)].join('/')
}

const getLocalizedFromRouterAsPath = (router, href) => {
  const splitPath = href.split('/')
  const localizedSlice = !!locales[splitPath[1]] ? 2 : 1
  const asPathLocale = router.asPath.split('/')[1]
  const lang = locales[asPathLocale] ? asPathLocale : ''

  if (!!lang) {
    const linkTo = ['', lang, ...splitPath.slice(localizedSlice)].join('/')

    return linkTo
  } else {
    return splitPath.join('/')
  }
}

export {
  getLocalizedPath,
  getLocalizedFromRouterAsPath
}
