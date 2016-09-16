import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const schema = [`
  type Container {
    id: String!
    name: String!
    image: Image!
    running: Boolean!
  }

  type Image {
    id: String!
    name: String!
  }

  type Query {
    containerList: [Container]
    container(id: String!): Container
  }

  schema {
    query: Query
  }
`]

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
