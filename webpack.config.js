const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    './src/client/index.js'
  ],
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?plugins=react-hot-loader/babel',
        include: [
          path.join(__dirname, 'src')
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
