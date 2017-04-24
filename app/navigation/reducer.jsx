'use strict'

import {
  UPDATE_SEARCH_QUERY,
  DELETE_SEARCH_QUERY
} from './constants'

const initialState = {
  searchQuery: ''
}

// OB/SBW: check out immutable js, not too difficult to integrate
const navigationReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case UPDATE_SEARCH_QUERY:
    newState.searchQuery = action.searchQuery
    break

  case DELETE_SEARCH_QUERY:
    newState.searchQuery = ''
    break

  default:
    return state
  }

  return newState
}

export default navigationReducer
