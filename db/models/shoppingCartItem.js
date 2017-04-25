'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('shopping_cart_items', {
  shopping_cart_id: {
    type: INTEGER,
    allowNull: false,
    unique: 'shoppingCartProduct'
  },
  inventory_id: {
    type: INTEGER,
    allowNull: false,
    unique: 'shoppingCartProduct'
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }

})

module.exports.associations = (ShoppingCartItem, { ShoppingCart, Inventory }) => {
  ShoppingCartItem.belongsTo(ShoppingCart, {sourceKey: 'shopping_cart_id'})
  ShoppingCartItem.belongsTo(Inventory, {sourceKey: 'inventory_id'})
}
