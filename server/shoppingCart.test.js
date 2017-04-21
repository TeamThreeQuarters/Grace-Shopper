const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db')
  , app = require('./start')

/* global describe it before afterEach  */

describe('/api/shoppingCart', () => {
  before('Await database sync', () => db.didSync)
  // afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET', () =>
    describe('with no items in Shopping Cart', () =>
      it('returns an empty array', () =>
        request(app)
          .get('/api/shoppingCart')
          .then(res => expect(res.body).to.have.length(0))
      )
    )
  )

  describe('POST', () =>
    describe('guest with no shopping cart', () =>
      describe('add an item to the cart', () =>
        it('creates shopping cart', () =>
          request(app)
            .post('/api/shoppingCart')
            .send({quantity: 3, price: 9.99})
            .expect(201)
            .then(res => {
              console.log(res.status)
              console.log(res.body)})

        )
      )
    )
  )
})
