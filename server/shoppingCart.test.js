const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db')
  , app = require('./start')

/* global describe it before afterEach  */

describe('/api/shoppingCart', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET', () =>
    describe('with no items in Shopping Cart', () =>
      it('returns an empty array', () =>
        request(app)
          .get('/api/shoppingCart')
          .then(res => expect(res.body).to.have.length(0))
      )
    )
  )
})
