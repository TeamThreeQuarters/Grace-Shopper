'use strict'

const { STRING, INTEGER, DECIMAL } = require('sequelize')

module.exports = db => db.define('shopping_cart_items', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})
