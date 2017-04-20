'use strict'

const db = require('APP/db')
const { Vendor } = db
const seed = require('./_seed')

const vendors = seed(Vendor, {
  fullstack: {
    name: 'FullStack'
  },
  staff: {
    gracehopper: 'GraceHopper'
  }
})

module.exports = vendors
