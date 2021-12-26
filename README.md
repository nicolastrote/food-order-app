# React Native Food Order App

A react native app to exercise on react native, typescript, redux, hooks, ...

![alt text](public/food-order.jpg)

## Table of contents

- [React Native Food Order App](#react-native-food-order-app)
  - [Table of contents](#table-of-contents)
  - [Post Installation](#post-installation)
  - [Initialization](#initialization)
  - [Some missings from https://reactnative.dev/docs/typescript](#some-missings-from-httpsreactnativedevdocstypescript)
  - [Eslint Prettier](#eslint-prettier)
  - [Starting Dev Environment](#starting-dev-environment)


## Post Installation
- if brew not install : 
  - install brew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
  - install node git: `brew install git`
  - install node LTS: `brew install node@16 && brew link --force --overwrite node@16`

- if brew already there: 
  - update brew and all software: `brew update && brew upgrade node git && brew upgrade --cask`
  - last npm : `npm install -g npm@latest`

- Install/upgrade xcode: xcode-select --install
- Install expo-cli: `npm install --global expo-cli`

## Initialization
- `expo init food-order-app`
- chose typescript blank option
- `cd food-order-app`
- `mkdir -p src/components src/utils src/redux src/screens src/images`
- `npm install axios moment react-navigation react-navigation-stack react-navigation-tabs`
- from https://reactnavigation.org/docs/getting-started : 
  - `npm install react-native-screens react-native-safe-area-context`
- expo-location: `expo install expo-location`
- check with npm install if all dependencies don t throw error (ignore warnings) with `npm install`

## Some missings from https://reactnative.dev/docs/typescript
source: (https://reactnative.dev/docs/typescript)[https://reactnative.dev/docs/typescript]

- `npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer`

- Add in tsconfig.json in the root of your project
  ```
  {
    "compilerOptions": {
      "allowJs": true,
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true,
      "isolatedModules": true,
      "jsx": "react-native",
      "lib": ["es2017"],
      "moduleResolution": "node",
      "noEmit": true,
      "strict": true,
      "target": "esnext"
    },
    "exclude": [
      "node_modules",
      "babel.config.js",
      "metro.config.js",
      "jest.config.js",
      "__tests__/**/*-test.ts"
    ]
  }
  ```
- Create a jest.config.js file to configure Jest to use TypeScript:
  ```
    module.exports = {
      preset: 'react-native',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
    };
  ```

## Eslint Prettier
source: (react-native-community)[https://github.com/react-native-community/cli]

- install: 
```
  npm install --save-dev eslint@^7.14.0 eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-config-prettier @react-native-community/eslint-config@^2.0.0
```
- create .eslintrc.js:
  ```JS
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
  ```
- in .tsconfig.json
  ```JSON
  {
    "extends": "expo/tsconfig.base",
    "compilerOptions": {
      "allowJs": true,
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true,
      "isolatedModules": true,
      "jsx": "react-native",
      "lib": ["es2017"],
      "moduleResolution": "node",
      "noEmit": true,
      "strict": true,
      "target": "esnext"
    },
    "exclude": [
      "node_modules",
      "babel.config.js",
      "metro.config.js",
      "jest.config.js",
      "__tests__/**/*-test.ts"
    ]
  }
  ```
- package.json : 
  ```JSON
  "script": {
    ...
    "clean": "rm -rf node_modules && rm -f package-lock.json && npm i",
    "lint": "eslint --ext .ts,.tsx . --cache --report-unused-disable-directives"
  }
  ```
- hooks:
  - `npm install --save-dev pretty-quick husky`
  - add in package.json
    ```JSON
    "husky": {
          "hooks": {
          "pre-commit": "npm run lint"
          }
      }
    ```
- install in VSCode those pluggins:
  - (eslint)[https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint]
  - (prettier)[https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode]
- add in settings.json of VSCode:
  ```JSON
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
  ```
## Starting Dev Environment
- npm run ios