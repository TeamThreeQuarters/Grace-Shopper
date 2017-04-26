import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import axios from 'axios'

import ShoppingCart from '../components/ShoppingCart'

class ShoppingCartLocalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: null }
    this.checkout = this.checkout.bind(this)
  }

  checkout = () => {
    if (Object.keys(this.props.shoppingCartItems).length) {
      axios.post('api/orders', {})
        .then(res => {
          if (res.status === 201) {
            return axios.delete('/api/shoppingCart/items')
              .then(res => {
                if (res.status === 202) {
                  browserHistory.push('/orders')
                }
              })
              .catch(err => console.error('Could not delete shopping cart items', err))
          }
        })
        .catch(err => console.error('Could not checkout', err))
    } else {
      this.setState({ message: 'There is nothing in your cart.' })
    }
  }

  render() {
    return (
      <ShoppingCart
        {...this.props}
        {...this.state}
        checkout={this.checkout} />
    )
  }
}

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.items
})

const mapDispatchToProps = () => ({})

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartLocalContainer)

export default ShoppingCartContainer
