import React, { Component } from 'react'
import Head from 'next/head'

import IntlContainer from '../src/containers/IntlContainer'
import About from '../src/components/About'
import Layout from '../src/components/Layout'

class Page extends Component {
  render () {
    return (
      <IntlContainer>
        <Layout>
          <About />
        </Layout>
      </IntlContainer>
    )
  }
}

export default Page
