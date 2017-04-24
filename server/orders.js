'use strict'

const db = require('APP/db')
const { Order, User, OrderItem, Inventory } = db
const { mustBeLoggedIn } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/:id',
  mustBeLoggedIn,
  (req, res, next) =>
    User.findById(req.params.id)
      .then(user => user.getOrders({
        include: [{model: OrderItem, include: Inventory}]
      }))
      .then(orders => res.json(orders))
      .catch(next))
  .post('/',
  (req, res, next) =>
    Order.create(req.body)
      .then(order => res.status(201).json(order))
      .catch(next))



