import React from 'react'
import { injectIntl } from 'react-intl'

const Blog = ({ intl }) => (
  <div>
    {intl.formatMessage({ id: 'People love blogging' })}
  </div>
)

export default injectIntl(Blog)
