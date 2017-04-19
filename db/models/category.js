'use strict'

const { STRING } = require('sequelize')

// OB/SBW: have you considered not having a model for categories
module.exports = db => db.define('categories', {
  // OB/SBW: consider unique validator, also watch out for empty strings
  name: {
    type: STRING,
    allowNull: false
  }
})

module.exports.associations = (Category, {Product}) => {
  Category.hasMany(Product) // OB/SBW: will products only ever have one category?
}
