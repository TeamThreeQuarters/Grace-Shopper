'use strict'

import {
  READ_ALL_PRODUCTS
} from './constants'

const initialState = {
  products: []
}

const productCatalogReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case READ_ALL_PRODUCTS:
    newState.products = action.products
    break

  default:
    return state
  }

  return newState
}

export default productCatalogReducer
