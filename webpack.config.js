/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  autoprefixer = require('autoprefixer-stylus'),
  rupture = require('rupture'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');

const srcPath = subdir => {
  console.log(path.join(__dirname, 'src', subdir));
  return path.join(__dirname, 'src', subdir);
};

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
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@controllers': srcPath('controllers'),
      '@helpers': srcPath('helpers'),
      '@models': srcPath('models'),
      '@interfaces': srcPath('interfaces'),
    },
  },
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
