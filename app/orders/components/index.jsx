'use strict'

import React from 'react'

const Orders = props => (
  <div className="container">
    <h1>
      Orders:
    </h1>
    <div>
      {console.log('ORDERS:', props.orders)}
      {props.orders.map(order => (
        <div key={order.id}>
            <h2>Order ID: {order.id}</h2>
            <p>Order Submitted At: {order.created_at}</p>
            <p><strong>{order.paidStatus ? 'Order Payment Complete' : 'Order Payment Not Complete'}</strong></p>
            <h3>Items</h3>
            {order.orderItems.map(orderItem => (
              <div className='indent' key={orderItem.id}>
                <h4>Item ID: {orderItem.id}</h4>
                <div className='indent-twice'>
                  <p>Delivery Status: { orderItem.deliveryStatus }</p>
                  <p>Cost: { orderItem.price }</p>
                  <p>Quantity: { orderItem.quantity }</p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  </div>
)

export default Orders
