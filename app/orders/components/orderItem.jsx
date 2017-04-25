'use strict'

import React from 'react'
import { Link } from 'react-router'

const OrderItem = props => {
  const orderItem = props.orderItem;
  const product = props.product;
  const vendor = props.vendor;
  const productReview = orderItem.productReview

  return (
    <div className='product-item'>
      <Link to={`/product/${product.name}/${product.id}`}>
        <span>
          <img src={product.images[0]} className="product-order-image" />
        </span>
      </Link>
      <div className="product-information">
        <h4 className='product-name'>{product.name}</h4>
        <p className='item-delivery-status'>Delivery Status: {orderItem.deliveryStatus}</p>
        <p className='item-price'>Cost: <span>$</span>{orderItem.price}</p>
        <p className='quantity'>Quantity: {orderItem.quantity}</p>
        <p className='vendor-name'>Bought From: {vendor.name}</p>
      </div>
      <div className="product-review">
        <form>
          {productReview && productReview.rating ? <h4>{productReview.rating} STARS</h4>
          : <h4>STARS HERE</h4>}
          {productReview && productReview.review ? <h4>{productReview.review}</h4>
          : <h4>REVIEW HERE</h4>}
        </form>
      </div>
    </div>
  )
}

export default OrderItem
