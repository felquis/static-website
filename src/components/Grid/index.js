import React from 'react'

import style from './style.css'

const Container = ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
)

export {
  Container
}
