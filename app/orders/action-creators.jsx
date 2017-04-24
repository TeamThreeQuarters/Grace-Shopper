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

// OB/SBW: recommend using `(dispatch, getState) => blahblahblah` instead of importing store and doing `store.getState()`
// /* THUNK DISPATCHERS */
export const getUserOrders = () => dispatch => {
  const auth = store.getState().auth
  if (auth) {
    axios.get(`/api/orders/${auth.id}`)
      .then(orders => {
        dispatch(setOrders(orders.data))
      })
      .catch(err => console.error('Could not get user orders', err)) // OB/SBW: try out react-toastr
  }
}
