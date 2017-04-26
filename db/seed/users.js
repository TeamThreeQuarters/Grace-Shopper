'use strict'
const db = require('APP/db')
const { User } = db
const seed = require('./_seed')

const users = seed(User, () => ({
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234'
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  }
}))

module.exports = users
