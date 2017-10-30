const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin('css/[name].css');
const buildPath = 'build';

module.exports = [{
  context: path.join(__dirname, 'src'),
  entry: { app: './entry.js' },
  output: {
    path: path.join(__dirname, buildPath),
    filename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'],
      },
    }, {
      test: /\.json$/,
      loader: 'file-loader',
      options: { name: '[path][name].[ext]' },
    }, {
      test: /\.html$/,
      loader: 'file-loader',
      options: { name: '[path][name].[ext]' },
    }, {
      test: /\.scss$/,
      use: extractPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            // minimize: true
          },
        }, {
          loader: 'sass-loader',
          options: {
          // sassで@importする際に参照するパスを指定
            includePaths: [path.join(__dirname, 'node_modules')],
            sourceMap: true,
            outputStyle: 'expanded',
          },
        }],
      }),
    }, {
      test: /\.(jpg|png)$/,
      loader: 'url-loader',
    }, {
      test: /\.svg$/,
      loaders: [{
        loader: 'babel-loader',
        query: { presets: ['react'] },
      }, {
        loader: 'svg-jsx-loader',
      }],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    extractPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  watchOptions: { poll: 5000 },
  devServer: {
    contentBase: buildPath,
    compress: true,
    host: '127.0.0.1',
    historyApiFallback: true,
  },
},

{
  context: path.join(__dirname, 'src'),
  entry: { vendor: './vendor.js' },
  output: {
    path: path.join(__dirname, buildPath),
    filename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            // minimize: true
          },
        }, {
          loader: 'sass-loader',
          options: {
          // sassで@importする際に参照するパスを指定
            includePaths: [path.join(__dirname, 'node_modules')],
            sourceMap: true,
            outputStyle: 'expanded',
          },
        }],
      }),
    }, {
      // test: /\.(jpg|png|woff|woff2|eot|ttf|otf|svg)$/,
      // loader: 'url-loader',
    }],
  },
  // resolve: {
  //   extensions: ['.css', '.scss'],
  // },
  devtool: 'source-map',
  plugins: [extractPlugin],
}];
