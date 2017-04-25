import React from 'react'
import axios from 'axios'



export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: null}
  }

  checkout = () => {
    axios.post('api/orders', {})
    .then(res => {
      if (res.status === 201) {
        axios.delete('api/shoppingCart/items', {})
        .then(res => {
          if (res.status === 202) {
            this.setState({message: 'Successfully checked out items. Congratulations'})
          } else {
            this.setState({message: 'Could not remove items from shopping cart.'})
          }
        })
      } else {
        this.setState({message: 'There was an error checking out. Too bad.'})
      }
    })
  }

  render() {
    console.log(this.props);
    const shoppingCartItems = this.props.shoppingCartItems
    return (
      <div className="container">
        {/* {console.log('Stupid lint error', shoppingCartItems)} */}
        <h4>Hi, you have </h4>
        {shoppingCartItems && <h4>{shoppingCartItems.length} items in your cart.</h4>}
        <button onClick={this.checkout}>Checkout</button>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    )
  }
}

