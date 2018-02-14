import React from 'react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { injectIntl } from 'react-intl'
import propTypes from 'prop-types'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'

import IntlContainer from '../src/containers/IntlContainer'
import HelloWorld from '../src/components/HelloWorld'

const containerStories = storiesOf('containers', module)

containerStories.addDecorator(withKnobs)

containerStories.add('IntlContainer', (props) => {
  const localeProp = select('Locales', {
    en: 'English',
    pt: 'Português',
    es: 'Español',
  }, 'en');

  return (
    <IntlContainer
      locale={localeProp}
      router={{
        asPath: `/${localeProp}/about`
      }}
    >
      <HelloWorld />
    </IntlContainer>
  )}
)
