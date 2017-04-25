import React from 'react'

const ShoppingCart = props => {
  const shoppingCartItems = props.shoppingCartItems

  return (
    <div className="container">
      {/* {console.log('Stupid lint error', shoppingCartItems)} */}
      <h4>Hi, you have </h4>
      {shoppingCartItems && <h4>{shoppingCartItems.length} items in your cart.</h4>}
    </div>
  )
}

export default ShoppingCart
