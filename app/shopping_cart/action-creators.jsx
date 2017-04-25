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

export const addItem = (inventoryId, quantity) => ({
  type: ADD_ITEM,
  inventoryId,
  quantity
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
export const getShoppingCartItems = () => dispatch => {
  axios.get('/api/shoppingCart/items')
    .then(response => {
      console.log('Shopping Cart Items Response:', response)

      // dispatch(setItems(result.data))
    })
    .catch(err => console.error('Error retrieving shopping cart', err))
}

export const addToShoppingCart = (inventoryId, quantity) => dispatch => {
  axios.post('/api/shoppingCart/items', {inventoryId, quantity})
    .then((response) => dispatch(addItem(inventoryId, quantity)))
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
