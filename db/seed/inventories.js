'use strict'

const db = require('APP/db')
const { Inventory } = db
const seed = require('./_seed')

const inventories = seed(Inventory, ({ vendors, products }) => (
  {
    fullStackOmris: {
      vendor: vendors.fullstack.id,
      product: products.omri.id,
      quantity: 10,
      price: 99
    },
    gracehopperLisas: {
      vendor: vendors.gracehopper.id,
      product: products.lisa.id,
      quantity: 7,
      price: 75
    }
  })
)

module.exports = inventories
