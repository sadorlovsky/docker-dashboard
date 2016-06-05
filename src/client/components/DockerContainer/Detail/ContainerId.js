import React from 'react'
import { shortenId } from '../../../helpers'

const ContainerId = ({ id, showFullId }) => {
  return (
    <div>Container ID: {showFullId ? id : shortenId(id)}</div>
  )
}

export default ContainerId
