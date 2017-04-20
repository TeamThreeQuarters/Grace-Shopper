'use strict'
const db = require('APP/db')
const { Category } = db
const seed = require('./_seed')

const categories = seed(Category, {
  instructor: {
    name: 'Instructor'
  },
  staff: {
    name: 'Staff'
  },
  fellow: {
    name: 'Fellow'
  },
  student: {
    name: 'Student'
  }
})

module.exports = categories
