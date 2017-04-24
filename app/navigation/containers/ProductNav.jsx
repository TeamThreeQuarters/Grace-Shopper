import { connect } from 'react-redux'

import ProductNav from '../components/ProductNav'
import { removeSearchQuery } from '../action-creators'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  removeSearchQuery: () => dispatch(removeSearchQuery())
})

const ProductNavContainer = connect(mapStateToProps, mapDispatchToProps)(ProductNav)

export default ProductNavContainer
