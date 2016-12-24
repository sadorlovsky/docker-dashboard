import React from 'react'
import { shorten } from '../../../helpers'

export default ({ data }) => {
  return (
    <div>{shorten(data)}</div>
  )
}
