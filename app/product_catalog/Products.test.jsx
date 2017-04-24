import React from 'react'
import { createStore } from 'redux'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())
import { shallow } from 'enzyme'
import { spy } from 'sinon'
chai.use(require('sinon-chai'))
import Products from './components'
import ProductsContainer from './containers'

/* global describe it beforeEach */

const sampleProducts = [{
  id: 1,
  name: 'Sample Product',
  images: ['http://placehold.it/200x200', 'http://placehold.it/250x250', 'http://placehold.it/300x300'],
  description: 'Sample Product description',
  tags: ['tag1', 'tag2']
}, {
  id: 2,
  name: 'Another Product',
  images: ['http://placehold.it/200x200', 'http://placehold.it/300x300'],
  description: 'Sample Product 2 description',
  tags: ['tag2', 'tag3']
}, {
  id: 3,
  name: 'Third Product',
  images: ['http://placehold.it/200x200', 'http://placehold.it/250x250'],
  description: 'Third Product description',
  tags: ['tag3', 'tag4', 'tag5']
}]

describe('<Products />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Products products={sampleProducts} />)
  )

  it('shows all products', () => {
    // OB/SBW: recommend having product item be a component and then e.g. `root.find(ProductItem)`
    const items = root.find('div[className="product-item"]')
    expect(items).to.have.length(3)
  })

  it('shows an image field for each product', () => {
    const img = root.find('img[className="product-image"]')
    expect(img).to.have.length(3)
    expect(img.at(0)).to.have.attr('src').equals(sampleProducts[0].images[0])
  })

  it('calls Link when a product is clicked', () => { // OB/SBW: label doesn't match
    const items = root.find('Link[to]')
    expect(items).to.have.length(3)
  })
})

describe("<Products />'s connection", () => {
  const state = {
    products: {
      products: sampleProducts
    }
  }

  let root, store
  beforeEach('create store and render the root', () => {
    store = createStore(state => state, state)
    spy(store, 'dispatch')
    root = shallow(<ProductsContainer store={store} />)
  })

  it('gets prop.products from state.products.products', () => {
    expect(root.find(Products)).to.have.prop('products').eql(state.products.products)
  })
})
