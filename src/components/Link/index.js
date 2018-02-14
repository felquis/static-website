import React from 'react'
import { withRouter } from 'next/router'
import NextLink from 'next/link'

import {
  getLocalizedFromRouterAsPath
} from 'helpers'

const Link = (props) => {
  const href = getLocalizedFromRouterAsPath(props.router, props.href)

  return (
    <NextLink href={props.href} as={href}>
      <a href={href}>{props.children}</a>
    </NextLink>
  )
}

export default withRouter(Link)
