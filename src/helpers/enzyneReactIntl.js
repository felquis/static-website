import React from 'react'

import locales from '../locales'
import { defaultLanguage } from '../config'

/*
  Components using the react-intl module require access to the intl context.
  This is not available when mounting single components in Enzyme.
  These helper functions aim to address that and wrap a valid,
  English-locale intl context around them.
*/
import { IntlProvider, intlShape } from 'react-intl'
import { mount, shallow } from 'enzyme'

// const defaultLanguage = Object.keys(locales)[0]
const messages = locales[defaultLanguage]
const intlProvider = new IntlProvider({ locale: defaultLanguage, messages }, {})
const { intl } = intlProvider.getChildContext()

// When using React-Intl `injectIntl` on components, props.intl is required.
function nodeWithIntlProp(node) {
  return React.cloneElement(node, { intl })
}

function shallowWithIntl(node, { context } = {}) {
  return shallow(
    nodeWithIntlProp(node),
    {
      context: Object.assign({}, context, {intl}),
    }
  )
}

function mountWithIntl(node, { context, childContextTypes } = {}) {
  return mount(
    nodeWithIntlProp(node),
    {
      context: Object.assign({}, context, {intl}),
      childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes)
    }
  )
}

export {
  shallowWithIntl,
  mountWithIntl
}
