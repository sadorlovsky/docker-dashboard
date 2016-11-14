import low from 'lowdb'
import { times } from 'lodash'
import faker from 'faker'
import moment from 'moment'
import { match, when } from 'match-when'

const db = low()

db.defaults({
  containers: times(
    faker.random.number({ min: 10, max: 50 }),
    () => {
      const running = faker.helpers.randomize([true, false])
      const state = running ? 'running' : faker.helpers.randomize([
        'created', 'restarting', 'paused', 'exited', 'dead'
      ])
      return {
        id: faker.random.uuid(),
        name: faker.helpers.slugify(faker.random.word()),
        running,
        command: faker.hacker.phrase(),
        image: {
          id: faker.random.uuid(),
          name: faker.helpers.slugify(faker.random.word())
        },
        created: faker.date.between(moment().subtract(1, 'year'), moment().subtract(1, 'days')),
        state,
        status: 'mocked status'
      }
    }
  )
}).value()

const mocks = {
  Query: () => ({
    container (_, { id }) {
      return db.get('containers').find({ id }).value()
    },
    containerList (_, { filter }) {
      const condition = match({
        [when('running')]: { running: true },
        [when('stopped')]: { running: false },
        [when()]: {}
      })(filter)
      return db.get('containers')
        .filter(condition)
        .value()
    },
    containerTotal () {
      return db.get('containers')
        .size()
        .value()
    }
  }),
  Mutation: () => ({
    stopContainer (_, { id }) {
      return db.get('containers')
        .find({ id })
        .assign({ running: false, state: 'exited' })
        .value()
    },
    startContainer (_, { id }) {
      return db.get('containers')
        .find({ id })
        .assign({ running: true, state: 'running' })
        .value()
    }
  })
}

export default mocks
