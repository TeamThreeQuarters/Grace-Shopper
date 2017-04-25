import React from 'react'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())
import { shallow } from 'enzyme'
// import { spy } from 'sinon'
chai.use(require('sinon-chai'))
import Orders from './components'
import Order from './components/order'
import sampleOrders from './sampleOrders.test.data'

/* global describe it beforeEach */
describe('<Orders />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Orders orders={sampleOrders} />)
  )

  it('Contains the correct amount of orders', () => {
    expect(root.find(Order)).to.have.length(2);
  })
})
