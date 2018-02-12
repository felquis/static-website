import React from 'react'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

const Dashboard = ({ intl }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={intl.formatMessage({
          id: 'This is your dashboard description for Search Engines'
        })} />
      </Head>

      { intl.formatMessage({ id: 'This is the Dashboard home page' }) }
    </div>
  )
}

export default injectIntl(Dashboard)
