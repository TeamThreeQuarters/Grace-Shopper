import { connect } from 'react-redux'

import ShoppingCart from '../components/ShoppingCart'

const mapStateToProps = state => ({
  shoppingCartItems: state.shoppingCart.items
})

const mapDispatchToProps = () => ({})

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartContainer
