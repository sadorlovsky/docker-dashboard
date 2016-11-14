import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { apolloExpress, graphiqlExpress } from 'apollo-server'
import { addMockFunctionsToSchema } from 'graphql-tools'
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
  preserveResolvers: false
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
app.listen(port, () => console.log(`${new Date()} graphql server listen on ${port}`))
