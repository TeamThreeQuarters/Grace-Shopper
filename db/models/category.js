'use strict'

const { STRING } = require('sequelize')

module.exports = db => db.define('categories', {
  name: {
    type: STRING,
    allowNull: false
  }
})

module.exports.associations = (Category, {Product}) => {
  Category.hasMany(Product)
}
