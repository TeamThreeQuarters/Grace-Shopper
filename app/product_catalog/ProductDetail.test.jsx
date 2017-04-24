import React from 'react'
import { createStore } from 'redux'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())
import { shallow } from 'enzyme'
import { spy } from 'sinon'
chai.use(require('sinon-chai'))
import ProductDetail from './components/ProductDetail'
import ProductDetailContainer from './containers/ProductDetail'

/* global describe it beforeEach */

const sampleProduct = {
  id: 1,
  name: 'Sample Product',
  images: ['http://placehold.it/200x200', 'http://placehold.it/250x250', 'http://placehold.it/300x300'],
  description: 'Sample Product description',
  tags: ['tag1', 'tag2']
}

describe('<ProductDetail />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<ProductDetail product={sampleProduct} />)
  )

  it('shows only the selected product', () => {
    const item = root.find('div[className="product-item"]')
    expect(item).to.have.length(1)
  })

  it('shows an image field for the selected product', () => {
    const img = root.find('img[className="product-image"]')
    expect(img).to.have.length(1)
    expect(img.at(0)).to.have.attr('src').equals(sampleProduct.images[0])
  })
})

describe("<ProductDetail />'s connection", () => {
  const state = {
    products: {
      product: sampleProduct
    }
  }

  let root, store
  beforeEach('create store and render the root', () => {
    store = createStore(state => state, state)
    spy(store, 'dispatch')
    root = shallow(<ProductDetailContainer store={store} />)
  })

  it('gets prop.product from state.products.product', () => {
    expect(root.find(ProductDetail)).to.have.prop('product').eql(state.products.product)
  })
})
