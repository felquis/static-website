import React from 'react'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

import Intl from '../Intl'

const About = ({ intl }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={intl.formatMessage({
          id: 'This is your webpage description for Search Engines'
        })} />
      </Head>

      <Intl id="This is the about page" />
    </div>
  )
}

export default injectIntl(About)
