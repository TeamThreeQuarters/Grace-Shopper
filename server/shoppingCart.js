'use strict'

const db = require('APP/db')
const { ShoppingCart } = db

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    const whereCriteria = req.user ? { user_id: req.user.id} : { id : req.session.shoppingCartId }
    ShoppingCart.findOne({
      where: whereCriteria
    })
      .then(shoppinCart => shoppinCart.getShoppingCartItems())
      .then(shoppingCartItems => res.json(shoppingCartItems))
      .catch(next)
  })
