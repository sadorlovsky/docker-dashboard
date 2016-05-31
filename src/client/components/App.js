import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ContainerList from './ContainerList'
import ContainerDetail from './ContainerDetail'
import Layout from './Layout'

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={ContainerList} />
        <Route path='containers' component={ContainerList} />
        <Route path='container/:containerId' component={ContainerDetail} />
      </Route>
    </Router>
  )
}

export default App
