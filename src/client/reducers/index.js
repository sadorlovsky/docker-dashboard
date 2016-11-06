import { handleActions } from 'redux-actions'
import { toggleId, toogleFilter } from '../actions'

const reducer = handleActions({
  [toggleId]: state => ({
    ...state, showFullId: !state.showFullId
  }),
  [toogleFilter]: (state, action) => ({
    ...state, filter: action.payload
  })
}, {
  filter: 'running',
  showFullId: true
})

export default reducer
