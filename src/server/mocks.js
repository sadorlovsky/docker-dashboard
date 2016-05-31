import faker from 'faker'

const mocks = {
  Container: () => ({
    id: () => faker.random.uuid(),
    name: () => faker.helpers.slugify(faker.random.word()),
    image: () => faker.helpers.slugify(faker.random.word()),
    running: () => faker.helpers.randomize([true, false]),
    command: () => faker.hacker.phrase()
  })
}

export default mocks
