'use strict'

import {
  SET_ORDERS,
} from './constants'

const initialState = {
  orders: [],
}

const ordersReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_ORDERS:
    newState.orders = action.orders
    break

  default:
    return state
  }

  return newState
}

export default ordersReducer
