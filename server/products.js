'use strict'

const db = require('APP/db')
const { Product, Category, Inventory, Vendor, ProductReview } = db

module.exports = require('express').Router()
  .get('/product/:id',
  (req, res, next) =>
    Product.findById(req.params.id, {
      include: [{
        model: Inventory,
        include: [Vendor]
      }, {
        model: ProductReview
      }]
    })
      .then(product => res.json(product))
      .catch(next)
  )

  .get('/',
  (req, res, next) => {
    const where = {}

    if (req.query.keywords) {
      where.name = {
        $ilike: `%${req.query.keywords}%`
      }
    }

    Product.findAll({
      where,
      include: [Inventory, ProductReview]
    })
      .then(products => res.json(products))
      .catch(next)
  })

  .post('/',
  (req, res, next) =>
    Product.create(req.body)
      .then(product => res.status(201).json(product))
      .catch(next))

  .get('/:categoryName',
  (req, res, next) => {
    Category.findOne({
      where: {
        name: req.params.categoryName
      }
    })
      .then(category => category.getProducts({ include: [Inventory, ProductReview] }))
      .then(products => res.json(products))
      .catch(next)
  })
