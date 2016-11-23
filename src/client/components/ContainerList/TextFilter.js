import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { changeTextFilter, clearTextFilter } from '../../actions'

const TextFilter = ({ textFilter, onChangeFilter, onClearClick }) => {
  return (
    <Input
      fluid
      placeholder='Filter by id, name or image...'
      onChange={e => onChangeFilter(e.target.value)}
      action={(
        <Button icon disabled={textFilter === ''} onClick={onClearClick}>
          <Icon name='remove' />
        </Button>
      )}
      labelPosition='right'
      value={textFilter}
    />
  )
}

const enhancer = connect(
  ({ rootReducer }) => ({ textFilter: rootReducer.textFilter }),
  dispatch => ({
    onChangeFilter (text) {
      dispatch(changeTextFilter(text))
    },
    onClearClick () {
      dispatch(clearTextFilter())
    }
  })
)

export default enhancer(TextFilter)
