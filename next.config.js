const withCSS = require('@zeit/next-css')

const config = withCSS({
  cssModules: true,
  assetPrefix: '',
  exportPathMap: () => ({
    '/': { page: '/' }
  })
})


module.exports = config
