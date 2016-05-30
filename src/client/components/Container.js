import React from 'react'
import css from 'react-css-modules'
import styles from './Container.sss'

const Container = ({ container }) => {
  return (
    <div styleName='container'>
      <div styleName='on'></div>
      <div styleName='name'>{container.name}</div>
      {/*<div>id: {container.id.substring(0, 12)}</div>
      <div>name: {container.name}</div>
      <div>
        image: {container.image}
      </div>*/}
    </div>
  )
}

export default css(Container, styles)
