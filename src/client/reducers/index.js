import { handleActions } from 'redux-actions'
import { toggleId, toggleStateFilter, toggleView, changeTextFilter } from '../actions'

const reducer = handleActions({
  [toggleId]: state => ({
    ...state, showFullId: !state.showFullId
  }),
  [toggleStateFilter]: (state, action) => ({
    ...state, stateFilter: action.payload
  }),
  [toggleView]: (state, action) => ({
    ...state, view: action.payload
  }),
  [changeTextFilter]: (state, action) => ({
    ...state, textFilter: action.payload
  })
}, {
  stateFilter: 'running',
  showFullId: true,
  view: 'grid'
})

export default reducer
