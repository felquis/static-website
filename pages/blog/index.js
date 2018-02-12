import React, { Component } from 'react'

import IntlContainer from '../../src/containers/IntlContainer'
import Layout from '../../src/components/Layout'
import Blog from '../../src/components/Blog'

class Page extends Component {
  render () {
    return (
      <IntlContainer>
        <Layout>
          <Blog />
        </Layout>
      </IntlContainer>
    )
  }
}

export default Page
