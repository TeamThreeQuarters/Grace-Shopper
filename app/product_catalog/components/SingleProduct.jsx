import React from 'react'

const SingleProduct = props => (
  <div className="container">
    <span>
      <img src={props.product.images} className="product-image" />
    </span>
    <h3>{props.product.name}</h3>
    <span>
       {props.product.description}
    </span>
  </div>
)

export default SingleProduct
