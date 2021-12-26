module.exports = {
  extends: [
      '@react-native-community',
      'plugin:import/errors',
      'airbnb-typescript'
    ],
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'es5',
        singleQuote: true,
        endOfLine: 'auto',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        "tabWidth": 2,
      },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    'import/namespace': 'off',
    '@typescript-eslint/semi': 'off',
  },
  plugins: ['react-native', '@typescript-eslint', 'jest'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};