'use strict'

import axios from 'axios'

import {
  SET_PRODUCT,
  SET_PRODUCTS,
  SET_CATEGORIES
} from './constants'

/* ACTION-CREATORS */
const setProduct = product => ({
  type: SET_PRODUCT,
  product
})

const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
})

/* THUNK DISPATCHERS */
export const getProduct = productId => dispatch =>
  axios.get(`/api/products/product/${productId}`)
    .then(product => dispatch(setProduct(product.data)))
    .catch(err => console.error('Could not load product', err))

export const getProducts = searchQuery => dispatch =>
  axios.get('/api/products', { params: searchQuery })
    // OB/SBW: this variable is more accurately "response"
    .then(products => dispatch(setProducts(products.data)))
    .catch(err => console.error('Could not load all products', err))

export const getCategoryProducts = categoryName => dispatch =>
  axios.get(`/api/products/${categoryName}`) // OB/SBW: consider shifting this to query string
    .then(products => dispatch(setProducts(products.data)))
    .catch(err => console.error('Could not load all products', err))

export const getCategories = () => dispatch =>
  axios.get('/api/categories')
    .then(response => dispatch(setCategories(response.data)))
    .catch(err => console.error('Could not load categories', err))
