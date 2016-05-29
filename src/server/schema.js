import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql'
import { getContainerList } from './docker'

const ContainerType = new GraphQLObjectType({
  name: 'Container',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    containers: {
      type: new GraphQLList(ContainerType),
      resolve: () => {
        return getContainerList()
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: QueryType
})

export default schema
