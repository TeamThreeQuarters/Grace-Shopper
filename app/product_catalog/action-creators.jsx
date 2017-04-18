'use strict'

import axios from 'axios'

import {
  READ_ALL_PRODUCTS
} from './constants'

/* ACTION-CREATORS */
const readAllProducts = products => ({
  type: READ_ALL_PRODUCTS,
  products
})

/* THUNK DISPATCHERS */
export const getProducts = searchQuery => dispatch => {
  let URI = '/api/products'
  // if (keyword) URI += `?keyword=${keyword}`
  // if (searchQuery) URI += `?name=${searchQuery.name}`

  // if (searchQuery) {
  //   const queries = []
  //   Object.keys(searchQuery).forEach(key => {
  //     queries.push(`${key}=${searchQuery[key]}`)
  //   })
  //   URI += `?${queries.join('&')}`
  // }

  axios.get(URI, { params: searchQuery })
    .then(products => dispatch(readAllProducts(products.data)))
    .catch(err => console.error('Could not load all products', err))
}
