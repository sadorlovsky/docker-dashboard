import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const reducer = handleActions({
  [actions.toggleId]: state => ({
    ...state, showFullId: !state.showFullId
  }),
  [actions.toggleStateFilter]: (state, action) => ({
    ...state, stateFilter: action.payload
  }),
  [actions.toggleView]: (state, action) => ({
    ...state, view: action.payload
  }),
  [actions.changeTextFilter]: (state, action) => ({
    ...state, textFilter: action.payload
  }),
  [actions.clearTextFilter]: state => ({
    ...state, textFilter: ''
  }),
  [actions.selectContainer]: (state, action) => ({
    ...state, selectedContainers: [...state.selectedContainers, action.payload]
  })
}, {
  stateFilter: 'running',
  textFilter: '',
  showFullId: true,
  view: 'grid',
  selectedContainers: []
})

export default reducer
