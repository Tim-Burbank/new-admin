'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    index:[
    path.join(__dirname, 'src/index.js')
  ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    // publicPath:""
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router':'ReactRouter',
    // "configed":"configed"
  },
  plugins: [
    // new CommonsChunkPlugin('common.js',['index']),
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react','stage-0'],
        }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader",'raw')
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      { test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url?limit=10240&name=img/[name].[ext]'
      }
    ]
  }
};
