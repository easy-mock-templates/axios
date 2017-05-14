const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './example/demo.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'demo.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HTMLPlugin()
  ]
};
