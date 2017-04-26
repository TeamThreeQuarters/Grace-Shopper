'use strict'

const db = require('APP/db')
const { Inventory } = db
const seed = require('./_seed')

const inventories = seed(Inventory, ({ vendors, products }) => ({
  fullStackOmris: {
    vendor_id: vendors.fullstack.id,
    product_id: products.omri.id,
    quantity: 10,
    price: 99.99
  },
  gracehopperLisas: {
    vendor_id: vendors.gracehopper.id,
    product_id: products.lisa.id,
    quantity: 7,
    price: 74.99
  },
  fullStackDamon: {
    vendor_id: vendors.fullstack.id,
    product_id: products.damon.id,
    quantity: 4,
    price: 14.99
  },
  gracehopperDamon: {
    vendor_id: vendors.gracehopper.id,
    product_id: products.damon.id,
    quantity: 2,
    price: 22.50
  },
  fullStackSam: {
    vendor_id: vendors.fullstack.id,
    product_id: products.sam.id,
    quantity: 99,
    price: 0.99
  }
}))

module.exports = inventories
