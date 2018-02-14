import React from 'react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { injectIntl } from 'react-intl'
import propTypes from 'prop-types'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'

import IntlContainer from '../src/containers/IntlContainer'
import About from '../src/components/About'
import HomePage from '../src/components/HomePage'
import Blog from '../src/components/Blog'
import Dashboard from '../src/components/Dashboard'

const pagesStories = storiesOf('pages', module)

pagesStories.addDecorator(withKnobs)  

pagesStories.add('About', () => {
  const locale = select('Locales', {
    en: 'English',
    pt: 'Português',
    es: 'Español'
  }, 'es')

  return (
    <IntlContainer
      locale={locale}
      router={{
        asPath: `/${locale}/about`
      }}
    >
      <About />
    </IntlContainer>
  )
})

pagesStories.add('HomePage', () => {
  const locale = select('Locales', {
    en: 'English',
    pt: 'Português',
    es: 'Español'
  }, 'pt')

  return (
    <IntlContainer
      locale={locale}
      router={{
        asPath: `/${locale}`
      }}
    >
      <HomePage />
    </IntlContainer>
  )
})

pagesStories.add('Blog', () => {
  const locale = select('Locales', {
    en: 'English',
    pt: 'Português',
    es: 'Español'
  }, 'pt')

  return (
    <IntlContainer
      locale={locale}
      router={{
        asPath: `/${locale}`
      }}
    >
      <Blog />
    </IntlContainer>
  )
})


pagesStories.add('Dashboard', () => {
  const locale = select('Locales', {
    en: 'English',
    pt: 'Português',
    es: 'Español'
  }, 'en')

  return (
    <IntlContainer
      locale={locale}
      router={{
        asPath: `/${locale}`
      }}
    >
      <Dashboard />
    </IntlContainer>
  )
})
