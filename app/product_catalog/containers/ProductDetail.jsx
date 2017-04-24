import { connect } from 'react-redux'

import ProductDetail from '../components/ProductDetail'

const mapStateToProps = state => ({
  product: state.products.product
})

const mapDispatchToProps = () => ({})

const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetail)

export default SingleProductContainer
