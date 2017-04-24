'use strict'

import {
  UPDATE_SEARCH_QUERY,
  DELETE_SEARCH_QUERY
} from './constants'

import { getProducts } from 'APP/app/product_catalog/action-creators'

// OB/SBW: consider having update search query change the URL query string (there might be something in react router for this)
/* ACTION-CREATORS */
const updateSearchQuery = searchQuery => ({
  type: UPDATE_SEARCH_QUERY,
  searchQuery
})

const deleteSearchQuery = () => ({
  type: DELETE_SEARCH_QUERY
})

// OB/SBW: consider returning something
/* THUNK DISPATCHERS */
export const setSearchQuery = searchQuery => dispatch => {
  dispatch(updateSearchQuery(searchQuery))
  dispatch(getProducts({ keywords: searchQuery }))
}

export const removeSearchQuery = () => dispatch => dispatch(deleteSearchQuery())
