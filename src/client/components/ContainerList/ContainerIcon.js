import React from 'react'
import { image } from 'faker'

const resolve = name => {
  return require(`svg-url?noquotes!../icons/${name}.svg`)
}

const ContainerIcon = ({ name }) => (
  <img src={image.image()} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
)

export default ContainerIcon
