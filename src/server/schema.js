const typeDefinitions = `
type Container {
  id: String!
  name: String!
  image: String!
  imageId: String!
  running: Boolean!
  command: String!
}

type Image {
  id: String!
  created: Int!
  size: Int!,
  virtualSize: Int!,
  repoTags: [String!]
}

type Volume {
  id: String!
}

type Query {
  getImageList: [Image]
  getImage(id: String!): Image
  getContainerList: [Container]
  getContainer(id: String!): Container
}

type Mutation {
  stopContainer(id: String!): Container
  startContainer(id: String!): Container
}

schema {
  query: Query
  mutation: Mutation
}
`

export default [typeDefinitions]
