'use strict'

import React from 'react'
import { connect } from 'react-redux'

import OrderItem from '../components/OrderItem'

class OrderItemLocalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      review: ''
    }
    this.ratingChangeHandler = this.ratingChangeHandler.bind(this)
    this.reviewChangeHandler = this.reviewChangeHandler.bind(this)
    this.reviewSubmitHandler = this.reviewSubmitHandler.bind(this)
  }

  ratingChangeHandler(event) {
    this.setState({ rating: event.target.value })
  }

  reviewChangeHandler(event) {
    this.setState({ review: event.target.value })
  }

  reviewSubmitHandler(event) {
    event.preventDefault()
  }

  render() {
    return (
      <OrderItem
      {...this.props}
      ratingChangeHandler={this.ratingChangeHandler}
      reviewChangeHandler={this.reviewChangeHandler}
      reviewSubmitHandler={this.reviewSubmitHandler} />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

const OrderItemContainer = connect(mapStateToProps, mapDispatchToProps)(OrderItemLocalContainer)

export default OrderItemContainer
