const presets = [
  '@babel/preset-typescript',
  '@babel/preset-react',
  'minify',
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: 3,
      modules: false,
    },
  ],
];

const plugins = ['@babel/plugin-proposal-class-properties'];
const only = ['./frontend'];

module.exports = { presets, plugins, only };
