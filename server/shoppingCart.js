'use strict'

const db = require('APP/db')
const { ShoppingCart } = db
const Promise = require('bluebird');


module.exports = require('express').Router()

  .get('/', (req, res, next) => {
    if (!req.user && !req.session.shoppingCartId) return res.json([])
    const where = req.user ? { user_id: req.user.id } : { id: req.session.shoppingCartId }
    ShoppingCart.findOne({
      where,
    })
      .then(shoppingCart => shoppingCart.getShopping_cart_items())
      .then(shoppingCartItems => res.json(shoppingCartItems))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    let where = {}
    if (req.user) where = { user_id: req.user.id }
    if (req.session.shoppingCartId) where = { id: req.session.shoppingCartId }

    const defaults = req.user ? { user_id: req.user.id } : {}

    ShoppingCart.findOrCreate({
      where,
      defaults,
    })
      .spread((shoppingCart) => {
        req.session.shoppingCartId = shoppingCart.id
        return shoppingCart.createShopping_cart_item({
          quantity: req.body.quantity,
          inventory_id: req.body.inventoryId
        })
      })
      .then(() => res.sendStatus(201))
      .catch(next)
  })

    .delete('/', (req, res, next) => {
      if (!req.user && !req.session.shoppingCartId) return res.json([])
      const where = req.user ? { user_id: req.user.id } : { id: req.session.shoppingCartId }
      ShoppingCart.findOne({
        where,
      })
        .then(shoppingCart => {
          return shoppingCart.setShopping_cart_items([])
        })
        .then(() => {
          res.sendStatus(202)
        })
        .catch(next)
    })
