/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer-stylus');
const rupture = require('rupture');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const urlLoader = {
  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
  },
};

const stylusLoader = {
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
        use: [autoprefixer(), rupture()],
      },
    },
  ],
};

const tsLoader = {
  test: /\.ts$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
    },
  ],
};

const webpackConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: './frontend/static/ts/index.ts',
  output: {
    path: `${__dirname}/src/public/`,
    filename: './js/main.bundle.js',
  },
  module: {
    rules: [stylusLoader, urlLoader, tsLoader],
  },
  resolve: { extensions: ['.ts', '.js'] },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].bundle.css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = webpackConfig;
