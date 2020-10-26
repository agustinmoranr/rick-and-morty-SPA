const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'mains.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
      inject: true,
      template: './public/index.html',
      filename: './index.html'
      }
    ),
    new copyWebpackPlugin({
      patterns: [{ 
        from: './src/styles/styles.css',
        to: ''
      }]
    })
  ]
}