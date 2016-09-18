import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { Client } from 'subscriptions-transport-ws'
import { ApolloProvider } from 'react-apollo'
import { print } from 'graphql-tag/printer'
import App from './App'

const wsClient = new Client('ws://localhost:8080')

const addGraphQLSubscriptions = (networkInterface, wsClient) => {
  return Object.assign({}, networkInterface, {
    subscribe (request, handler) {
      return wsClient.subscribe({
        query: print(request.query),
        variables: request.variables
      }, handler)
    },
    unsubscribe (id: number) {
      wsClient.unsubscribe(id)
    }
  })
}

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
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
