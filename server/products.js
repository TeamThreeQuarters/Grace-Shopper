'use strict'

const db = require('APP/db')
const { Product, Category } = db

module.exports = require('express').Router()
  .get('/',
  (req, res, next) => {
    const whereClause = {}

    if (req.query.keywords) {
      whereClause.name = {
        $ilike: `%${req.query.keywords}%`
      }
    }

    Product.findAll({
      where: whereClause
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
      .then(category => category.getProducts())
      .then(products => res.json(products))
      .catch(next)
  })

  .get('/:id',
  (req, res, next) =>
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(next))
