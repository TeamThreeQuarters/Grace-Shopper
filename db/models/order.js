'use strict'

const { BOOLEAN } = require('sequelize')

module.exports = db => db.define('orders', {
  paidStatus: {
    type: BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
})

module.exports.associations = (Order, {OrderItem}) => {
  Order.hasMany(OrderItem)
}
