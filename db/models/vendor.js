'use strict'

const { STRING } = require('sequelize')

module.exports = db => db.define('vendor', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})
