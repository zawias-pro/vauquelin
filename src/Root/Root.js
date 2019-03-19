import React from 'react'

import { App } from './components/App'
import { i18nInit } from '../translations/i18nInit'

class Root extends React.Component {
  constructor(props) {
    super(props)

    i18nInit()
  }

  render() {
    return (
      <App />
    )
  }
}

export { Root }
