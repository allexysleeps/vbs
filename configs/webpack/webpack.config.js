const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const rootPath = path.join(__dirname, '../../');

module.exports = {
  context: path.join(rootPath),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './app.jsx',
  devServer: {
    contentBase: path.join(rootPath, 'build'),
    hot: true,
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0']
          }
        }
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      },
      {
        test: /.sass?$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }

    ]
  },
  output: {
    path: path.join(rootPath, 'build/assets/'),
    filename: 'bundle.min.js',
    publicPath: 'http://localhost:8080/assets/'
  }
};
