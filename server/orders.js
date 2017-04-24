'use strict'

const db = require('APP/db')
const { Order, User, OrderItem, Inventory, Product, Vendor } = db
const { mustBeLoggedIn } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/:id', // OB/SBW: non-standard for this to be a non-order id, if you want to pass an order id, you could do so through the query string `/api/orders?userId=3`
  mustBeLoggedIn,
  (req, res, next) =>
    User.findById(req.params.id)
      .then(user => user.getOrders({
        include: [
          {model: OrderItem, include: [{
            model: Inventory, include: [
              Product, Vendor]}
          ]}]
      }))
      .then(orders => res.json(orders))
      .catch(next))
  .post('/',
  (req, res, next) =>
    Order.create(req.body)
      .then(order => res.status(201).json(order))
      .catch(next))



