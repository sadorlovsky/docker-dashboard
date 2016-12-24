import React from 'react'
import TimeAgo from 'react-timeago'
import { toNumber } from 'lodash'

export default ({ data }) => {
  return (
    <TimeAgo date={toNumber(data)} />
  )
}
