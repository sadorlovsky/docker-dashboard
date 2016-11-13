import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withApollo } from 'react-apollo'
import getContainers from '../../queries/getContainers'
import { toggleFilter } from '../../actions'

const Filter = ({ filter, onChangeFilter, client }) => {
  const hoverHandle = type => {
    client.query({
      query: getContainers,
      variables: {
        filterType: type
      }
    })
  }

  return (
    <Button.Group fluid>
      <Button
        onMouseOver={() => hoverHandle('running')}
        onClick={() => onChangeFilter('running')}
        active={filter === 'running'}
      >
          Running
        </Button>
      <Button
        onMouseOver={() => hoverHandle('stopped')}
        onClick={() => onChangeFilter('stopped')}
        active={filter === 'stopped'}
      >
          Stopped
        </Button>
      <Button
        onMouseOver={() => hoverHandle('all')}
        onClick={() => onChangeFilter('all')}
        active={filter === 'all'}
      >
          All
        </Button>
    </Button.Group>
  )
}

const enhancer = compose(
  withApollo,
  connect(
    ({ rootReducer }) => ({ filter: rootReducer.filter }),
    dispatch => ({
      onChangeFilter (type) {
        dispatch(toggleFilter(type))
      }
    })
  )
)

export default enhancer(Filter)
