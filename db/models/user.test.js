'use strict'

const db = require('APP/db')
  , { User, Order } = db
  , { expect } = require('chai')

/* global describe it before afterEach */

describe('User', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false))
  })

  describe('User has many orders.', () => {
    it('Can create a user with multiple orders', () =>
      User.create({
        password: 'ok',
        orders: [
          { paidStatus: false },
          { paidStatus: true },
        ]
      }, {
        include: [Order]
      })
        .then(user => user.getOrders())
        .then(orders => {
          expect(orders.length).to.be.equal(2)
        }))
  })
})
