'use strict'

const { ENUM, DECIMAL, INTEGER } = require('sequelize')

module.exports = db => db.define('orderItems', {
  deliveryStatus: {
    type: ENUM,
    values: ['waiting', 'delivered', 'canceled'],
    allowNull: false,
  },
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
})

module.exports.associations = (OrderItem, { Inventory, ProductReview }) => {
  OrderItem.belongsTo(Inventory)
  OrderItem.hasOne(ProductReview)
}
