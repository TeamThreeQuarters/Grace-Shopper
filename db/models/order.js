'use strict'

const { ENUM } = require('sequelize')

module.exports = db => db.define('orders', {
  // TODO Paid?
})

module.exports.associations = (Order, {OrderItem}) => {
  Order.hasMany(OrderItem)
}
