import React from 'react'
// import { browserHistory } from 'react-router'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import { push } from 'react-router-redux'
import { toogleFilter } from '../../actions'

const Filter = ({ filter, onChangeFilter }) => {
  const changeFilterHandler = type => {
    onChangeFilter(type)
  }

  return (
    <Button.Group fluid>
      <Button
        onClick={() => changeFilterHandler('running')}
        active={filter === 'running'}
      >
          Running
        </Button>
      <Button
        onClick={() => changeFilterHandler('stopped')}
        active={filter === 'stopped'}
      >
          Stopped
        </Button>
      <Button
        onClick={() => changeFilterHandler('all')}
        active={filter === 'all'}
      >
          All
        </Button>
    </Button.Group>
  )
}

const enhancer = compose(
  // withRouter,
  connect(
    ({ rootReducer }) => ({ filter: rootReducer.filter }),
    dispatch => ({
      onChangeFilter (type) {
        dispatch(toogleFilter(type))
      }
    })
  )
)

export default enhancer(Filter)
