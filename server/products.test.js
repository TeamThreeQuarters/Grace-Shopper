const request = require('supertest')
  , { expect } = require('chai')
  , db = require('APP/db')
  , app = require('./start')
  , { Product } = db

/* global describe it before afterEach beforeEach */

const sampleProducts = [{
  name: 'Product Here',
  images: [],
  description: 'Simple description',
  tags: []
}, {
  name: 'Second Product',
  images: [],
  description: 'Some other description',
  tags: []
}]

describe('/api/products', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET', () =>
    describe('with no products', () =>
      it('returns an empty array', () =>
        request(app)
          .get(`/api/products`)
          .expect([])
      )
    ),

    describe('with some products', () => {
      beforeEach(() =>
        Product.bulkCreate(sampleProducts)
      )

      it('returns an array', () =>
        request(app)
          .get(`/api/products`)
          .then(res => expect(res.body).to.have.length(2))
      )

      it('returns an array with all products', () =>
        request(app)
          .get(`/api/products`)
          .then(res => {
            expect(res.body[0]).to.include({ name: sampleProducts[0].name })
            expect(res.body[1]).to.include({ name: sampleProducts[1].name })
          })
      )

      // OB/SBW: might be unnecessary (what does it test that the later one doesn't)
      it('returns an empty array if no result matches query', () =>
        request(app)
          .get(`/api/products?name=nothingmatches`)
          .then(res => expect(res.body).to.have.length(0))
      )

      it('returns an array of all the products that match the query', () =>
        request(app)
          .get(`/api/products?name=Here`)
          .then(res => {
            expect(res.body).to.have.length(1)
            expect(res.body[0]).to.include({ name: sampleProducts[0].name })
          })
      )
    })
  )

  describe('POST', () =>
    it('creates a product', () =>
      request(app)
        .post('/api/products')
        .send(sampleProducts[0])
        .expect(201)
        .then(res => expect(res.body).to.include({ name: sampleProducts[0].name }))
    )
  )
})