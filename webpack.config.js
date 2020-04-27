const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/components');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [
    'babel-polyfill',
    `${SRC_DIR}/App.jsx`,
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  target: 'node',
  externals: [  nodeExternals() ],
  module: {
    rules: [
      {
        test: [ /\.js?/, /\.jsx?/, ],
        loader: ['babel-loader',],
        exclude: /node_modules/,
      },
    ],
  },
};
