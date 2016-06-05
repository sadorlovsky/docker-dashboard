import React from 'react'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App/App'
import rootReducer from './reducers'

const client = new ApolloClient()
const store = createStore(
  combineReducers({
    rootReducer,
    apollo: client.reducer()
  }),
  compose(
    applyMiddleware(client.middleware()),
    persistState('rootReducer'),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render((
  <AppContainer>
    <ApolloProvider store={store} client={client}>
      <App />
    </ApolloProvider>
  </AppContainer>
), document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    /* eslint-disable global-require */
    const NextApp = require('./components/App/App').default
    /* eslint-enable global-require */

    render((
      <AppContainer>
        <ApolloProvider store={store} client={client}>
          <NextApp />
        </ApolloProvider>
      </AppContainer>
    ), document.getElementById('root'))
  })
}
