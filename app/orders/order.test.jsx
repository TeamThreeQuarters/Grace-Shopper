import React from 'react'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())
import { shallow } from 'enzyme'
// import { spy } from 'sinon'
chai.use(require('sinon-chai'))
import Order from './components/order'
import OrderItem from './containers/OrderItem'
import sampleOrders from './sampleOrders.test.data'

/* global describe it beforeEach */
describe('<Orders />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Order order={sampleOrders[0]} />)
  )

  it('Contains the correct amount of order items', () => {
    expect(root.find(OrderItem)).to.have.length(2);
  })

  it('Has a paragraph with the creation date', () => {
    expect(root.find('p[className="creation-date"]')).to.have.length(1);
  })

  it('Has a paragraph with the payment status', () => {
    expect(root.find('p[className="payment-status"]')).to.have.length(1);
  })

  it('Has the correct number of <hr/>', () => {
    expect(root.find('hr')).to.have.length(3);
  })

  it('Has the correct number of <hr/> used for seperating orders', () => {
    expect(root.find('hr[className="order-seperator"]')).to.have.length(1);
  })
})
