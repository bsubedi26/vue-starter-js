# Vue.js starter template

<p align="center">
  <img src="src/assets/images/logo.png" height="100" />
</p>

A VueJS starter-template to get started with [Vue.js](https://github.com/vuejs/vue) library.

Technologies used:
* [Vue.js 2](https://github.com/vuejs/vue)
* [Vue Router 2](https://github.com/vuejs/vue-router)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [SASS](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* ...and many more

## Getting started

1. Be sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed globally.
2. Clone the repo & run `yarn` from the project root

## Single File Components
See [instructions](docs/single-file-components.md) for example usage of [single file components](https://vuejs.org/v2/guide/single-file-components.html).

## Available commands

```sh
yarn start
```

Runs the Webpack module-bundler, starts watching for changes & launches the BrowserSync server to [http://localhost:3000](http://localhost:3000) (it's possible to change the port from `package.json` config-section). Uses [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```sh
yarn lint:js
```

Lints javascript-files inside `/src` directory

```sh
yarn build
```

Runs the webpack module-bundler with production-settings (compress etc.) and builds the project to `/build` directory.