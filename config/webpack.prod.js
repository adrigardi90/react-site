var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var basePath = __dirname
var root = path.join(basePath, "..");

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
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ]
        }),
      },

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

      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: {
      //       loader: 'css-loader',
      //     },
      //   }),
      // },

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
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?name=./images/[name].[ext]'
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

    // new HtmlWebpackPlugin({
    //   filename: 'index.html', // Name of file in ./dist/
    //   template: 'index.html', // Name of template in ./src
    //   hash: true
    // }),
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: false,
      allChunks: true,
    }),

    new CopyWebpackPlugin([
      //{ from: './images/*.*', to: 'images/', flatten: true },
      {from : './static/*.*' }
    ]),

    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest'],
    // }),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[chunkhash].js',
        minChunks (module) {
          return module.context &&
                 module.context.indexOf('node_modules') >= 0;
        }
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
        'process.env.NODE_ENV': JSON.stringify('production')
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
  ]
}
