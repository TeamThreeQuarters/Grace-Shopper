'use strict'

import React from 'react'

import ProductSummary from './ProductSummary'

const ProductCatalog = props => {
  const products = props.products

  return (
    <div className="container">
      <div>
        <h1><strong>Products:</strong></h1>
        <hr />
      </div>
      <div className="products-container">
        {products && products.map((product, i) => (
          <div key={product.id}>
            <ProductSummary product={product} />
            {i !== products.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCatalog
