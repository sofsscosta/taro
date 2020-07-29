module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'standard'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-implicit-dependencies': 0,
    'max-len': ['error', 170],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'comma-dangle': ['error', { functions: 'ignore' }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'no-console': 'off',
    'jsx-a11y/accessible-emoji': [0],
    '@typescript-eslint/no-var-requires': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'array-element-newline': 0,
    'destructuring-element-newline': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0
  }
}
