import React from 'react'

const ProductDetail = props => {
  const product = props.product

  return (
    <div className="container">
      {product.images &&
        <div className="product-item">
          <span>
            <img src={product.images[0]} className="product-image" />
          </span>
          <h3>{props.product.name}</h3>
          <span>
            {props.product.description}
          </span>
        </div>
      }
    </div>
  )
}

export default ProductDetail
