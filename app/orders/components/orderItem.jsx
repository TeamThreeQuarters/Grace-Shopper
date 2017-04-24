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
  )
}

export default OrderItem
