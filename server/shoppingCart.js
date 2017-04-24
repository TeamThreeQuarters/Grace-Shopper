'use strict'

const db = require('APP/db')
const { ShoppingCart } = db

module.exports = require('express').Router()

  .get('/', (req, res, next) => {
    if (!req.user && !req.session.shoppingCartId) return res.json([])
    const where = req.user ? { user_id: req.user.id } : { id: req.session.shoppingCartId }
    ShoppingCart.findOne({
      where,
    })
      .then(shoppingCart => shoppingCart.getShoppingCartItems())
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
        shoppingCart.createShopping_cart_item({ // OB/SBW: not returning this promise
          quantity: req.body.quantity,
          price: req.body.price // OB/SBW: watch out
        })
      })
      .then(res.sendStatus(201)) // OB/SBW: does not actually wait for the shopping cart to be saved, you want to pass a FUNCTION to `.then`
      .catch(next)
  })
