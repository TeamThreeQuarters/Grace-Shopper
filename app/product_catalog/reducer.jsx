'use strict'

import {
  READ_ALL_PRODUCTS,
  SET_CATEGORIES
} from './constants'

const initialState = {
  products: [],
  categories: []
}

const productCatalogReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case READ_ALL_PRODUCTS:
      newState.products = action.products
      break

    case SET_CATEGORIES:
      newState.categories = action.categories
      break

    default:
      return state
  }

  return newState
}

export default productCatalogReducer
