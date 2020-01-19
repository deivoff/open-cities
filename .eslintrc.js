const schemaJson = require('./schema.json');

module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  plugins: [
    "security",
    "graphql"
  ],
  extends:  [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    "plugin:security/recommended"
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  overrides: [{
    files: ['*.tsx', '*.ts'],
    rules: {
      'react/prop-types': 0,
      'jsx-a11y/media-has-caption': 0,
      'no-unused-vars': 0
    }
  }],
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "graphql/template-strings": ['error', {
      env: 'apollo',
      tagName: 'FirstGQL',
      validators: 'all',
      schemaJson,
    }],
    "graphql/named-operations": ['warn', {
      schemaJson,
    }],
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
