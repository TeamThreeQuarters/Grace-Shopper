import React from 'react'

const SingleProduct = props => (
  <div className="container">
    <span>
      <img src={props.product.images} className="product-image" />
    </span>
    <span>
      {props.product.name} : {props.product.description}
    </span>
  </div>
)

export default SingleProduct
