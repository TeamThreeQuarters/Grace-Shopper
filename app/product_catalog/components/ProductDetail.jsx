import React from 'react'

const ProductDetail = props => {
  const product = props.product

  return (
    <div className="container">
      {product.images &&
        <div className="product-item">
          <div>
            <img src={product.images[0]} className="product-image" />
          </div>
          <div>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetail
