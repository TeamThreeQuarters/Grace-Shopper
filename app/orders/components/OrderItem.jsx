'use strict'

import React from 'react'
import { Link } from 'react-router'

const OrderItem = props => {
  const orderItem = props.orderItem;
  const product = props.product;
  const vendor = props.vendor;
  const ratingChangeHandler = props.ratingChangeHandler
  const reviewChangeHandler = props.reviewChangeHandler
  const reviewSubmitHandler = props.reviewSubmitHandler
  const productReview = orderItem.productReview

  return (
    <div className='product-item'>
      <Link to={`/product/${product.name}/${product.id}`}>
        <span>
          <img src={product.images[0]} className="product-order-image" />
        </span>
      </Link>
      <div className="product-information">
        <Link to={`/product/${product.name}/${product.id}`}>
          <h4 className='product-name'>{product.name}</h4>
        </Link>
        <p className='item-delivery-status'>Delivery Status: {orderItem.deliveryStatus}</p>
        <p className='item-price'>Cost: <span>$</span>{orderItem.price}</p>
        <p className='quantity'>Quantity: {orderItem.quantity}</p>
        <p className='vendor-name'>Bought From: {vendor.name}</p>
      </div>
      <div className="product-review">
        <form onSubmit={reviewSubmitHandler}>
          <div className='form-group product-form'>
            <h4>Your Ratings:</h4>
            {productReview && productReview.rating
              ? <div>
                <h4>{productReview.rating} STAR</h4>
                {/* <span className='glyphicon glyphicon-star-empty'></span> */}
              </div>
              : <h4>You did not rate this product</h4>}
            {productReview && productReview.review
              ? <h4>{productReview.review}</h4>
              : <h4>You did not review this product</h4>}
              <label>
                Rating: 
                <input type="number" min="1" max="5" name="rating" onChange={ratingChangeHandler} />
              </label>
              <label>
                Review: 
                <input type="text" name="review" onChange={reviewChangeHandler} />
              </label>
            <input type="submit" className="btn" value="Submit Review" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderItem
