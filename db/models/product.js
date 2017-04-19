'use strict'

const { STRING, TEXT, ARRAY } = require('sequelize')

module.exports = db => db.define('products', {
  // OB/SBW: consider other validations, e.g. unique, also watch out for empty strings
  name: {
    type: STRING,
    allowNull: false
  },
  images: {
    type: ARRAY(TEXT), // OB/SBW: maybe just array of strings, text is arbitrarily large
    defaultValue: []
    // OB/SW: there is an isUrl validator in sequelize
  },
  description: TEXT,
  tags: {
    type: ARRAY(STRING),
    defaultValue: []
  }
})
