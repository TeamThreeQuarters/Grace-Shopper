'use strict'

const db = require('APP/db')
const { Order } = db
const seed = require('./_seed')

const orders = seed(Order, ({ orderItems }) => {
  console.log(orderItems)
  return {
    order1: {
      paidStatus: true,
    },
    order2: {
      paidStatus: false,
    }
  }
})

module.exports = orders
