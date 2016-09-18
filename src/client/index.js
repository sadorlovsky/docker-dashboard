import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './App'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
})

const client = new ApolloClient({
  networkInterface
})

render((
  <AppContainer>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContainer>
), document.getElementById('app'))

module.hot.accept('./App', () => {
  const NextApp = require('./App').default

  render((
    <AppContainer>
      <ApolloProvider client={client}>
        <NextApp />
      </ApolloProvider>
    </AppContainer>
  ), document.getElementById('app'))
})
