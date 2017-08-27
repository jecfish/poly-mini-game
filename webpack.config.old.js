const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
// const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    vendor: ['./src/vendor'],
    app: './src/index'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          // options: {
          //   attrs: [':data-src']
          // }
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: true }),
    new CommonsChunkPlugin({
      // The order of this array matters
      names: ['vendor'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
};