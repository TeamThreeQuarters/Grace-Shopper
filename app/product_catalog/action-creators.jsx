'use strict'

import axios from 'axios'

import {
  READ_ALL_PRODUCTS,
  SET_CATEGORIES
} from './constants'

/* ACTION-CREATORS */
const readAllProducts = products => ({
  type: READ_ALL_PRODUCTS,
  products
})

const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
})

/* THUNK DISPATCHERS */
export const getProducts = searchQuery => dispatch =>
  axios.get('/api/products', { params: searchQuery })
    .then(products => dispatch(readAllProducts(products.data)))
    .catch(err => console.error('Could not load all products', err))

export const getCategoryProducts = categoryName => dispatch =>
  axios.get(`/api/products/${categoryName}`)
    .then(products => dispatch(readAllProducts(products.data)))
    .catch(err => console.error('Could not load all products', err))

export const getCategories = () => dispatch =>
  axios.get('/api/categories')
    .then(response => dispatch(setCategories(response.data)))
    .catch(err => console.error('Could not load categories', err))
