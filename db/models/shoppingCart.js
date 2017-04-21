'use strict'

module.exports = db => db.define('shopping_cart', {})

module.exports.associations = (ShoppingCart, { User, ShoppingCartItem }) => {
  ShoppingCart.belongsTo(User)
  ShoppingCart.hasMany(ShoppingCartItem)
}
