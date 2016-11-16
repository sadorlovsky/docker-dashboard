import React from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { changeTextFilter } from '../../actions'

const TextFilter = ({ onChangeFilter }) => {
  return (
    <Input
      fluid
      placeholder='Filter by id, name or image...'
      onInput={e => onChangeFilter(e.target.value)}
    />
  )
}

const enhancer = connect(
  ({ rootReducer }) => ({ textFilter: rootReducer.textFilter }),
  dispatch => ({
    onChangeFilter (text) {
      dispatch(changeTextFilter(text))
    }
  })
)

export default enhancer(TextFilter)
