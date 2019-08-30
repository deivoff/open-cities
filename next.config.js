/* eslint-disable global-require */

// Icons
const withReactSvg = require('next-react-svg');
const path = require('path');

// Styles
const withStylus = require('@zeit/next-stylus');
const rupture = require('rupture');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');
const nib = require('nib');
const withPlugins = require('next-compose-plugins');

const styleConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:4]'
  },
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer({ flexbox: 'no-2009' }),
        require('postcss-css-variables')
      ])
    ]
  }
};

const iconConfig = {
  include: path.resolve(__dirname, 'frontend/assets/svg')
};

module.exports = withPlugins(
  [[withStylus, styleConfig], [withReactSvg, iconConfig]],
  {
    distDir:
      // eslint-disable-next-line no-nested-ternary
      process.env.NEXT_ENV
        ? process.env.NEXT_ENV === 'staged'
          ? 'build/_next'
          : 'build'
        : '_next'
  }
);
