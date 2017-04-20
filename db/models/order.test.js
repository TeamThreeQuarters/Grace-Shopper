'use strict'

const db = require('APP/db')
    , {Order} = db
    , {expect} = require('chai')

/* global describe it before afterEach */

describe('User', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('Orders', () => {
    it('Orders are created with a paid status that is set to false by default.', () =>
      Order.create({})
        .then(order => expect(order.paidStatus).to.be.false))
    it('Orders can be created with a paid status of true if set explicitly.', () =>
      Order.create({ paidStatus: true })
        .then(order => expect(order.paidStatus).to.be.true))
  })
})
