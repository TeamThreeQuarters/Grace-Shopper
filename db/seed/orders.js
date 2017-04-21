'use strict'

const db = require('APP/db')
const { Order } = db
const seed = require('./_seed')

const orders = seed(Order, ({ users }) => {
  return {
    order1: {
      paidStatus: true,
      user_id: users.god.id
    },
    order2: {
      paidStatus: false,
      user_id: users.barack.id
    }
  }
})

module.exports = orders
