import { Optional, Provider, FactoryProvider, SkipSelf, Type } from '@angular/core';
import { reflector } from '@angular/core/src/reflection/reflection';

export function ProvideOnce<T>(input: Type<T>): FactoryProvider {
  return {
    provide: input,
    deps: [[new Optional(), new SkipSelf(), input], ...reflector.parameters(input)],
    useFactory: (parent: Type<T>, ...args) => parent || reflector.factory(input).apply(this, [...args])
  };
}
