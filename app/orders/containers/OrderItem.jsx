'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import axios from 'axios'

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
    const productReview = this.props.orderItem.productReview

    const review = {
      rating: this.state.rating,
      review: this.state.review,
      order_item_id: this.props.orderItem.id,
      product_id: this.props.product.id
    }

    if (productReview) {
      const productReviewId = productReview.id
      axios.put(`/api/productReview/${productReviewId}`, review)
        .then(() => browserHistory.push(`/product/${this.props.product.name}/${this.props.product.id}`))
        .catch(err => console.error('Could not submit review', err))
    } else {
      axios.post('/api/productReview', review)
        .then(() => browserHistory.push(`/product/${this.props.product.name}/${this.props.product.id}`))
        .catch(err => console.error('Could not submit review', err))
    }
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
