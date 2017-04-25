'use strict'

const db = require('APP/db')
const { ShoppingCart, ShoppingCartItem } = db

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    if (!req.user && !req.session.shoppingCartId) return res.json([])
    const where = req.user ? { user_id: req.user.id } : { id: req.session.shoppingCartId }
    ShoppingCart.findOne({
      where,
    })
      .then(shoppingCart => {
        if (!shoppingCart) return []
        return shoppingCart.getShopping_cart_items()
      })
      .then(shoppingCartItems => {
        res.json(shoppingCartItems)
      })
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
        return ShoppingCartItem.upsert({
          shopping_cart_id: shoppingCart.id,
          inventory_id: req.body.inventoryId,
          quantity: req.body.quantity
        })
      })
      .then(() => res.sendStatus(201))
      .catch(next)
  })
