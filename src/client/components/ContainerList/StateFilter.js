import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { toggleStateFilter } from '../../actions'

const StateFilter = ({ stateFilter, onChangeFilter, textFilter }) => {
  return (
    <Button.Group fluid>
      <Button
        onClick={() => onChangeFilter('running')}
        active={stateFilter === 'running'}
        disabled={textFilter !== ''}
      >
          Running
        </Button>
      <Button
        onClick={() => onChangeFilter('stopped')}
        active={stateFilter === 'stopped'}
        disabled={textFilter !== ''}
      >
          Stopped
        </Button>
      <Button
        onClick={() => onChangeFilter('all')}
        active={stateFilter === 'all'}
        disabled={textFilter !== ''}
      >
          All
        </Button>
    </Button.Group>
  )
}

const enhancer = connect(
  ({ rootReducer }) => ({
    stateFilter: rootReducer.stateFilter,
    textFilter: rootReducer.textFilter
  }),
  dispatch => ({
    onChangeFilter (type) {
      dispatch(toggleStateFilter(type))
    }
  })
)

export default enhancer(StateFilter)
