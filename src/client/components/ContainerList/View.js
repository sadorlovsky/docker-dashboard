import React from 'react'
import { Button } from 'semantic-ui-react'

const View = () => {
  return (
    <Button.Group fluid>
      <Button icon='block layout' active />
      <Button icon='list layout' />
    </Button.Group>
  )
}

export default View
