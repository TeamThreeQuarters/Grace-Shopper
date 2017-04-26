'use strict'

import React from 'react'
import Order from './order'

const Orders = props => {
  const orders = props.orders

  return (
    <div className="container order-container">
        {orders.map(order => (
          <div key={order.id}>
            <Order
            order={order} />
            <hr className="order-seperator" />
          </div>
        ))}
    </div> 
  )
}

export default Orders
