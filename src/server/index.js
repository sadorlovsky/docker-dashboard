import 'babel-polyfill'
import Koa from 'koa'
import staticMiddleware from 'koa-static'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import devConfig from '../../webpack.config'

const compile = webpack(devConfig)
const app = new Koa()
app.use(devMiddleware(compile, {
  noInfo: false,
  quiet: false,
  publicPath: devConfig.output.publicPath,
  stats: {
    colors: true
  }
}))
app.use(hotMiddleware(compile, {}))
app.use(staticMiddleware('public'))
app.listen(3000)
