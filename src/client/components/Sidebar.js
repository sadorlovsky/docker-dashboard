import React from 'react'
import radium from 'radium'
import { Link } from 'react-router'

const styles = {
  container: {
    background: '#CCC',
    width: '200px'
  },
  element: {
    color: '#fff',
    padding: '10px',
    ':hover': {
      background: 'rgba(0, 0, 0, 0.5)'
    }
  }
}

const Sidebar = () => (
  <div style={styles.container}>
    <div key={'apps'} style={styles.element}>
      <Link to='/apps'>Apps</Link>
    </div>
  </div>
)

export default radium(Sidebar)
