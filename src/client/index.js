import React from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface('/graphql', {
    credentials: 'same-origin'
  })
})

render((
  <AppContainer>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContainer>
), document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render((
      <AppContainer>
        <ApolloProvider client={client}>
          <NextApp />
        </ApolloProvider>
      </AppContainer>
    ), document.getElementById('root'))
  })
}
