'use strict'

import {
  SET_PRODUCT,
  SET_PRODUCTS,
  SET_CATEGORIES
} from './constants'

const initialState = {
  products: [],
  product: {},
  categories: []
}

const productCatalogReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_PRODUCT:
    newState.product = action.product
    break

  case SET_PRODUCTS:
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
