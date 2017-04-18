'use strict'

const db = require('APP/db')
  , { User, Thing, Favorite, Promise, Product, Category } = db
  , { mapValues } = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    things: things(),
    categories: categories(),
  }

  seeded.products = products(seeded)
  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const categories = seed(Category, {
  instructor: {
    name: 'Instructor'
  },
  staff: {
    name: 'Staff'
  },
  fellow: {
    name: 'Fellow'
  },
  student: {
    name: 'Student'
  }
})

const products = seed(Product, ({ categories }) => ({
  sam: {
    name: 'Sam Wheeler',
    images: ['https://ca.slack-edge.com/T024FPYBQ-U2VKD56EB-59de4a404278-512'],
    description: 'Lucky fellow with the best team',
    category_id: categories.fellow.id,
    tags: ['male', 'white']
  },
  damon: {
    name: 'Damon Ye',
    images: ['https://ca.slack-edge.com/T024FPYBQ-U2VKYATL5-056c42d1e01a-512'],
    description: 'Not so lucky fellow',
    category_id: categories.fellow.id,
    tags: ['male', 'asian']
  },
  omri: {
    name: 'Omri Bernstein',
    images: ['https://cloud.fullstackacademy.com/omri_bernstein.jpg?mtime=20151116210855'],
    description: 'Lucky instructor teaching the best cohort',
    category_id: categories.instructor.id,
    tags: ['male', 'funny']
  },
  lisa: {
    name: 'Lisa Pan',
    images: ['https://ca.slack-edge.com/T024FPYBQ-U3TBGTLNS-b4d94d9ae896-512'],
    description: 'Not so lucky fellow',
    category_id: categories.fellow.id,
    tags: ['female', 'asian']
  },
  jonathan: {
    name: 'Jonathan Liu',
    images: ['https://ca.slack-edge.com/T024FPYBQ-U4AV5DRS7-049eafd784b6-512'],
    description: 'Awesome Student',
    category_id: categories.student.id,
    tags: ['male', 'asian', 'awesome']
  },
  julius: {
    name: 'Julius Cassin',
    images: ['https://ca.slack-edge.com/T024FPYBQ-U4B6VQ82Z-e82b7c066d49-512'],
    description: 'Amazing Student',
    category_id: categories.student.id,
    tags: ['male', 'asian', 'amazing']
  },
  samir: {
    name: 'Samir Awuapara',
    images: ['https://ca.slack-edge.com/T024FPYBQ-U4B4W253P-g01fb1a7a9e3-512'],
    description: 'Terrific Student',
    category_id: categories.student.id,
    tags: ['male', 'white', 'terrific']
  }
}))

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
})

const things = seed(Thing, {
  surfing: { name: 'surfing' },
  smiting: { name: 'smiting' },
  puppies: { name: 'puppies' },
})

const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({ users, things }) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id,    // users.barack is an instance of the User model
      // that we created in the user seed above.
      // The seed function wires the promises so that it'll
      // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
    },
    'god is into smiting': {
      user_id: users.god.id,
      thing_id: things.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      thing_id: things.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      thing_id: things.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
          (all, one) => Object.assign({}, all, { [one.key]: one.value }),
          {}
          )
      )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, { users, things, favorites })
