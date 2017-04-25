import React from 'react'

const ProductDetail = props => {
  const product = props.product
  const inventories = product.inventories
  console.log(props.product);

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
            {inventories && Object.keys(inventories).length ? <span>Price: ${inventories[0].price}</span>
              : <span>Out of Stock</span>}
            <p>{props.product.description}</p>
            <button className="btn-primary" onClick={
              () => props.addToShoppingCart(product.inventory[0].id, 1)
            }>Add to Cart</button>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetail
