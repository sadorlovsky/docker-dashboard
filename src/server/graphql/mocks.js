import low from 'lowdb'
import { times } from 'lodash'
import faker from 'faker'

const db = low('db.json')

db.defaults({
  containers: times(
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
    container (_, { id }) {
      return db.get('containers').find({ id }).value()
    },
    containerList (_, { filter }) {
      let find = {}
      if (filter === 'running') {
        find = { running: true }
      }
      if (filter === 'stopped') {
        find = { running: false }
      }
      return db.get('containers')
        .filter(find)
        .value()
    },
    containerTotal () {
      return db.get('containers')
        .size()
        .value()
    }
  })
}

export default mocks
