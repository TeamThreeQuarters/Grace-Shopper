import React from 'react'

const ShoppingCart = props => {
  const shoppingCartItems = props.shoppingCartItems
  const checkout = props.checkout
  const message = props.message
  const cartCount = Object.keys(shoppingCartItems).length
  return (
    <div className="container shopping_cart">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3 style={{marginTop: 10}}>Shopping Cart </h3>
        <button style={{height: 30}} onClick={checkout}>Checkout</button>
      </div>
      <div style={{display: 'flex'}}>
        {shoppingCartItems && <h4>{cartCount} items in your cart.</h4>}
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export default ShoppingCart
