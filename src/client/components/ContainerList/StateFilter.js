import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { toggleStateFilter } from '../../actions'

const StateFilter = ({ stateFilter, onChangeFilter }) => {
  return (
    <Button.Group fluid>
      <Button
        onClick={() => onChangeFilter('running')}
        active={stateFilter === 'running'}
      >
          Running
        </Button>
      <Button
        onClick={() => onChangeFilter('stopped')}
        active={stateFilter === 'stopped'}
      >
          Stopped
        </Button>
      <Button
        onClick={() => onChangeFilter('all')}
        active={stateFilter === 'all'}
      >
          All
        </Button>
    </Button.Group>
  )
}

const enhancer = connect(
  ({ rootReducer }) => ({ stateFilter: rootReducer.stateFilter }),
  dispatch => ({
    onChangeFilter (type) {
      dispatch(toggleStateFilter(type))
    }
  })
)

export default enhancer(StateFilter)
