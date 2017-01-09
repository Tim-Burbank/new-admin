var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  externals: {
    //'jsdom': 'window',
    //'cheerio': 'window',
    //'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['','.js', '.jsx','json'],
    alias: {
      'sinon': 'sinon/pkg/sinon'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: ("style!css!sass?sourceMap=true")
      },
      { test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url',
        query: {limit: 10240}
      }
    ],
    noParse: [
      /\/sinon\.js/
    ]
  }
};
