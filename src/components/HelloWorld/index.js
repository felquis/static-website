import React from 'react'

import { Container } from '../Grid'
import { injectIntl } from 'react-intl'

import style from './style.css'

const HelloWorld = ({intl}) => (
  <div className={style.root}>
    <Container>
      {intl.formatMessage({id: 'Hello World!'})}
    </Container>
  </div>
)

export default injectIntl(HelloWorld)
