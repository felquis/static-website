import React from 'react'
import classNames from 'classnames'

import SelectLanguage from 'components/SelectLanguage'
import Link from 'components/Link'
import Intl from 'components/Intl'
import { Container } from '../Grid'

import style from './style.css'

import IconHand from 'static/hand.svg'

const headerClasses = ({ fixed }) => classNames(style.header, {
  [style.fixed]: fixed,
})

const Header = ({
  fixed
}) => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.brand}>
          Static Website <IconHand />
        </div>

        <div className={style.nav}>
          <div>
            <Link href="/about">
              About
            </Link>
            <Link href="/blog">
              Blog
            </Link>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </div>

          <div>
            <SelectLanguage />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
