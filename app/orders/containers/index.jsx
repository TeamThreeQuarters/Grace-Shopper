'use strict'

import React from 'react'
import { connect } from 'react-redux'

import Orders from '../components'
import { getUserOrders } from 'APP/app/orders/action-creators'

class OrdersLocalContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth !== this.props.auth) this.props.getUserOrders()
  }

  render() {
    return (
      <Orders 
      {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  getUserOrders: () => dispatch(getUserOrders())
})
// const mapDispatchToProps = {
//   getUserOrders
// }

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersLocalContainer)

export default OrdersContainer
