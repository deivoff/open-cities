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
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
      }
    }
  },
  plugins: ['prettier', 'react-hooks']
};
