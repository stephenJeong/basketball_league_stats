const path = require('path');
const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.join(__dirname, '/server/index.js');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [
    'babel-polyfill',
    SRC_DIR,
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  target: 'node',
  externals: [  nodeExternals() ],
  module: {
    rules: [
      {
        test: [ /\.js?$/, /\.jsx?$/, ],
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
