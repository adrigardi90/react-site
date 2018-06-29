const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MakeDirWebpackPlugin = require('make-dir-webpack-plugin');

const basePath = __dirname

module.exports = merge(common, {

  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    rules: []
  },
  plugins: [

    new webpack.NormalModuleReplacementPlugin(
      /src\/environments\/environment\.ts/,
      './environment.prod.ts'
    ),

    new webpack.optimize.ModuleConcatenationPlugin(),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js',
    //   minChunks(module) {
    //     return module.context &&
    //       module.context.indexOf('node_modules') >= 0;
    //   }
    // }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      //path: buildPath,
      excludeChunks: ['base'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    // well-known folder for cerboot certificate
    // new MakeDirWebpackPlugin({
    //   dirs: [
    //     { path: './dist/.well-known' },
    //     { path: './dist/.well-known/acme-challenge' }
    //   ]
    // }),
  ]
})
