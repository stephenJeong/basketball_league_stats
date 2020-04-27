const path = require('path');

module.exports = {
  entry: [
    './client/components/App.jsx'  ],
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'clientBundle.js',
    publicPath: '/',
    chunkFilename: '[id].[name].[chunkhash:8].js',
  },
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
