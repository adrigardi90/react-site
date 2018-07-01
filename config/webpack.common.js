const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const basePath = __dirname;
const root = path.join(basePath, "..");

module.exports = {

  context: path.join(root, "src"),

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  entry: {
    app: './main.tsx',
    appStyles: './app.scss',
    vendor: [
      'react',
      'react-dom',
      'lodash',
      'react-router-dom'
    ],
    babel: 'babel-polyfill'
  },

  output: {
    path: path.join(root, 'dist/client'),
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

      // CSS MODULES

      // {
      //   test: /\.scss$/,
      //   include: path.join(basePath, 'src/components/'),
      //   exclude: /node_modules/,
      //   use: ExtractTextPlugin.extract({
      //   fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           modules: true,
      //           sourceMap: true,
      //           // importLoaders: 2,
      //           localIdentName: '[name]__[local]___[hash:base64:5]',
      //           camelCase: true,
      //         }
      //       },
      //     'sass-loader'
      //     ]
      //   })
      // },

      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },

      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          name: './images/[name].[ext]',
          limit: 10
        }
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
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },

      {
        test: /\.html$/,
        use: 'html-loader'
      }

    ]
  },
  plugins: [

    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),

    new CleanWebpackPlugin([
      './dist/client',
    ], { root: root }),
  ]
}
