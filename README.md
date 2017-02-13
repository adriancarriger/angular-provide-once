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

import { MyService } from './my-service';

@NgModule({
  imports: [],
  providers: [
    ...ProvideOnce(MyService)
  ],
  declarations: []
})
export class MyModule { }
```

## License

angular-provide-once is licensed under the MIT Open Source license. For more information, see the [LICENSE](LICENSE) file in this repository.
