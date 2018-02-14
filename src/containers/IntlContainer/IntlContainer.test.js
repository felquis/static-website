import React from 'react'
import { mount } from 'enzyme'
import { mountWithIntl } from 'helpers/enzyneReactIntl'
import { injectIntl } from 'react-intl'

import IntlContainer from './index'

const HelloWorld = injectIntl(({ intl }) => (
  <div>
    {intl.formatMessage({ id: 'Hello World!' })}
  </div>
))

it('should mount with en content', () => {
  const component = mountWithIntl(
    <IntlContainer
      locale="en"
      router={{
        asPath: '/en/about'
      }}
    >
      <HelloWorld />
    </IntlContainer>
  )

  expect(component.text()).toEqual('Hello World! :)')
})

it('should mount with es content', () => {
  const component = mountWithIntl(
    <IntlContainer
      locale="es"
      router={{
        asPath: '/es/about'
      }}
    >
      <HelloWorld />
    </IntlContainer>
  )

  expect(component.text()).toEqual('Hola Mundo! :)')
})

it('should mount with pt content', () => {
  const component = mountWithIntl(
    <IntlContainer
      locale="pt"
      router={{
        asPath: '/pt/about'
      }}
    >
      <HelloWorld />
    </IntlContainer>
  )

  expect(component.text()).toEqual('Olá Mundo! :)')
})
