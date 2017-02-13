/* tslint:disable:no-unused-variable */
import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';

import { ProvideOnce } from '../src/provide-once';

describe('Function: ProvideOnce', () => {
  it('should create a provider', () => {
    const service = new ClassA();
    const providers: any = ProvideOnce(ClassA);
    const factory = providers[1].useFactory;
    const newService = factory(service, ClassA);
    expect(newService).toBe(service);
  });

  it('should create a provider that creates a new service if one does not exist', () => {
    const service = new ClassA();
    const providers: any = ProvideOnce(ClassA);
    const factory = providers[1].useFactory;
    const newService = factory(null, ClassA);
    expect(newService instanceof ClassA).toBe(true);
  });

  it('should resolve dependencies in the provided factory function', () => {
    const serviceA: ClassA = new ClassA();
    const serviceB: ClassB = new ClassB(serviceA);
    const providers: any = ProvideOnce(ClassB);
    const factory = providers[1].useFactory;
    const newService: ClassB = factory(null, ClassB);
    expect(newService instanceof ClassA).toBe(false);
    expect(newService instanceof ClassB).toBe(true);
    expect(serviceB.classA instanceof ClassA).toBe(true);
    expect(newService.classA instanceof ClassA).toBe(true);
  });
});

@Injectable()
export class ClassA { }

@Injectable()
export class ClassB {
  constructor(public classA: ClassA) { }
}
