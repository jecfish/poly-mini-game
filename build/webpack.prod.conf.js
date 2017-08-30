const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    // vendor: ['./src/vendor'],
    app: './src/index'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') }),
    new webpack.NormalModuleReplacementPlugin(
      /environments\/environment\.ts/,
      'environment.prod.ts'
    ),
    // new CommonsChunkPlugin({
    //   // The order of this array matters
    //   names: ['vendor'],
    //   minChunks: Infinity
    // }),
    // not able to uglify, probably related to: https://github.com/Polymer/polymer-cli/issues/388
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, '../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js')
      }
    ]),
    // get around with stupid warning
    new webpack.IgnorePlugin(/vertx/),
  ]
};