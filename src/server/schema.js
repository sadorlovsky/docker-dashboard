const typeDefinitions = `
type Container {
  id: String!
  name: String!
  image: String!
  running: Boolean!
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
