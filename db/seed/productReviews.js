'use strict'

const db = require('APP/db')
const { ProductReview } = db
const seed = require('./_seed')

const productReviews = seed(ProductReview, ({ orderItems }) => ({
  review1: {
    rating: 5,
    review: 'Not bad',
    order_item_id: orderItems.orderItem1.id
  },
  review2: {
    rating: 4,
    review: 'Pretty good I guess',
    order_item_id: orderItems.orderItem2.id
  }
}))

module.exports = productReviews
