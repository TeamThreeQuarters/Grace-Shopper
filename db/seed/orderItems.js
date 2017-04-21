'use strict'

const db = require('APP/db')
const { OrderItem } = db
const seed = require('./_seed')

const orderItems = seed(OrderItem, ({ orders, vendors }) => {
  return {
    orderItem1: {
      deliveryStatus: 'delivered',
      price: 3.00,
      quantity: 7,
      order_id: orders.order1.id,
      vendor_id: vendors.fullstack.id
    },
    orderItem2: {
      deliveryStatus: 'waiting',
      price: 4.00,
      quantity: 20,
      order_id: orders.order2.id,
      vendor_id: vendors.gracehopper.id
    }
  }
})

module.exports = orderItems
