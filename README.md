# Simple Starter for TypeScript Development with Visual Studio Code

This repository contains a simple but ready-to-use configuration for developing with [TypeScript](http://www.typescriptlang.org/) in [Visual Studio Code](https://code.visualstudio.com/):

* TypeScript (2.7) is locally installed and configured:
  * source folder is set to `src/`
  * output folder is set to `dist/` (including source maps)
  * target is set to `es6` (NodeJS 8)
  * strict mode is enabled
* VSCode (Default) Task Configuration `build` for compiling the source files to `dist/`
* VSCode Debug Configuration `Run Main Application` for debugging the compiled application. Before the app is launched, it's compiled using
  the `build` task
* For formatting source code, [Prettier](https://github.com/prettier/prettier) in installed and enabled with line-length set to 130 (you might want to add [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))

## yarn tasks

* `yarn run clean`: removes the `dist` folder
* `yarn run build`: compiles TSCode from `src` to `dist`
* `yarn watch`: build in watch mode: watch for changes in `src` and compile to `dist`
* `yarn start`: runs the compiled application from `dist`
* `yarn prettier`: re-formats all source code in `src`
