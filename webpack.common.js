const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'frontend'),
        ],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node'
};