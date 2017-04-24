'use strict'

import { ADD_ITEM, REMOVE_ITEM } from './constants'

// ACTION CREATORS
export const addItem = item => ({
  type: ADD_ITEM,
  item: item
})

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId: itemId
})
