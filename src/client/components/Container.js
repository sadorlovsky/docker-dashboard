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
      <div styleName='id'>
        <a href='#'>
          {container.id.substring(0, 22)}
        </a>
      </div>
      <div styleName='divider'></div>
      <div styleName='image'>
        <div styleName='image-name'>
          {container.image}
        </div>
        <div styleName='image-id'>
          <a href='#'>
            {container.imageId.substring(0, 18)}
          </a>
        </div>
      </div>
      <div styleName='divider'></div>
      <div styleName='command'>
        <code>{container.command}</code>
      </div>
    </div>
  )
}

export default css(Container, styles)
