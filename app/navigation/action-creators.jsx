'use strict'

import {
  UPDATE_SEARCH_QUERY,
  DELETE_SEARCH_QUERY
} from './constants'

/* ACTION-CREATORS */
const updateSearchQuery = searchQuery => ({
  type: UPDATE_SEARCH_QUERY,
  searchQuery
})

const deleteSearchQuery = () => ({
  type: DELETE_SEARCH_QUERY
})

/* THUNK DISPATCHERS */
export const setSearchQuery = searchQuery => dispatch => dispatch(updateSearchQuery(searchQuery))

export const removeSearchQuery = () => dispatch => dispatch(deleteSearchQuery())
