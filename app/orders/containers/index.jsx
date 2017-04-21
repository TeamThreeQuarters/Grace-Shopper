'use strict'

import { connect } from 'react-redux'

import Orders from '../components'

const mapStateToProps = state => ({
  // products: state.products.products
})

const mapDispatchToProps = () => ({})

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)

export default OrdersContainer
