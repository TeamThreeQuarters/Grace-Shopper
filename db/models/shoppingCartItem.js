'use strict'

const { INTEGER, DECIMAL } = require('sequelize')

module.exports = db => db.define('shopping_cart_items', {
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

module.exports.associations = (ShoppingCartItem, { User, Inventory }) => {
  ShoppingCartItem.belongsTo(User)
  ShoppingCartItem.belongsTo(Inventory)
}