const customProperties = require('./src/customProperties.js')

module.exports = {
  plugins: {
    'postcss-custom-properties': {
      preserve: false,
      strict: false,
      variables: customProperties
    },
    'postcss-import': {},
  }
}
