import React from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'

import Containers from './Containers'

const App = () => {
  return (
    <Router>
      <div>
        <Match exactly pattern='/' component={Containers} />
        <Miss component={() => <div>404</div>} />
      </div>
    </Router>
  )
}

export default App
