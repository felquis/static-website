import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import { withRouter } from 'next/router'

import locales from '../../locales'
import { defaultLanguage } from '../../config'
import {
  getLocalizedPath
} from 'helpers'

class IntlContainer extends Component {
  constructor(props) {
    super(props)

    const pathTokens = props.router.asPath.split('/')

    const locale = !!locales[pathTokens[1]] ? pathTokens[1] : props.locale

    this.state = {
      locale,
    }
  }

  handle (lang) {
    Router.push({
      pathname: '/' + lang
    })

    this.setState({
      locale: lang
    })
  }

  render () {
    const locale = this.state.locale
    const children = this.props.children

    return (
      <IntlProvider
        locale={locale}
        messages={locales[locale].messages}
      >
        <div>
          {children}
        </div>
      </IntlProvider>
    )
  }
}

IntlContainer.defaultProps = {
  locale: defaultLanguage,
}

const changeLocale = (router, lang) => {
  location.href = getLocalizedPath(router, lang)
}

export default withRouter(IntlContainer)
export {
  changeLocale
}
