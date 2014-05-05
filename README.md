tsfoo
=====

TypeScript + RequireJS sample configuration

## Introduction

http://typescript.codeplex.com/wikipage?title=Modules%20in%20TypeScript

## Configurations

### 1. Modules are dynamically loaded by RequireJS

If you build the project in Visual Studio or run `grunt` without parameters, you'll have the compiled JS in the `compiled` folder. Open `default.htm` in the browser to see this configuration in action.

### 2. Modules are combined into one file and loaded by RequireJS

`grunt rjs`

Open `rjs.htm` in the browser to see this configuration in action.

### 3. [Almond](https://github.com/jrburke/almond)

`grunt almond`

Open `almond.htm` in the browser to see this configuration in action.
