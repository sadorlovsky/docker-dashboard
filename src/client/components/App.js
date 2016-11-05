import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import Layout from './Layout'
import ContainerDetail from './ContainerDetail'
import ContainerList from './ContainerList'

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRedirect to='/containers' />
        <Route path='containers' component={ContainerList} />
        <Route path='container/:id' component={ContainerDetail} />
      </Route>
    </Router>
  )
}

export default App
