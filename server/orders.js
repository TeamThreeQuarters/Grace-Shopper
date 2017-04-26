'use strict'

const db = require('APP/db')

const { Order, User, OrderItem, Inventory, Product, Vendor, ShoppingCart, ProductReview } = db

const { mustBeLoggedIn } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/:id',
  mustBeLoggedIn,
  (req, res, next) =>
    User.findById(req.params.id)
      .then(user => user.getOrders({
        include: [{
          model: OrderItem,
          include: [{
            model: Inventory,
            include: [Product, Vendor]
          }, {
            model: ProductReview
          }]
        }]
      }))
      .then(orders => res.json(orders))
      .catch(next))

  .post('/',
  (req, res, next) => {
    var items;
    if (!req.user && !req.session.shoppingCartId) return res.json([])
    const where = req.user ? { user_id: req.user.id } : { id: req.session.shoppingCartId }
    ShoppingCart.findOne({
      where,
    })
      .then(shoppingCart => shoppingCart.getShopping_cart_items({ include: [Inventory] }))
      .then(shoppingCartItems => {
        items = shoppingCartItems
        let orderPromise
        if (req.user) {
          orderPromise = req.user.createOrder({ paidStatus: true })
        } else {
          orderPromise = Order.create({ paidStatus: true })
        }
        return orderPromise
      })
      .then(order => items.forEach(item =>
        order.createOrderItem({
          deliveryStatus: 'waiting',
          price: item.inventory.price,
          quantity: item.quantity,
          inventory_id: item.inventory.id
        })
          .catch(next)
      ))
      .then(() => res.sendStatus(201))
      .catch(next)
  })
