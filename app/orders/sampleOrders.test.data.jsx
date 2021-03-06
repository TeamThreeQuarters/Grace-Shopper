const sampleOrders = [
  {
    'id': 1,
    'paidStatus': true,
    'created_at': '2017-04-24T19:56:52.498Z',
    'updated_at': '2017-04-24T19:56:52.498Z',
    'user_id': 1,
    'orderItems': [
      {
        'id': 1,
        'deliveryStatus': 'delivered',
        'price': '3',
        'quantity': 7,
        'created_at': '2017-04-24T19:56:52.513Z',
        'updated_at': '2017-04-24T19:56:52.513Z',
        'order_id': 1,
        'inventory_id': 1,
        'inventory': {
          'id': 1,
          'quantity': 10,
          'price': '99',
          'created_at': '2017-04-24T19:56:52.505Z',
          'updated_at': '2017-04-24T19:56:52.505Z',
          'vendor_id': 1,
          'product_id': 3,
          'product': {
            'id': 3,
            'name': 'Omri Bernstein',
            'images': [
              'https://cloud.fullstackacademy.com/omri_bernstein.jpg?mtime=20151116210855'
            ],
            'description': 'Lucky instructor teaching the best cohort',
            'tags': [
              'male',
              'funny'
            ],
            'created_at': '2017-04-24T19:56:52.465Z',
            'updated_at': '2017-04-24T19:56:52.465Z',
            'category_id': 1
          },
          'vendor': {
            'id': 1,
            'name': 'FullStack',
            'created_at': '2017-04-24T19:56:52.245Z',
            'updated_at': '2017-04-24T19:56:52.245Z'
          }
        }
      },
      {
        'id': 2,
        'deliveryStatus': 'waiting',
        'price': '4',
        'quantity': 20,
        'created_at': '2017-04-24T19:56:52.513Z',
        'updated_at': '2017-04-24T19:56:52.513Z',
        'order_id': 1,
        'inventory_id': 2,
        'inventory': {
          'id': 2,
          'quantity': 7,
          'price': '75',
          'created_at': '2017-04-24T19:56:52.505Z',
          'updated_at': '2017-04-24T19:56:52.505Z',
          'vendor_id': 2,
          'product_id': 4,
          'product': {
            'id': 4,
            'name': 'Lisa Pan',
            'images': [
              'https://ca.slack-edge.com/T024FPYBQ-U3TBGTLNS-b4d94d9ae896-512'
            ],
            'description': 'Not so lucky fellow',
            'tags': [
              'female',
              'asian'
            ],
            'created_at': '2017-04-24T19:56:52.465Z',
            'updated_at': '2017-04-24T19:56:52.465Z',
            'category_id': 1
          },
          'vendor': {
            'id': 2,
            'name': 'GraceHopper',
            'created_at': '2017-04-24T19:56:52.245Z',
            'updated_at': '2017-04-24T19:56:52.245Z'
          }
        }
      }
    ]
  },
  {
    'id': 2,
    'paidStatus': false,
    'created_at': '2017-04-24T19:56:52.498Z',
    'updated_at': '2017-04-24T19:56:52.498Z',
    'user_id': 1,
    'orderItems': [
      {
        'id': 3,
        'deliveryStatus': 'canceled',
        'price': '5',
        'quantity': 8,
        'created_at': '2017-04-24T19:56:52.514Z',
        'updated_at': '2017-04-24T19:56:52.514Z',
        'order_id': 2,
        'inventory_id': 1,
        'inventory': {
          'id': 1,
          'quantity': 10,
          'price': '99',
          'created_at': '2017-04-24T19:56:52.505Z',
          'updated_at': '2017-04-24T19:56:52.505Z',
          'vendor_id': 1,
          'product_id': 3,
          'product': {
            'id': 3,
            'name': 'Omri Bernstein',
            'images': [
              'https://cloud.fullstackacademy.com/omri_bernstein.jpg?mtime=20151116210855'
            ],
            'description': 'Lucky instructor teaching the best cohort',
            'tags': [
              'male',
              'funny'
            ],
            'created_at': '2017-04-24T19:56:52.465Z',
            'updated_at': '2017-04-24T19:56:52.465Z',
            'category_id': 1
          },
          'vendor': {
            'id': 1,
            'name': 'FullStack',
            'created_at': '2017-04-24T19:56:52.245Z',
            'updated_at': '2017-04-24T19:56:52.245Z'
          }
        }
      }
    ]
  }
]

export default sampleOrders
