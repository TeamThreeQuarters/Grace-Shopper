'use strict'

const db = require('APP/db')
const { Category } = db
const seed = require('./_seed')

const categories = seed(Category, {
  officeHours: {
    name: 'Office Hours'
  },
  extraTime: {
    name: 'Extra Time'
  },
  apparel: {
    name: 'Apparel'
  }

})

module.exports = categories
