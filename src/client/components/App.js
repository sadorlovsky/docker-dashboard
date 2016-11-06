import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import { history } from '../configure'
import Layout from './Layout'
import ContainerDetail from './ContainerDetail'
import ContainerList from './ContainerList'

const App = () => {
  return (
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRedirect to='/containers' />
        <Route path='containers' component={ContainerList} />
        <Route path='containers/:state' component={ContainerList} />
        <Route path='container/:id' component={ContainerDetail} />
      </Route>
    </Router>
  )
}

export default App
