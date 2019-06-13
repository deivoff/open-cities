const TerserPlugin = require('terser-webpack-plugin')
      MiniCssExtractPlugin = require('mini-css-extract-plugin')
      autoprefixer = require('autoprefixer-stylus'),
      rupture = require('rupture'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './frontend/static/ts/index.ts',
  output: {
    path: `${__dirname}/src/public/`,
    filename: './js/main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              publicPath: '/css/',
            },
          },
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [
                autoprefixer(),
                rupture(),
              ],
            },
          },
        ],
      },
    ]
  },
  resolve: { extensions: ['.ts', '.js'] },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }), 
      new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: './css/[name].bundle.css',
      chunkFilename: '[id].css',
    }),
  ],
};