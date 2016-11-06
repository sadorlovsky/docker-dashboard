import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { browserHistory } from 'react-router'
import rootReducer from './reducers'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
})

export const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  combineReducers({
    rootReducer,
    apollo: client.reducer(),
    routing: routerReducer
  }),
  {},
  composeEnhancers(
    applyMiddleware(
      client.middleware(),
      routerMiddleware(browserHistory)
    )
  )
)

export const history = syncHistoryWithStore(browserHistory, store)
