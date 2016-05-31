import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ContainerList from './ContainerList'
import Container from './Container'

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={props => <div>{props.children}</div>}>
        <IndexRoute component={ContainerList} />
        <Route path='containers' component={ContainerList} />
        <Route path='container/:containerId' component={Container} />
      </Route>
    </Router>
  )
}

export default App
