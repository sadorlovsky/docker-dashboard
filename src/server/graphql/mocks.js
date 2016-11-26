import low from 'lowdb'
import { times, toNumber } from 'lodash'
import faker from 'faker'
import moment from 'moment'

const db = low()

const status = (state, created) => {
  const getDate = suffix => moment(
    toNumber(
      faker.date.between(moment(toNumber(created)), moment()).getTime()
    )
  ).fromNow(suffix)
  if (state === 'dead') {
    return 'Dead'
  }
  if (state === 'created') {
    return 'Created'
  }
  if (state === 'exited') {
    return `Exited ${getDate()} ago with 123 status`
  }
  if (state === 'paused') {
    return `Up ${getDate(true)} (paused)`
  }
  if (state === 'restarting') {
    return `Restarting ${getDate()}`
  }
  if (state === 'running') {
    return `Up ${getDate(true)}`
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
      const created = faker.date.between(moment().subtract(1, 'year'), moment().subtract(1, 'days')).getTime()
      return {
        id: faker.random.uuid(),
        name: faker.helpers.slugify(faker.random.word()),
        running,
        command: faker.hacker.phrase(),
        image: {
          id: faker.random.uuid(),
          name: faker.helpers.slugify(faker.random.word())
        },
        created,
        state,
        status: status(state, created)
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
