import React from 'react'
import css from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Header.sss'

const Header = () => {
  return (
    <div styleName='header'>
      <Link to='/'>
        <img styleName='logo' src='/images/docker-white.svg' />
      </Link>
      <div styleName='title'>Docker Dashboard</div>
      <div>
        <input
          type='text'
          styleName='search'
          placeholder='Search'
        />
      </div>
    </div>
  )
}

export default css(Header, styles)
