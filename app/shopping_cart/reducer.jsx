'use strict'

import { ADD_ITEM, REMOVE_ITEM } from './constants'

const initialState = {
  items: {},
}

/* eslint indent: [ "warn", 2,  { "SwitchCase": 1 }] */
const shoppingCartReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case ADD_ITEM:
      newState.items[action.item.id] = action.item
      break

    case REMOVE_ITEM:
      delete newState.items[action.item.id]
      break

    default:
      return state
  }
}

export default shoppingCartReducer
