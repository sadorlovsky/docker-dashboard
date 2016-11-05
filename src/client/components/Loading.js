import React from 'react'
import Spinner from 'halogen/PulseLoader'
import { style } from 'glamor'
import colors from '../colors'

const styles = style({
  display: 'flex',
  justifyContent: 'center'
})

const Loading = () => (
  <div {...styles}>
    <Spinner color={colors.other} size='16px' margin='4px' />
  </div>
)

export default Loading
