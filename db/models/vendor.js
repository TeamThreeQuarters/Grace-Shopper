'use strict'

const { STRING } = require('sequelize')

module.exports = db => db.define('shopping_cart_items', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})
