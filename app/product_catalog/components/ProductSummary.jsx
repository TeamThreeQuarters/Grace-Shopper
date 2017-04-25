import React from 'react'
import { Link } from 'react-router'

const ProductSummary = props => {
  const product = props.product
  const inventories = product.inventories
  console.log(product.name, 'Inventories: ', props)

  return (
    <div className="product-item">
      <Link to={`/product/${product.name}/${product.id}`}>
        <img src={product.images[0]} className="product-image" />
      </Link>
      <div className="product-information">
        <Link to={`/product/${product.name}/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        {inventories && Object.keys(inventories).length ? <h5>${inventories[0].price}</h5>
          : <h5>Out of Stock</h5>
        }
        <h5>RATINGS</h5>
      </div>
      <div className="product-description">
        <h5><strong>Product Description</strong></h5>
        <h5>{product.description}</h5>
      </div>
    </div >
  )
}

export default ProductSummary
