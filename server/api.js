'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/categories', require('./categories'))
  .use('/orders', require('./orders'))
  .use('/shoppingCart/items', require('./shoppingCart'))
  .use('/productReview', require('./productReview'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
