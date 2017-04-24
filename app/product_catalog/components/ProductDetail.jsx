import React from 'react'

const ProductDetail = props => {
  const product = props.product

  return (
    <div className="container">
      {product.images &&
        <div className="product_detail">
          <div>
            <img src={product.images[0]} className="product-image" />
          </div>
          <div className="product_info">
            <span>Fullstack</span>
            <h3>{props.product.name}</h3>
            <span>Price: $9.99</span>
            <p>{props.product.description}</p>
            <button className="btn-primary">Add to Cart</button>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetail
