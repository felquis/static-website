import React from 'react'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

const HomePage = ({ intl }) => {
  const t = intl.formatMessage

  return (
    <div>
      <Head>
        <meta name="description" content={t({
          id: 'This is your home page description for Search Engines'
        })} />

        <title>{t({
          id: 'Home Page'
        })}</title>
      </Head>

      {t({id: 'This is the HomePage'})}
    </div>
  )
}

export default injectIntl(HomePage)
