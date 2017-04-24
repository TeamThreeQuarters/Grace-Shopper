'use strict'
const db = require('APP/db')
const { Product } = db
const seed = require('./_seed')

const products = seed(Product, ({ categories }) => (
  {
    sam: {
      name: 'Sam Wheeler',
      images: ['https://ca.slack-edge.com/T024FPYBQ-U2VKD56EB-59de4a404278-512'],
      description: 'Lucky fellow with the best team',
      category_id: categories.officeHours.id,
      tags: ['male', 'white']
    },
    damon: {
      name: 'Damon Ye',
      images: ['https://ca.slack-edge.com/T024FPYBQ-U2VKYATL5-056c42d1e01a-512'],
      description: 'Not so lucky fellow',
      category_id: categories.officeHours.id,
      tags: ['male', 'asian']
    },
    omri: {
      name: 'Omri Bernstein',
      images: ['https://cloud.fullstackacademy.com/omri_bernstein.jpg?mtime=20151116210855'],
      description: 'Lucky instructor teaching the best cohort',
      category_id: categories.officeHours.id,
      tags: ['male', 'funny']
    },
    lisa: {
      name: 'Lisa Pan',
      images: ['https://ca.slack-edge.com/T024FPYBQ-U3TBGTLNS-b4d94d9ae896-512'],
      description: 'Not so lucky fellow',
      category_id: categories.officeHours.id,
      tags: ['female', 'asian']
    },
    jonathan: {
      name: 'Jonathan Liu',
      images: ['https://ca.slack-edge.com/T024FPYBQ-U4AV5DRS7-049eafd784b6-512'],
      description: 'Awesome Student',
      category_id: categories.officeHours.id,
      tags: ['male', 'asian', 'awesome']
    },
    julius: {
      name: 'Julius Cassin',
      images: ['https://ca.slack-edge.com/T024FPYBQ-U4B6VQ82Z-e82b7c066d49-512'],
      description: 'Amazing Student',
      category_id: categories.officeHours.id,
      tags: ['male', 'asian', 'amazing']
    },
    samir: {
      name: 'Samir Awuapara',
      images: ['https://ca.slack-edge.com/T024FPYBQ-U4B4W253P-g01fb1a7a9e3-512'],
      description: 'Terrific Student',
      category_id: categories.officeHours.id,
      tags: ['male', 'white', 'terrific']
    }
  })
)

module.exports = products
