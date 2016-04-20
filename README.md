# Zero Blocks -  Infragistics Angular2 Components

Components and supporting directives built with TypeScript and [Angular 2](https://angular.io/) 
including samples and tests. Source files under the `src` folder.

Current list of controls include:

- Basic toggle view framework, touch gestures
- Button, Icon
- Navigation drawer
- List component

## Setup
From the root folder run:

```
npm install
``` 

Demos can be run using either the [lite server](https://github.com/johnpapa/lite-server):
```
npm start
```
or by pointing a server of your choosing to the root directory of the repo (e.g. Virtual Directory in IIS pointing to this folder). 
Either way works by simply opening html files from the samples folder (`samples/index.html`) afterwards. 
The start script will also build and watch TypeScript files. For other options use the commands below.

## Build

In case your editor cannot auto-compile the TypeScript files (VS, VS Code, others with plugins) 
there's a configured npm command in place to run the compiler:
```
npm run build
/// OR in watch mode
npm run watch
```
This will compile all TypeScript files per the `tsconfig.json` setup and optionally continue watching for 
file changes and recompile accordingly. 

## Contributing
[Coding Guidelines](../../wiki/Coding-guidelines-for-Zero-Blocks)