'use strict'

module.exports = db => db.define('order', {
})

module.exports.associations = (Order, {OrderItem}) => {
  Order.hasMany(OrderItem)
}
