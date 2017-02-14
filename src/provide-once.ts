import {
  FactoryProvider,
  OpaqueToken,
  Optional,
  ReflectiveInjector,
  SkipSelf,
  Type,
  ValueProvider } from '@angular/core';
import { reflector } from './private_import_core';

export function ProvideOnce<T>(ProvidableType: Type<T>, params = []): Array<FactoryProvider | ValueProvider> {
  return CreateProviders(new OpaqueToken('providable_type'), ProvidableType, params);
}

export function CreateProviders<T>(
  TOKEN: OpaqueToken,
  ProvidableType: Type<T>,
  params): Array<FactoryProvider | ValueProvider> {
  return [
    {
      provide: TOKEN,
      useValue: ProvidableType
    },
    {
      provide: ProvidableType,
      deps: [[new Optional(), new SkipSelf(), ProvidableType], TOKEN, ...params],
      useFactory: PROVIDER_FACTORY
    }
  ];
}

export function PROVIDER_FACTORY<T>(parentInstance: Type<T>, Token: Type<T>, ...args): Type<T> {
  return parentInstance || reflector.factory(Token).apply(this, [...args]);
}
