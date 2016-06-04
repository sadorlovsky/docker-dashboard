import { handleActions } from 'redux-actions'

const reducer = handleActions({
  TOGGLE_ID: state => ({
    ...state, showFullId: !state.showFullId
  })
}, {
  showFullId: true
})

export default reducer
