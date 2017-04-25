'use strict'

const db = require('APP/db')
    , {OrderItem, Inventory} = db
    , {expect} = require('chai')

/* global describe it before afterEach */

describe('Order Item', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('Order Items', () => {
    it('Can create an order item with all its attributes', () =>
      OrderItem.create({
        price: 3.00,
        deliveryStatus: 'waiting',
        quantity: 7
      })
        .then(orderItem => {
          expect(Number(orderItem.price)).to.equal(3)
          expect(orderItem.deliveryStatus).to.equal('waiting')
          expect(orderItem.quantity).to.equal(7)
        }))

    it('Order Items must have a delivery status.', () =>
      OrderItem.create({
        price: 3.00,
        quantity: 7
      })
        .catch(err => expect(err.message).to.equal('notNull Violation: deliveryStatus cannot be null')))

    it('Order Items must have a price', () =>
      OrderItem.create({
        deliveryStatus: 'waiting',
        quantity: 7
      })
        .catch(err => expect(err.message).to.equal('notNull Violation: price cannot be null')))
    
    it('Order Items must have a quantity.', () =>
      OrderItem.create({
        deliveryStatus: 'waiting',
        price: 3.00,
      })
        .catch(err => expect(err.message).to.equal('notNull Violation: quantity cannot be null')))

    it('Order Items have an inventory', () =>
      OrderItem.create({
        deliveryStatus: 'waiting',
        price: 1.00,
        quantity: 3,
        inventory: {
          quantity: 9,
          price: 1.00,
        }
      }, {
        include: [ Inventory ]
      })
        .then(orderItem => orderItem.getInventory())
        .then(inventory => {
          expect(inventory.quantity).to.be.equal(9)
          expect(Number(inventory.price)).to.be.equal(1.00)
        }))
  })
})
