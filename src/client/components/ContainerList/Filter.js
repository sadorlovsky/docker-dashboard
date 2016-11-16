import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { toggleStateFilter } from '../../actions'

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Button.Group fluid>
      <Button
        onClick={() => onChangeFilter('running')}
        active={filter === 'running'}
      >
          Running
        </Button>
      <Button
        onClick={() => onChangeFilter('stopped')}
        active={filter === 'stopped'}
      >
          Stopped
        </Button>
      <Button
        onClick={() => onChangeFilter('all')}
        active={filter === 'all'}
      >
          All
        </Button>
    </Button.Group>
  )
}

const enhancer = connect(
  ({ rootReducer }) => ({ filter: rootReducer.stateFilter }),
  dispatch => ({
    onChangeFilter (type) {
      dispatch(toggleStateFilter(type))
    }
  })
)

export default enhancer(Filter)
