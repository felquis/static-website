import React from 'react'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

import Intl from '../Intl'

const HomePage = ({ intl }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={intl.formatMessage({
          id: 'This is your home page description for Search Engines'
        })} />

        <title>{intl.formatMessage({
          id: 'Home Page'
        })}</title>
      </Head>

      <Intl id="This is the HomePage" />
    </div>
  )
}

export default injectIntl(HomePage)
