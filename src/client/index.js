import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

render((
  <AppContainer>
    <App />
  </AppContainer>
), document.getElementById('app'))

module.hot.accept('./App', () => {
  const NextApp = require('./App').default
  render((
    <AppContainer>
      <NextApp />
    </AppContainer>
  ), document.getElementById('app'))
})
