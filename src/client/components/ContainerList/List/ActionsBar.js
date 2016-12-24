import React from 'react'
import { Button } from 'semantic-ui-react'
import { style } from 'glamor'
import { connect } from 'react-redux'
import plural from 'plural'

const styles = style({
  position: 'sticky',
  background: 'rgba(0, 0, 0, 0.9)',
  color: 'white',
  padding: '10px',
  bottom: '0',
  height: '50px',
  backdropFilter: 'blur(2px)',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const ActionsBar = ({ selectedContainers }) => {
  if (selectedContainers.length > 0) {
    return (
      <div {...styles}>
        <div>Selected {selectedContainers.length} {plural('container', selectedContainers.length)}</div>
        <Button.Group>
          <Button basic inverted>Stop</Button>
          <Button basic inverted color='yellow'>Restart</Button>
          <Button basic inverted color='red'>Delete</Button>
        </Button.Group>
      </div>
    )
  }
  return null
}

const mapStateToProps = ({ rootReducer }) => ({
  selectedContainers: rootReducer.selectedContainers
})

export default connect(mapStateToProps)(ActionsBar)
