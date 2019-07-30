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

module.exports = withPlugins(
  [
    [
      withStylus,
      {
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
      }
    ],
    [
      withReactSvg,
      {
        include: path.resolve(__dirname, 'frontend/assets/svg')
      }
    ]
  ],
  {
    distDir: 'build'
  }
);
