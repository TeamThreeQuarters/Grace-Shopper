'use strict'

const db = require('APP/db')
const { ShoppingCart } = db

module.exports = require('express').Router()

  .all('*', (req, res, next) => {
    if (!req.user && !req.session.shoppingCartId) next()
    const whereCriteria = req.user ? {user_id: req.user.id} : {id: req.session.shoppingCartId}
    ShoppingCart.findOne({
      where: whereCriteria
    })
      .then(shoppinCart => req.shoppingCart = shoppinCart)
      .then(next)
      .catch(next)
  })

  .get('/', (req, res, next) => {
    console.log('/shoppingCart GET')
    req.shoppingCart.getShoppingCartItems()
      .then(shoppingCartItems => res.json(shoppingCartItems))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    console.log('/shoppingCart POST')
    req.shoppingCart.createShoppingCartItem({
      quantity: req.body.quantity,
      price: req.body.price
    })
      .then(res.sendStatus(201))
      .catch(next)
  })
