const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

/*
==============================================================================================================================
SETUP PLUGINS
==============================================================================================================================
*/

// This plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
// Read more: https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

// Webpack hot loading in development
const HMRPlugin = new webpack.HotModuleReplacementPlugin();

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize:true});

// This plugin makes sure that common dependcies will not be in every single module
const commonChunksPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

// This plugin helps define variables that could be accessed globally 
const definePlugin = new webpack.DefinePlugin({
  DEVELOPMENT: JSON.stringify(DEVELOPMENT),
  PRODUCTION: JSON.stringify(PRODUCTION)
})

const autoprefixer = require('autoprefixer');

// This plugin copies local files to the build folder
const CopyWebpack = require('copy-webpack-plugin');
const copyWebpackPlugin = new CopyWebpack([
  { from: './assets', to: './assets' }
])

// Extract text from a bundle into a separate file
const ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");


// Put all shared (dev/prod) plugins in an array
const plugins = [
  HtmlWebpackPluginConfig,
  definePlugin,
  copyWebpackPlugin,
  ExtractTextPluginConfig,

]


/*
==============================================================================================================================
DEFINE DEVELOPMENT/PRODUCTION SPECIFIC CONFIGURATIONS
==============================================================================================================================
*/

if (DEVELOPMENT) {

  var entry = [
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // entry point for the app
    './client/index.js',
  ]
	plugins.push(HMRPlugin);
} else {

  var entry = [
    // entry point for the app
    './client/index.js',
  ]

  plugins.push(uglifyPlugin);
}





/*
==============================================================================================================================
EXPORT MODULE
==============================================================================================================================
*/

module.exports = {

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '^/*': {
        target: 'http://localhost:8080/',
        secure: false
      }
    }
  },

  //entry file where the bundling happens
  entry: entry,

  // location where bundled js is saved
  output: {
    publicPath: '/',
    path: path.resolve('build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [

    // Setup Babel
    {
      test: /\.js$/,
      use: [
      {
        loader: 'babel-loader',
        query: { compact: false },
      }
      ]
    },

    {
      test: /\.jsx$/, 
      use: [
      {
        loader: 'babel-loader',
        query: { compact: false },
      }
      ]
    },

    // Setup loaders for assets
    {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [
      {
        loader: 'url-loader?limit=10000',
      }
      ]
    },


    // Setup loaders for css/scss files
    {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
        'css-loader', 
        { loader: "sass-loader",
          options: {
            data: "@import 'config'; ",
            includePaths: [
              path.resolve(__dirname, './client/')
            ]
          }
        }, 
        { loader: "postcss-loader",
          options: {
            plugins: function() {
              return [autoprefixer];
            }
          }
        }]
      })

      // [{
      //   loader: 'style-loader',
      //   query: { compact: false }
      // }, {
      //   loader: "css-loader",
      //   query: { url: false, compact: false, modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' },
      // }, {
      //   loader: "sass-loader",
      //   options: {
      //     data: "@import 'config'; ",
      //     includePaths: [
      //       path.resolve(__dirname, './client/')
      //     ]
      //   }
      // }, {
      //   loader: "postcss-loader",
      //   options: {
      //     plugins: function() {
      //       return [autoprefixer];
      //     }
      //   }
      // }]
    }

    ]
  },
  
  plugins: plugins
}