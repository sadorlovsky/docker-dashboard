const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const fontMagician = require('postcss-font-magician')
const lost = require('lost')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './src/client/index'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve('src', 'client')],
        loaders: ['babel']
      },
      {
        test: /\.sss/,
        include: [path.resolve('src', 'client')],
        loader: 'style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
      }
    ]
  },
  postcss () {
    return [
      cssnext,
      fontMagician,
      lost
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
