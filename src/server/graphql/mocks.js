import low from 'lowdb'
import { times } from 'lodash'
import faker from 'faker'
import moment from 'moment'

const db = low()

const status = state => {
  if (state === 'dead') {
    return 'Dead'
  }
  if (state === 'created') {
    return 'Created'
  }
  if (state === 'exited') {
    return 'Exited 1 day ago with 123 status'
  }
  if (state === 'paused') {
    return 'Up 1 day (paused)'
  }
  if (state === 'restarting') {
    return 'Restarting 1 day ago'
  }
  if (state === 'running') {
    return 'Up 1 day'
  }
  return ''
}

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
        created: faker.date.between(moment().subtract(1, 'year'), moment().subtract(1, 'days')).getTime(),
        state,
        status: status(state)
      }
    }
  )
}).value()

const mocks = {
  Query: () => ({
    container (_, { id }) {
      return db.get('containers').find({ id }).value()
    },
    containerList () {
      return db.get('containers')
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
