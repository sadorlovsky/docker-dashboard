import path from 'path'

export default {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    './src/client/index.js'
  ],
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
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
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  node: {
    fs: 'empty'
  }
}
