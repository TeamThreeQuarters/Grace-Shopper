'use strict'

const db = require('APP/db')
const Category = db.model('categories')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) => {
      console.log('/categories')
      Category.findAll()
        .then(categories => res.json(categories.map(category => category.name)))
        .catch(next)
    })
