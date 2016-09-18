import React from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <Router>
      <div>
        <Match exactly pattern='/' component={Layout} />
        <Miss component={NoMatch} />
      </div>
    </Router>
  )
}

export default App
