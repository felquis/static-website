const withCSS = require('@zeit/next-css')
const locales = ['en', 'pt', 'es']

const decorateWithLocales = (pages) => {
  const paths = Object.keys(pages)

  const result = paths.reduce((obj, path, value) => {
    obj[path] = pages[path]

    locales.forEach((locale) => {
      obj['/' + locale + path] = pages[path]
    })

    return obj
  }, {})

  return result
}

const config = withCSS({
  cssModules: true,
  assetPrefix: '/',
  exportPathMap: () => (decorateWithLocales({
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/blog': { page: '/blog' },
    '/dashboard': { page: '/dashboard' },
  }))
})

module.exports = config
