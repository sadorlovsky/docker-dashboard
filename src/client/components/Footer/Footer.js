import React from 'react'
import css from 'react-css-modules'
import styles from './Footer.sss'

const Footer = () => {
  return (
    <div styleName='footer'>
      <div>Docker Dashboard © 2016</div>
    </div>
  )
}

export default css(Footer, styles)
