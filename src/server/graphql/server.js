import express from 'express'
import bodyParser from 'body-parser'
import { apolloExpress, graphiqlExpress } from 'apollo-server'
import { addMockFunctionsToSchema } from 'graphql-tools'
import schema from './schema'
import mocks from './mocks'

const port = 3000

const app = express()

// addMockFunctionsToSchema({
//   schema,
//   mocks,
//   preserveResolvers: true
// })

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
)

app.use(
  '/graphql',
  bodyParser.json(),
  apolloExpress({ schema })
)

app.listen(port, () => console.log(`graphql server listen on ${port}`))
