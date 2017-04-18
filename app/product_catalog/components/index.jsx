'use strict'

import React from 'react'

const ProductCatalog = props => (
  <div>
    <div>
      These are all of our products:
    </div>
    <div>
      {props.products.map(product => (
        <div key={product.id}>
          <span><img src={product.images[0]} style={{ width: 200, height: 200 }} /></span>
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  </div>
)

export default ProductCatalog
