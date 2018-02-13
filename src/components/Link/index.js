import React from 'react'
import { withRouter } from 'next/router'
import NextLink from 'next/link'

import {
  localizeUrlPath
} from '../../helpers'

const Link = (props) => {
  const href = localizeUrlPath(props.router, props.href)

  // uncomment this line to reproduce the problem
  // return <NextLink {...props} href={href}>{props.children}</NextLink>

  return (
    // works but not that good
    <a {...props} href={href}>{props.children}</a>
  )
}

export default withRouter(Link)
