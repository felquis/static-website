import React from 'react'
import { withRouter } from 'next/router'
import NextLink from 'next/link'

import {
  localizeUrlPath
} from '../../helpers'

const Link = (props) => {
  const href = localizeUrlPath(props.router, props.href)

  return (
    <NextLink href={props.href} as={href}>
      <a href={href}>{props.children}</a>
    </NextLink>
  )

  // return (
  //   // works but not that good
  //   <a {...props} href={href}>{props.children}</a>
  // )
}

export default withRouter(Link)
