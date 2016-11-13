import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import { client, store } from './configure'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

render((
  <AppContainer>
    <ApolloProvider store={store} client={client}>
      <App />
    </ApolloProvider>
  </AppContainer>
), document.getElementById('app'))

module.hot.accept('./components/App', () => {
  const NextApp = require('./components/App').default

  render((
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <NextApp />
      </ApolloProvider>
    </AppContainer>
  ), document.getElementById('app'))
})
