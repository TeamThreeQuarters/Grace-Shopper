'use strict'

const db = require('APP/db')
const Product = db.model('products')

const { mustBeLoggedIn, forbidden } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
  (req, res, next) =>
    Product.findAll()
      .then(products => res.json(products))
      .catch(next))

  .post('/',
  (req, res, next) =>
    Product.create(req.body)
      .then(user => res.status(201).json(user))
      .catch(next))

  .get('/:id',
  (req, res, next) =>
    Product.findById(req.params.id)
      .then(user => res.json(user))
      .catch(next))
