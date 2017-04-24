'use strict'

const db = require('APP/db')
const { Inventory } = db
const seed = require('./_seed')

const inventories = seed(Inventory, ({ vendors, products }) => ({
  fullStackOmris: {
    vendor_id: vendors.fullstack.id,
    product_id: products.omri.id,
    quantity: 10,
    price: 99
  },
  gracehopperLisas: {
    vendor_id: vendors.gracehopper.id,
    product_id: products.lisa.id,
    quantity: 7,
    price: 75
  }
}))



module.exports = inventories
