'use strict'

const db = require('APP/db')
const { ProductReview } = db

module.exports = require('express').Router()
  .post('/',
  (req, res, next) =>
    ProductReview.create(req.body)
      .then(newReview => res.json(newReview))
      .catch(next)
  )

  .put('/:id',
  (req, res, next) =>
    ProductReview.findById(req.params.id)
      .then(productReview => productReview.update(req.body)
          .then(newReview => res.json(newReview))
          .catch(next))
      .catch(next)
  )
