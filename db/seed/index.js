'use strict'

const db = require('APP/db')
const { Promise } = db
const categories = require('./categories')
const products = require('./products')
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
  }
  seeded.products = products(seeded)

  return Promise.props(seeded)
}
