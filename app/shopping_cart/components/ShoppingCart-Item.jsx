import React from 'react'

const ShoppingCartItem = props => (
    <div className="shopping_cart_item">
      <img src={props.product.images[0]} className="product-image" />
      <Link to={'Product Name'}></Link>
      <p>Desription goes here</p>
    </div>
  )

export default ShoppingCartItem
