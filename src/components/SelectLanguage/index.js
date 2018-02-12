import React from 'react'
import { withRouter } from 'next/router'

import style from './style.css'

import { changeLocale } from '../../containers/IntlContainer'

const SelectLanguage = ({
  router
}) => (
  <div className={style.container}>
    <button onClick={() => changeLocale(router, 'en')} className={style.button}>
      <span>
        EN
      </span>
    </button>
  	<button onClick={() => changeLocale(router, 'es')} className={style.button}>
      <span>
        es
      </span>
    </button>
  	<button onClick={() => changeLocale(router, 'pt')} className={style.button}>
      <span>
        pt
      </span>
    </button>
  </div>
)

export default withRouter(SelectLanguage)
