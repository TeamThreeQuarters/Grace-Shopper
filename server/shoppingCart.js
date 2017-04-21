'use strict'

const db = require('APP/db')
const { ShoppingCart } = db

module.exports = require('express').Router()

  .get('/', (req, res, next) => {
    if (!req.user && !req.session.shoppingCartId) return res.json([])
    const where = req.user ? {user_id: req.user.id} : {id: req.session.shoppingCartId}
    ShoppingCart.findOne({
      where,
    })
      .then(shoppingCart => shoppingCart.getShoppingCartItems())
      .then(shoppingCartItems => res.json(shoppingCartItems))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    console.log('/api/shoppingCart POST  sdgfsdgdf')
    let where = {}
    if (req.user) where = {user_id: req.user.id}
    if (req.session.shoppingCartId) where =  {id: req.session.shoppingCartId}

    const defaults = req.user ? {user_id: req.user.id} : {}
    console.log('where', where)
    console.log('defaults', defaults)
    ShoppingCart.create({user_id: 1})
      .then(res => {
        console.log('res', res)
        // console.log(shoppingCart)
        // req.session.shoppingCartId = shoppingCart.id
        // shoppingCart.createShopping_cart_item({
        //   quantity: req.body.quantity,
        //   price: req.body.price
        // })
      })
      .catch((err) => {
        console.error('error', err)
      })
      .then(res.sendStatus(201))

  })
