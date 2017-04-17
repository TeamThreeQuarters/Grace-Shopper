'use strict'

import { connect } from 'react-redux'

import ProductCatalog from '../components'

const mapStateToProps = state => ({
  products: state.products.products
})

const mapDispatchToProps = dispatch => ({})

const ProductCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(ProductCatalog)

export default ProductCatalogContainer
