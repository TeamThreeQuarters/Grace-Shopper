import React from 'react'

const ShoppingCart = props => {
  const shoppingCartItems = props.shoppingCartItems

  return (
    <div className="container">
      {/* {console.log('Stupid lint error', shoppingCartItems)} */}
      <h4>Shopping Cart </h4>
      <button>Proceeed to checkout</button>
    </div>
  )
}

export default ShoppingCart
