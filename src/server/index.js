import express from 'express'
import graphqlHTTP from 'express-graphql'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config'
import schema from './schema'

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
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
app.listen(3000, () => console.log('listening on port 3000'))
