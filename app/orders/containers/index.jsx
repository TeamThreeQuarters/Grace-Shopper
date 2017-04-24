'use strict'

import { connect } from 'react-redux'

import Orders from '../components'

const mapStateToProps = state => ({
  orders: state.orders.orders,
  auth: state.auth
})

const mapDispatchToProps = () => ({})

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)

export default OrdersContainer
