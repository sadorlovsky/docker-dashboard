import React from 'react'
import { style } from 'glamor'
import { shorten } from '../../../helpers'

const styles = style({
  padding: '10px',
  background: 'white',
  margin: '10px',
  display: 'flex',
  justifyContent: 'space-between'
})

const Container = props => {
  return (
    <div {...styles}>
      <div>{shorten(props.id)}</div>
      <div>{props.running.toString()}</div>
      <div>{props.name}</div>
      <div>{props.image.name}</div>
    </div>
  )
}

export default Container
