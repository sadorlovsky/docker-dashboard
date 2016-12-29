import React from 'react'
import { Link } from 'react-router'
import { shorten } from '../../../helpers'

export default ({ data }) => {
  return (
    <div><Link to={`/container/${data}`}>{shorten(data)}</Link></div>
  )
}
