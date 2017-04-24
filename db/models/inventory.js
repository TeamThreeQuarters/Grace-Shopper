'use strict'

const { INTEGER, DECIMAL } = require('sequelize')

module.exports = db => db.define('inventory', {
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  price: {
    type: DECIMAL,
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

module.exports.associations = (Inventory, { Vendor, Product }) => {
  Inventory.belongsTo(Vendor)
  Inventory.belongsTo(Product)
}

