'use strict'

const db = require('APP/db')
const { OrderItem } = db
const seed = require('./_seed')

const orderItems = seed(OrderItem, ({ orders, inventories }) => {
  return {
    orderItem1: {
      deliveryStatus: 'delivered',
      price: 3.00,
      quantity: 7,
      order_id: orders.order1.id,
      inventory_id: inventories.fullStackOmris.id
    },
    orderItem2: {
      deliveryStatus: 'waiting',
      price: 4.00,
      quantity: 20,
      order_id: orders.order1.id,
      inventory_id: inventories.gracehopperLisas.id
    },
    orderItem3: {
      deliveryStatus: 'canceled',
      price: 5.00,
      quantity: 8,
      order_id: orders.order2.id,
      inventory_id: inventories.fullStackOmris.id
    },
  }
})

module.exports = orderItems
