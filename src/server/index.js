import express from 'express'
import { apolloServer } from 'graphql-tools'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
/* eslint-disable import/default */
import config from '../../webpack.config'
/* eslint-enable import/default */
import schema from './schema'
import resolvers from './resolvers'

const compile = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compile, {
  noInfo: true,
  quiet: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compile))
app.use(express.static('public'))
app.use('/graphql', apolloServer({
  schema,
  // mocks,
  resolvers,
  graphiql: true,
  pretty: true
}))
app.listen(3000, () => console.log('listening on port 3000'))
