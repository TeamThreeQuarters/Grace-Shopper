'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('shopping_cart_items', {
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  inventory_id: {
    type: INTEGER,
    allowNull: false,
    unique: true
  }

})

module.exports.associations = (ShoppingCartItem, { ShoppingCart, Inventory }) => {
  ShoppingCartItem.belongsTo(ShoppingCart)
  ShoppingCartItem.belongsTo(Inventory, {sourceKey: 'inventory_id'})
}
