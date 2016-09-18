import { makeExecutableSchema } from 'graphql-tools'
import { pubsub } from './subscriptions'
import resolvers from './resolvers'

const schema = [`
  type Container {
    id: String!
    name: String!
    image: Image!
    running: Boolean!
    command: String
  }

  type Image {
    id: String!
    name: String!
  }

  type Query {
    imageList: [Image]
    image(id: String!): Image
    containerList: [Container]
    container(id: String!): Container
  }

  type Mutation {
    stopContainer(id: String!): Container
    startContainer(id: String!): Container
    restartContainer(id: String!): Container
  }

  schema {
    query: Query
    mutation: Mutation
  }
`]

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
