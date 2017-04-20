'use strict'

const db = require('APP/db')
const { Promise } = db
const categories = require('./categories')
const products = require('./products')
const users = require('./users')
const vendors = require('./vendors')
const inventories = require('./inventories')

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
