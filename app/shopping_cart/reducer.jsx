'use strict'

import {
  SET_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM
} from './constants'

const initialState = {
  items: [],
}

const shoppingCartReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_ITEMS:
      newState.items = action.items
      break

    case ADD_ITEM:
      newState.items = newState.items.push(action.item)
      break

    case REMOVE_ITEM:
      newState.items = newState.items.filter(item => item.id !== action.itemId)
      break

    default:
      return state
  }

  return newState
}

export default shoppingCartReducer
