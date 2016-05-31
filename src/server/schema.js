const typeDefinitions = `
type Container {
  id: String!
  name: String!
  image: String!
  running: Boolean!
  command: String!
}

type Query {
  getContainerList: [Container]
  getContainer(id: String): Container
}

schema {
  query: Query
}
`

export default [typeDefinitions]
