import React from 'react'

const resolve = name => {
  // return require(`svg-url?noquotes!../icons/${name}.svg`)
  return require('svg-url?noquotes!../icons/alpine-linux.svg')
}

const ContainerIcon = ({ name }) => (
  <img src={resolve(name)} width='50' height='50' />
)

export default ContainerIcon
