'use strict'

import React from 'react'
import OrderItem from './orderItem'

const Order = props => {
  const order = props.order;
  return (
    <div>
        <h2>Order ID: {order.id}</h2>
        <p>Order Submitted At: {order.created_at}</p>
        <p><strong>{order.paidStatus ? 'Order Payment Complete' : 'Order Payment Not Complete'}</strong></p>
        <hr/>
        {order.orderItems.map((orderItem, index, array) => {
          const inventory = orderItem.inventory;
          const vendor = inventory.vendor;
          const product = inventory.product;
          return (
            <div key={orderItem.id}>
              <OrderItem orderItem={orderItem} inventory={inventory} vendor={vendor} product={product}/>        
              {index === array.length - 1 ? <hr className="order-seperator"/> : <hr/>}
            </div>
          )
        })}
    </div>
  )
}

export default Order
