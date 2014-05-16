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

### 3. Stand-alone one-file bundle (uses [Almond](https://github.com/jrburke/almond))

`grunt almond`

Open `almond.htm` in the browser to see this configuration in action.

## See also

Related open issues (basicly, it's the same issue):
* [A config file to tell typescript compiler how to interpret AMD paths](http://typescript.codeplex.com/workitem/911)
* [Separate Module ID from type information location](https://typescript.codeplex.com/workitem/934)
