import React from 'react'

import { Container } from '../Grid'
import Intl from '../Intl'

import style from './style.css'

const HelloWorld = () => (
  <div className={style.root}>
    <Container>
      <Intl id="Hello World!" />
    </Container>
  </div>
)

export default HelloWorld
