'use strict'

import React from 'react'
import { Link } from 'react-router'

// OB/SBW: consider splitting this up into more files

const Orders = props => {
  const orders = props.orders;
  return (
    <div className="container">
      <div>
        {console.log('ORDERS:', orders)} {/* OB/SBW: dead code */}
        {orders.map(order => (
          <div key={order.id}>
              {/* OB/SBW: incosistent indentation */}
              <h2>Order ID: {order.id}</h2>
              <p>Order Submitted At: {order.created_at}</p>
              <p><strong>{order.paidStatus ? 'Order Payment Complete' : 'Order Payment Not Complete'}</strong></p>
              <hr/>
              {order.orderItems.map((orderItem, index, array) => {
                const inventory = orderItem.inventory;
                const vendor = inventory.vendor;
                const product = inventory.product
                return (
                  <div key={orderItem.id}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <h4>{ product.name }</h4>
                        <p>Delivery Status: { orderItem.deliveryStatus }</p>
                        <p>Cost: <span>$</span>{ orderItem.price }</p>
                        <p>Quantity: { orderItem.quantity }</p>
                        <p>Bought From: { vendor.name }</p>
                      </div>
                      <div className='col-md-6'>
                        <Link to={`/product/${product.name}/${product.id}`}>
                          <span>
                            <img src={product.images[0]} className="product-image" />
                          </span>
                          <p><span> {product.name} : {product.description}</span></p>
                        </Link>                        
                      </div>
                    </div>
                    {index === array.length - 1 ? <hr className="order-seperator"/> : <hr/>}
                  </div>
                )
              })}
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Orders
