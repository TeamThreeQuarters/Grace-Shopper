'use strict'

const db = require('APP/db')
const { Promise } = db
const users = require('./users')
const categories = require('./categories')
const products = require('./products')
const vendors = require('./vendors')
const inventories = require('./inventories')
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
    users: users(),
    categories: categories(),
    vendors: vendors()
  }
  seeded.products = products(seeded)
  seeded.inventories = inventories(seeded)
  seeded.orders = orders(seeded)
  seeded.orderItems = orderItems(seeded)
  seeded.productReviews = productReviews(seeded)

  return Promise.props(seeded)
}
