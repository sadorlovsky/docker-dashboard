import { createServer } from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { apolloExpress, graphiqlExpress } from 'apollo-server'
import { addMockFunctionsToSchema } from 'graphql-tools'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { pubsub, subscriptionManager } from './graphql/subscriptions'
import schema from './graphql/schema'
import mocks from './graphql/mocks'

// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
//
// import config from '../../webpack.config'

// const compile = webpack(config)

const port = 3000
const app = express()
//
// app.use(webpackDevMiddleware(compile, {
//   noInfo: true,
//   quiet: false,
//   publicPath: config.output.publicPath,
//   stats: {
//     colors: true
//   }
// }))
// app.use(webpackHotMiddleware(compile))

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: true
})

app.use(cors())

app.use(
  '/graphql',
  bodyParser.json(),
  apolloExpress({ schema })
)

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
)

// app.use('/images', express.static('public/images'))
// app.use('*', express.static('public'))
app.listen(port, () => console.log(`graphql server listen on ${port}`))


const ws = createServer((req, res) => {
  res.writeHead(404)
  res.end()
})

ws.listen(8080, () => console.log('ws server listen on 8080'))

new SubscriptionServer({
  subscriptionManager,
  onSubscribe: () => {}
}, ws)
