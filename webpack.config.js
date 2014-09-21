var webpack = require('webpack');
module.exports = {
  entry: './js/components.jsx',
  debug: false,
  output: {
    path: './dist/',
    filename: 'RedditComponents.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.png/, loader: 'url?limit=100000&minetype=image/png' },
      { test: /\.jpg/, loader: 'file' },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({})
  ]
};