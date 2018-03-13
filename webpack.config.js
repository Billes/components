'use strict'
/* global require, module, __dirname */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  entry: path.resolve(__dirname, 'example/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: require.resolve('babel-loader'),
        exclude: /(node_modules)/,
        options: {
          plugins: ["transform-object-entries", "transform-object-rest-spread"]
        }
      },
      {
        test: /(\.css)$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, 'example/src'),
      '@billes/components': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Example',
      template: path.resolve(__dirname, 'example/index.html')
    })
  ]
}
