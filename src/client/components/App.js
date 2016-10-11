import React from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'
import NoMatch from './NoMatch'
import Container from './Container'
import Containers from './Containers'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100%', flexDirection: 'column' }}>
      <Header />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 2 }}>
            <Match exactly pattern='/' component={Containers} />
            <Match pattern='/apps' component={() => <div>Apps</div>} />
            <Match pattern='/containers/:id' component={Container} />
            <Miss component={NoMatch} />
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
