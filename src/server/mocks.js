import faker from 'faker'
import { MockList } from 'graphql-tools'

const mocks = {
  Query: () => ({
    getContainerList: () => new MockList([2, 50])
  }),
  Container: () => ({
    id: () => faker.random.uuid(),
    name: () => faker.helpers.slugify(faker.random.word()),
    image: () => faker.helpers.slugify(faker.random.word()),
    imageId: () => faker.random.uuid(),
    running: () => faker.helpers.randomize([true, false]),
    command: () => faker.hacker.phrase()
  })
}

export default mocks
