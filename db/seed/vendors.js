'use strict'

const db = require('APP/db')
const { Vendor } = db
const seed = require('./_seed')

const vendors = seed(Vendor, {
  fullstack: {
    name: 'FullStack'
  },
  gracehopper: {
    name: 'GraceHopper'
  }
})

module.exports = vendors
