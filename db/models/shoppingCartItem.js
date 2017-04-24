'use strict'

const { INTEGER, DECIMAL } = require('sequelize')

module.exports = db => db.define('shopping_cart_items', {
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
})

module.exports.associations = (ShoppingCartItem, { ShoppingCart, Inventory }) => {
  ShoppingCartItem.belongsTo(ShoppingCart)
  ShoppingCartItem.belongsTo(Inventory)
}
