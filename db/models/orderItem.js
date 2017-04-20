'use strict'

const { ENUM, DECIMAL, INTEGER } = require('sequelize')

module.exports = db => db.define('orderItems', {
  deliveryStatus: {
    type: ENUM,
    values: ['waiting', 'delivered', 'canceled'],
    allowNull: false,
  },
  price: {
    type: DECIMAL,
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

module.exports.associations = (User, { Inventory }) => {
  User.hasOne(Inventory)
}

