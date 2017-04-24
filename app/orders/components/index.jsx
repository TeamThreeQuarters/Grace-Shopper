'use strict'

import React from 'react'
import Order from './order'

const Orders = props => {
  const orders = props.orders;
  return (
    <div className="container">
        {orders.map(order => (<div key={order.id}><Order order={order}/></div>))}
    </div> 
  )
}

export default Orders
