import React from 'react'
import { style } from 'glamor'
import { Link } from 'react-router'
import colors from '../colors'

const containerStyles = style({
  background: colors.primary,
  minWidth: '200px'
})

const linkStyles = style({
  padding: '10px',
  color: '#fff',
  ':hover': {
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  display: 'inline-block',
  width: '100%',
  height: '100%'
})

const Sidebar = () => (
  <div {...containerStyles}>
    <div>
      <Link to='/apps' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>Apps</Link>
    </div>
    <div>
      <Link to='/containers' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>Containers</Link>
    </div>
    <div>
      <Link to='/images' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>Images</Link>
    </div>
    <div>
      <Link to='/volumes' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>Volumes</Link>
    </div>
  </div>
)

export default Sidebar
