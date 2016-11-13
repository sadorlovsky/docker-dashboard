import { handleActions } from 'redux-actions'
import { toggleId, toggleFilter, toggleView } from '../actions'

const reducer = handleActions({
  [toggleId]: state => ({
    ...state, showFullId: !state.showFullId
  }),
  [toggleFilter]: (state, action) => ({
    ...state, filter: action.payload
  }),
  [toggleView]: (state, action) => ({
    ...state, view: action.payload
  })
}, {
  filter: 'running',
  showFullId: true,
  view: 'grid'
})

export default reducer
