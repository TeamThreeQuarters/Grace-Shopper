'use strict'

const db = require('APP/db')
const { Promise } = db
const categories = require('./categories')
const vendors = require('./vendors')
const products = require('./products')
const inventories = require('./inventories')
const users = require('./users')
const orders = require('./orders')
const orderItems = require('./orderItems')
const productReviews = require('./productReviews')

if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .catch(err => console.log(err))
    .finally(() => process.exit(0))
}

function seedEverything() {
  const seeded = {
    categories: categories(),
    users: users(),
    vendors: vendors()
  }
  seeded.products = products(seeded)
  seeded.orders = orders(seeded)
  seeded.inventories = inventories(seeded)
  seeded.orderItems = orderItems(seeded)
  seeded.productReviews = productReviews(seeded)

  return Promise.props(seeded)
}
