import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { toggleView } from '../../actions'

const View = ({ view, onChangeView }) => {
  return (
    <Button.Group fluid>
      <Button
        icon='block layout'
        onClick={() => onChangeView('grid')}
        active={view === 'grid'}
      />
      <Button
        icon='list layout'
        onClick={() => onChangeView('list')}
        active={view === 'list'}
      />
    </Button.Group>
  )
}

export default connect(
  ({ rootReducer }) => ({ view: rootReducer.view }),
  dispatch => ({
    onChangeView (type) {
      dispatch(toggleView(type))
    }
  })
)(View)
