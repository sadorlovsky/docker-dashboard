import React from 'react'
import css from 'react-css-modules'
import styles from './Sidebar.sss'

const Sidebar = () => {
  return (
    <div styleName='sidebar'>
      <div>Containers</div>
      <div>Images</div>
    </div>
  )
}

export default css(Sidebar, styles)
