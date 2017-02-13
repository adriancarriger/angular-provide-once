import {
  FactoryProvider,
  OpaqueToken,
  Optional,
  ReflectiveInjector,
  SkipSelf,
  Type,
  ValueProvider } from '@angular/core';
import { reflector } from './private_import_core';

export function ProvideOnce<T>(ProvidableType: Type<T>): Array<FactoryProvider | ValueProvider> {
  return CreateProviders(new OpaqueToken('providable_type'), ProvidableType);
}

export function CreateProviders<T>(
  TOKEN: OpaqueToken,
  ProvidableType: Type<T>): Array<FactoryProvider | ValueProvider> {
  return [
    {
      provide: TOKEN,
      useValue: ProvidableType
    },
    {
      provide: ProvidableType,
      deps: [[new Optional(), new SkipSelf(), ProvidableType], TOKEN],
      useFactory: PROVIDER_FACTORY
    }
  ];
}

export function PROVIDER_FACTORY<T>(parentInstance: Type<T>, Token: Type<T>): Type<T> {
  return parentInstance || ReflectiveInjector
    .resolveAndCreate([Token, ...reflector.parameters(Token)])
    .get(Token);
}
