const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const basePath = __dirname;
const root = path.join(basePath, "..");

module.exports = {

  context: path.join(root),

  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  },

  entry: './server/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(root, 'dist/server'),
    filename: 'server.js'
  },


  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
            },
          },

          {
            test: /\.scss$/,
            exclude: /node_modules/,
            //exclude: path.join(basePath, 'src/components/'),
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                'sass-loader',
              ]
            }),
          },
          {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
              name: './images/[name].[ext]',
              limit: 100
            }
          },
        { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: 'server.css',
        disable: false,
        allChunks: true,
      }),

      new webpack.ProvidePlugin({
        "React": "react",
      }),

      new CleanWebpackPlugin([
        './dist/server',
      ], { root: root }),
  ]
}