import React from 'react'
import css from 'react-css-modules'
import { Link } from 'react-router'
import { shortenId } from '../../../helpers'
import styles from './Container.sss'

const Container = ({ container }) => {
  return (
    <div styleName='container'>
      <div styleName='header'>
        <div styleName={container.running ? 'on' : 'off'}></div>
        <div styleName='name'>
          <Link to={`/container/${container.id}`}>
            {container.name}
          </Link>
        </div>
      </div>
      <div styleName='divider'></div>
      <div styleName='id'>
        <Link to={`/container/${container.id}`}>
          {shortenId(container.id, 22)}
        </Link>
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