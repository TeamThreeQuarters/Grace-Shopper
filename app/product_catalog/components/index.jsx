'use strict'

import React from 'react'
import { Link } from 'react-router'

const ProductCatalog = props => (
  <div className="container">
    <div>
      Products:
    </div>
    <div>
      {props.products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.name}/${product.id}`}>
            <span>
              <img src={product.images[0]} className="product-image" />
            </span>
            <span> {product.name} : {product.description} </span>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  </div>
)

export default ProductCatalog
