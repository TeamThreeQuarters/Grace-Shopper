'use strict'

const { STRING, TEXT, ARRAY } = require('sequelize')

module.exports = db => db.define('products', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  images: {
    type: ARRAY(TEXT),
    defaultValue: []
  },
  description: TEXT,
  tags: {
    type: ARRAY(STRING),
    defaultValue: []
  }
})

module.exports.associations = (Product, { Inventory }) => {
  Product.hasMany(Inventory)
}
