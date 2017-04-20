'use strict'

const db = require('APP/db')
const { Promise } = db
const categories = require('./categories')
const vendors = require('./vendors')
const products = require('./products')
const inventories = require('./inventories')
const users = require('./users')

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

  return Promise.props(seeded)
}
