import low from 'lowdb'
import _ from 'lodash'
import faker from 'faker'

const db = low()

db.defaults({
  containers: _.times(
    faker.random.number({ min: 10, max: 50 }),
    () => ({
      id: faker.random.uuid(),
      name: faker.helpers.slugify(faker.random.word()),
      running: faker.helpers.randomize([true, false]),
      command: faker.hacker.phrase(),
      image: {
        id: faker.random.uuid(),
        name: faker.helpers.slugify(faker.random.word())
      }
    })
  )
}).value()

const mocks = {
  Query: () => ({
    container (root, { id }) {
      return db.get('containers').find({ id }).value()
    },
    containerList () {
      return db.get('containers').value()
    }
  })
}

export default mocks
