'use strict'

const { INTEGER, TEXT } = require('sequelize')

module.exports = db => db.define('productReview', {
  rating: INTEGER,
  review: TEXT
})
