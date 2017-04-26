'use strict'

const db = require('APP/db')
const { ProductReview } = db
const seed = require('./_seed')

const productReviews = seed(ProductReview, ({ orderItems, products }) => ({
  review1: {
    rating: 5,
    review: 'Not bad',
    order_item_id: orderItems.orderItem1.id,
    product_id: products.omri.id
  },
  review2: {
    rating: 4,
    review: 'Pretty good I guess',
    order_item_id: orderItems.orderItem2.id,
    product_id: products.lisa.id
  },
  review3: {
    rating: 3,
    review: 'Meh',
    order_item_id: orderItems.orderItem3.id,
    product_id: products.omri.id
  },
  review4: {
    rating: 1,
    review: 'lol',
    order_item_id: orderItems.orderItem5.id,
    product_id: products.sam.id
  }
}))

module.exports = productReviews
