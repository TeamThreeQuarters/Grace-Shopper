'use strict'

import React from 'react'
import { Link } from 'react-router'

const OrderItem = props => {
  const orderItem = props.orderItem;
  const product = props.product;
  const vendor = props.vendor;

  return (
    <div className='row'>
      <div className='col-md-6'>
        <h4 className='product-name'>{product.name}</h4>
        <p className='item-delivery-status'>Delivery Status: {orderItem.deliveryStatus}</p>
        <p className='item-price'>Cost: <span>$</span>{orderItem.price}</p>
        <p className='quantity'>Quantity: {orderItem.quantity}</p>
        <p className='vendor-name'>Bought From: {vendor.name}</p>
      </div>
      <div className='col-md-6'>
        <Link to={`/product/${product.name}/${product.id}`}>
          <span>
            <img src={product.images[0]} className="product-image" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default OrderItem
