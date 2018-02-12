import React from 'react'

import Header from '../Header'
import { Container } from '../Grid'
import style from './style.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Layout
