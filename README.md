# React Native Food Order App

A react native app to exercise on react native, typescript, redux, hooks, ...

![alt text](public/food-order.jpg)

## Table of contents

- [React Native Food Order App](#react-native-food-order-app)
  - [Table of contents](#table-of-contents)
  - [Post Installation](#post-installation)
  - [Initialization](#initialization)
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

## Starting Dev Environment
- npm run ios