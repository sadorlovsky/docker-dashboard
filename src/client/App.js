import React from 'react'
import { BrowserRouter as Router, Match, Miss, Link } from 'react-router'

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/containers">lbalbdf</Link>
  </div>
)

const ContainerList = () => (
  <div>
    <h1>Containers</h1>
  </div>
)

const ImageList = () => (
  <div>
    <h1>Images</h1>
  </div>
)

const NoMatch = () => (
  <div>
    <h1>404 Not Found</h1>
  </div>
)

const App = () => {
  return (
    <Router>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/containers" component={ContainerList} />
        <Match pattern="/images" component={ImageList} />

        <Miss component={NoMatch} />
      </div>
    </Router>
  )
}

export default App
