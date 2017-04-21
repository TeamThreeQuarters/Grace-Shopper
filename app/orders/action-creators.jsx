'use strict'

import axios from 'axios'
import store from '../store'

import {
  SET_ORDERS
} from './constants'

// /* ACTION-CREATORS */
const setOrders = orders => ({
  type: SET_ORDERS,
  orders
})

// /* THUNK DISPATCHERS */
export const getUserOrders = () => dispatch => {
  let auth = store.getState().auth
  if (auth) {
    axios.get(`/api/orders/${auth.id}`)
      .then(orders => {
        dispatch(setOrders(orders.data))
      })
      .catch(err => console.error('Could not get user orders', err))
  }
}

