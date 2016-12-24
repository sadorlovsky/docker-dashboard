import React from 'react'
import { style } from 'glamor'
import { connect } from 'react-redux'

const styles = style({
  position: 'sticky',
  background: 'rgba(0, 0, 0, 0.9)',
  color: 'white',
  padding: '10px',
  bottom: '0',
  height: '50px',
  backdropFilter: 'blur(2px)'
})

const ActionsBar = ({ selectedContainers }) => {
  if (selectedContainers.length > 0) {
    console.log(selectedContainers)
    return (
      <div {...styles} />
    )
  }
  return null
}

const mapStateToProps = ({ rootReducer }) => ({
  selectedContainers: rootReducer.selectedContainers
})

export default connect(mapStateToProps)(ActionsBar)
