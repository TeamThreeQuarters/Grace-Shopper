import React from 'react'

const ShoppingCart = props => {
  const shoppingCartItems = props.shoppingCartItems
  const checkout = props.checkout
  const message = props.message
  const cartCount = Object.keys(shoppingCartItems).length

  return (
    <div className="container">
      <h4>Hi, you have </h4>
      {shoppingCartItems && <h4>{cartCount} items in your cart.</h4>}
      <button onClick={checkout}>Checkout</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default ShoppingCart
