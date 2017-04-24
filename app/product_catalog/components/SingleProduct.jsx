import React from 'react'

const SingleProduct = props => {
  const product = props.product

  return (
    <div className="container">
      {product.images &&
        <div className="product-item">
          <span>
            <img src={product.images[0]} className="product-image" />
          </span>
          <span>
            {product.name} : {product.description}
          </span>
        </div>
      }
    </div>
  )
}

export default SingleProduct
