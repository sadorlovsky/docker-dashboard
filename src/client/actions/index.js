import { createAction } from 'redux-actions'

export const toggleId = createAction('TOGGLE_ID')
export const toggleStateFilter = createAction('TOGGLE_STATE_FILTER')
export const toggleView = createAction('TOGGLE_VIEW')
export const changeTextFilter = createAction('CHANGE_TEXT_FILTER')
export const clearTextFilter = createAction('CLEAR_TEXT_FILTER')
export const selectContainer = createAction('SELECT_CONTAINER')
export const unselectContainer = createAction('UNSELECT_CONTAINER')
