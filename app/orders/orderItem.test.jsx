import React from 'react'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())
import { shallow } from 'enzyme'
// import { spy } from 'sinon'
chai.use(require('sinon-chai'))
import OrderItem from './components/orderItem'
import sampleOrders from './sampleOrders.test.data'

/* global describe it beforeEach */
describe('<OrderItem />', () => {
  let root
  let product
  beforeEach('render the root', () => {
    let orderItem = sampleOrders[0].orderItems[0]
    // console.log('ORDERITEM: ', orderItem)
    product = orderItem.inventory.product
    let vendor = orderItem.inventory.vendor
    root = shallow(<OrderItem orderItem={orderItem} product={product} vendor={vendor}/>)
  })

  it('Has a row', () => {
    expect(root.find('div[className="row"]')).to.have.length(1);
  })

  it('Has two columns', () => {
    expect(root.find('div[className="col-md-6"]')).to.have.length(2);
  })

  it('Has a header with the product name', () => {
    expect(root.find('h4[className="product-name"]')).to.have.length(1);
  })

  it('Has a paragraph with item delivery status', () => {
    expect(root.find('p[className="item-delivery-status"]')).to.have.length(1);
  })

  it('Has a paragraph with item price', () => {
    expect(root.find('p[className="item-price"]')).to.have.length(1);
  })

  it('Has a paragraph with quantity', () => {
    expect(root.find('p[className="quantity"]')).to.have.length(1);
  })

  it('Has a paragraph with vendor name', () => {
    expect(root.find('p[className="vendor-name"]')).to.have.length(1);
  })

  it('Has a link to the product', () => {
    expect(root.find('Link[to]')).to.have.length(1);
  })

  it('Has an image of the product', () => {
    expect(root.find('img')).to.have.length(1);
    expect(root.find('img')).to.have.attr('src').equals(product.images[0]);
  })

//   it('Has a paragraph with item price', () => {
//     expect(root.find('hr[className="order-seperator"]')).to.have.length(1);
//   })
})

