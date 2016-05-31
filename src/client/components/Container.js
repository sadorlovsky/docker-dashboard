import React from 'react'
import css from 'react-css-modules'
import styles from './Container.sss'

const Container = ({ container }) => {
  return (
    <div styleName='container'>
      <div styleName='header'>
        <div styleName={container.running ? 'on' : 'off'}></div>
        <div styleName='name'>{container.name}</div>
      </div>
      <div styleName='divider'></div>
      <div styleName='id'>{container.id.substring(0, 12)}</div>
      <div styleName='divider'></div>
      <div styleName='image'>
        {container.image}
      </div>
      <div styleName='divider'></div>
      <div styleName='command'>
        <code>{container.command}</code>
      </div>
    </div>
  )
}

export default css(Container, styles)
