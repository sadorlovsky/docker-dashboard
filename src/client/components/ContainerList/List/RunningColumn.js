import React from 'react'
import { Label, Popup } from 'semantic-ui-react'
import { style } from 'glamor'

export const styles = style({
  width: '50px'
})

export const RunningColumn = ({ running, state }) => {
  return (
    <Popup
      trigger={running ? <Label circular empty color='green' /> : <Label circular empty color='grey' />}
      content={running ? 'Container is running' : `Container is ${state}`}
      inverted
    />
  )
}
