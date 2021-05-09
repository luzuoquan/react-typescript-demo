const path = require('path');

module.exports = {
  root: true, 
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'import', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname, './src')
            },
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          },
        }
      },
    }
  },
  env: {
    browser: true,
  },
  globals: {
    window: true,
    ENV: true,
  },
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": 1,
    "arrow-parens": 0,
    "no-shadow": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface"
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/no-explicit-any": 0,
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      tsx: "never",
      js: "never",
      jsx: "never",
      json: "never",
    }],
    "import/no-unresolved": [2, {commonjs: true, amd: true}]
  }
}