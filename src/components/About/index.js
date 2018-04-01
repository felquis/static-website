import React from 'react'
import { injectIntl } from 'react-intl'
import Head from 'next/head'

const About = ({ intl }) => {
  const t = intl.formatMessage

  return (
    <div>
      <Head>
        <meta name="description" content={t({
          id: 'This is your webpage description for Search Engines'
        })} />
      </Head>

      {t({ id: 'This is the about page' })}
    </div>
  )
}

export default injectIntl(About)
