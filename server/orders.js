'use strict'

const db = require('APP/db')
const { Order, User, OrderItem } = db
const { mustBeLoggedIn } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/:id',
  mustBeLoggedIn,
  (req, res, next) =>
    User.findById(req.params.id)
      .then(user => user.getOrders({include: OrderItem}))
      .then(orders => res.json(orders))
      .catch(next))
  .post('/',
  (req, res, next) =>
    Order.create(req.body)
      .then(order => res.status(201).json(order))
      .catch(next))




