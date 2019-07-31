module.exports = {
  extends: ['@tokenfoundry/eslint-config/react', 'prettier'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  rules: {
    'jsx-quotes': [1, 'prefer-single'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        jsxSingleQuote: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
      }
    }
  },
  plugins: ['prettier']
};
