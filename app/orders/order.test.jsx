import React from 'react'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())
import { shallow } from 'enzyme'
// import { spy } from 'sinon'
chai.use(require('sinon-chai'))
import Order from './components/order'
import OrderItem from './components/orderItem'
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
})


