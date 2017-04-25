'use strict'

import axios from 'axios'

import {
  SET_ITEMS,
  ADD_ITEM,
  UPDATE_QUANTITY,
  REMOVE_ITEM
} from './constants'

// ACTION CREATORS
export const setItems = items => ({
  type: SET_ITEMS,
  items
})

export const addItem = item => ({
  type: ADD_ITEM,
  item
})

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  itemId,
  quantity
})

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
})

/* THUNK DISPATCHERS */
export const getShoppingCart = () => dispatch => {
  axios.get('/api/shoppingCart/items')
    .then(result => dispatch(setItems(result.data)))
    .catch(err => console.error('Error retrieving shopping cart', err))
}

export const addToShoppingCart = (inventory_id, quantity) => dispatch => {
  console.log("addToShoppingCart")
  axios.post('/api/shoppingCart/items', {inventory_id, quantity })
    .then((shoppingCartItem) => dispatch(addItem(shoppingCartItem)))
    .catch(err => console.error('Error adding item to shopping cart', err))
}

export const updateShoppingCartItemQuantity = (shoppingCartItemId, quantity) => dispatch => {
  axios.patch(`/api/shoppingCart/${shoppingCartItemId}`, { quantity: quantity })
    .then(() => dispatch(updateQuantity(shoppingCartItemId, quantity)))
    .catch(err => console.error('Error updating quantity', err))
}

export const removeFromShoppingCart = shoppingCartItem => dispatch => {
  axios.delete(`/api/shoppingCart/${shoppingCartItem.id}`)
    .then(() => dispatch(removeItem(shoppingCartItem.id)))
    .catch(err => console.error('Error removing item from shopping cart', err))
}
