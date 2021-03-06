import React from 'react'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

const Dashboard = ({ intl }) => {
  const t = intl.formatMessage

  return (
    <div>
      <Head>
        <meta name="description" content={t({
          id: 'This is your dashboard description for Search Engines'
        })} />
      </Head>

      {t({ id: 'This is the Dashboard home page' })}
    </div>
  )
}

export default injectIntl(Dashboard)
