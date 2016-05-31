const typeDefinitions = `
type Container {
  id: String!
  name: String!
  image: String!
  imageId: String!
  running: Boolean!
  command: String!
}

type Query {
  getContainerList: [Container]
  getContainer(id: String!): Container
}

type Mutation {
  stopContainer(id: String!): String
  startContainer(id: String!): String
}

schema {
  query: Query
  mutation: Mutation
}
`

export default [typeDefinitions]
