'use strict'

const { ENUM } = require('sequelize')

module.exports = db => db.define('orderItems', {
  status: {
    type: ENUM,
    values: ['waiting', 'delivered', 'canceled']
  }
})

