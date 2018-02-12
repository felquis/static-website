import React, { Component } from 'react'
import dynamic from 'next/dynamic'

import IntlContainer from '../../src/containers/IntlContainer'
import Layout from '../../src/components/Layout'
import Dashboard from '../../src/components/Dashboard'

class Page extends Component {
  render () {
    return (
      <IntlContainer>
        <Layout>
          <Dashboard />
        </Layout>
      </IntlContainer>
    )
  }
}

export default Page
