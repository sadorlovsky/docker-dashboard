import faker from 'faker'
import NeDB from 'nedb'
import times from 'lodash/times'

const db = new NeDB()
const count = faker.random.number({ min: 10, max: 50 })
const docs = times(count, () => ({
  id: faker.random.uuid(),
  name: faker.helpers.slugify(faker.random.word()),
  image: faker.helpers.slugify(faker.random.word()),
  imageId: faker.random.uuid(),
  running: faker.helpers.randomize([true, false]),
  command: faker.hacker.phrase()
}))
db.insert(docs, err => {
  if (err) {
    console.log(err)
  }
})

const mocks = {
  Query: () => ({
    getContainerList: () => new Promise((resolve, reject) => {
      return db.find({}, (err, containers) => {
        if (err) {
          reject(err)
        }
        resolve(containers)
      })
    }),
    getContainer: (_, { id }) => new Promise((resolve, reject) => {
      return db.findOne({ id: id }, (err, container) => {
        if (err) {
          reject(err)
        }
        resolve(container)
      })
    })
  }),
  Mutation: () => ({
    stopContainer: (_, { id }) => new Promise((resolve, reject) => {
      db.update({ id: id }, { $set: { running: false } }, {}, updateErr => {
        if (updateErr) {
          reject(updateErr)
        }
        db.findOne({ id: id }, (findErr, container) => {
          if (findErr) {
            reject(findErr)
          }
          resolve(container)
        })
      })
    }),
    startContainer: (_, { id }) => new Promise((resolve, reject) => {
      db.update({ id: id }, { $set: { running: true } }, {}, updateErr => {
        if (updateErr) {
          reject(updateErr)
        }
        db.findOne({ id: id }, (findErr, container) => {
          if (findErr) {
            reject(findErr)
          }
          resolve(container)
        })
      })
    })
  })
}

export default mocks
