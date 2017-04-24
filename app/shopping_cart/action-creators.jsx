'use strict'

import axios from 'axios'

import { ADD_ITEM, UPDATE_QUANTITY,REMOVE_ITEM } from './constants'

// ACTION CREATORS
export const addItem = item => ({
  type: ADD_ITEM,
  item: item
})

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  itemId: itemId,
  quantity: quantity
})

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId: itemId
})

/* THUNK DISPATCHERS */

// OB/SBW: consider squashing this away, so your frontend only ever makes one request for adding or updating quantity
export const addToShoppingCart = product => dispatch => {
  axios.post('/api/shoppingCart', product) // OB/SBW: maybe URL should be '/api/shoppingCart/items' to specify resource well
    .then((shoppingCartItem) => dispatch(addItem(shoppingCartItem)))
    .catch(err => console.error('Error adding item to shopping cart', err))
}

export const updateShoppingCartItemQuantity = (shoppingCartItemId, quantity) => dispatch => {
  axios.patch(`/api/shoppingCart/${shoppingCartItemId}`, {quantity: quantity})
    .then(() => dispatch(updateQuantity(shoppingCartItemId, quantity)))
    .catch(err => console.error('Error updating quantity', err))
}

export const removeFromShoppingCart = shoppingCartItem => dispatch => {
  axios.delete(`/api/shoppingCart/${shoppingCartItem.id}`)
    .then(() => dispatch(removeItem(shoppingCartItem.id)))
    .catch(err => console.error('Error removing item from shopping cart', err))
}
