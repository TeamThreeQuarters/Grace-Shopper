const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db')
  , app = require('./start')
  , { Inventory } = db

/* global describe it before */

describe('/api/shoppingCart', () => {
  before('Await database sync', () => db.didSync)

  describe('GET', () =>
    describe('with no items in Shopping Cart', () =>
      it('returns an empty array', () =>
        request(app)
          .get('/api/shoppingCart/items')
          .then(res => expect(res.body).to.have.length(0))
      )
    )
  )

  describe('POST', () =>
    describe('guest with no shopping cart', () => {
      let inventoryId;
      before('Create Inventory', () =>
        Inventory.create({quantity: 10, price: 99})
          .then((inventory) => inventoryId = inventory.id)
      )

      describe('add an item to the cart', () =>
        it('creates shopping cart', () =>
          request(app)
            .post('/api/shoppingCart/items')
            .send({inventoryId: inventoryId, quantity: inventoryId})
            .expect(201)
        )
      )
    })
  )
})
