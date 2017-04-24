'use strict'

module.exports = db => db.define('shopping_cart', {})

module.exports.associations = (ShoppingCart, { ShoppingCartItem }) => {
  ShoppingCart.hasMany(ShoppingCartItem)
}
