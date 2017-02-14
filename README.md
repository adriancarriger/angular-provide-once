# Angular Provide Once [![npm version](https://badge.fury.io/js/angular-provide-once.svg)](https://badge.fury.io/js/angular-provide-once)

🔂  Removes the need to use forRoot in Angular 2+ modules by providing guaranteed singleton services.

[![Build Status](http://img.shields.io/travis/adriancarriger/angular-provide-once/master.svg?maxAge=60)](https://travis-ci.org/adriancarriger/angular-provide-once)
[![Codecov](https://img.shields.io/codecov/c/github/adriancarriger/angular-provide-once/master.svg?maxAge=60)](https://codecov.io/gh/adriancarriger/angular-provide-once)
[![Dependency Status](https://img.shields.io/david/adriancarriger/angular-provide-once/master.svg?maxAge=60)](https://david-dm.org/adriancarriger/angular-provide-once)
[![devDependency Status](https://img.shields.io/david/dev/adriancarriger/angular-provide-once/master.svg?maxAge=60)](https://david-dm.org/adriancarriger/angular-provide-once?type=dev)
[![peerDependency Status](https://img.shields.io/david/peer/adriancarriger/angular-provide-once/master.svg?maxAge=60)](https://david-dm.org/adriancarriger/angular-provide-once?type=peer)

- [Complete changelog](https://github.com/adriancarriger/angular-provide-once/releases)

# Description

- `No .forRoot()`: Allows module consumers to import without calling a `forRoot` method
- `Singletons`: Allows module creators to provide singleton services that don't require consumers to be concerned with accidentally providing multiple instances
- `Top level `: If multiple instances are attempted, the top level instance in the provider tree will be used
- `Multiple consumers`: If multiple libraries depend on your service and those libraries are used in a single Angular project, you can still guarantee a single instance of your service

## Install

```bash
npm install angular-provide-once --save
```

## Usage in @NgModule

```ts
import { NgModule } from '@angular/core';
import { ProvideOnce } from 'angular-provide-once';

import { DependantService } from './dependant-service';
import { MyService } from './my-service';
import { OtherService } from './other-service';

@NgModule({
  imports: [],
  providers: [
    OtherService,
    DependantService,
    ...ProvideOnce(MyService, [DependantService])
  ],
  declarations: []
})
export class MyModule { }
```

## Api

## `...ProvideOnce(targetService[, dependencyArray])`

## Paramaters

### targetService

The service that should be provided once.

### dependencyArray

An optional array of services that the targetService depends on. Only include immediate dependencies (not dependencies of dependencies).

## Return value

`ProvideOnce` returns an array of Providers. Use the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) (e.g. `...ProvideOnce`) to include it along with other services.


## License

angular-provide-once is licensed under the MIT Open Source license. For more information, see the [LICENSE](LICENSE) file in this repository.
