import { connect } from 'react-redux'

import SingleProduct from '../components/SingleProduct'

const mapStateToProps = state => ({
  product: state.products.product
})

const mapDispatchToProps = () => ({})

const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(SingleProduct)

export default SingleProductContainer
