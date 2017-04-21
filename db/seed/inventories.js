'use strict'

const db = require('APP/db')
const { Inventory } = db
const seed = require('./_seed')

const inventories = seed(Inventory, ({ vendors, products }) => {
  return {
    fullStackOmris: {
      vendor_id: vendors.fullstack.id,
      product_id: products.omri.id,
      // orderItem_id: orderItems.orderItem1.id,
      quantity: 10,
      price: 99
    },
    gracehopperLisas: {
      vendor_id: vendors.gracehopper.id,
      product_id: products.lisa.id,
      // orderItem_id: orderItems.orderItem2.id,
      quantity: 7,
      price: 75
    }
  }
})

module.exports = inventories
