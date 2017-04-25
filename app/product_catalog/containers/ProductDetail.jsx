import { connect } from 'react-redux'

import ProductDetail from '../components/ProductDetail'
import { addToShoppingCart } from '../../shopping_cart/action-creators'

const mapStateToProps = state => ({
  product: state.products.product
})

const mapDispatchToProps = {
  addToShoppingCart
}

const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetail)

export default SingleProductContainer
