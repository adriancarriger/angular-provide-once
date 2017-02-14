/* tslint:disable:no-unused-variable */
import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { Observable, ReplaySubject, Subject } from 'rxjs/Rx';

import { ProvideOnce } from '../src/provide-once';

@Injectable()
export class ClassA { }

@Injectable()
export class ClassB {
  constructor(public classA: ClassA) { }
}

@Injectable()
export class ClassC {
  constructor(public classB: ClassB) { }
}

describe('Function: ProvideOnce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClassA,
        ...ProvideOnce(ClassB, [ClassA]),
        ...ProvideOnce(ClassC, [ClassB])
      ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

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

  it('should resolve dependencies in the provided factory function', inject([ClassB], (service: ClassB) => {
    const serviceA: ClassA = new ClassA();
    const serviceB: ClassB = new ClassB(serviceA);
    expect(service instanceof ClassA).toBe(false);
    expect(service instanceof ClassB).toBe(true);
    expect(service.classA instanceof ClassA).toBe(true);
  }));

  it('should resolve dependencies in the provided factory function', inject([ClassC], (service: ClassC) => {
    const serviceA: ClassA = new ClassA();
    const serviceB: ClassB = new ClassB(serviceA);
    const serviceC: ClassC = new ClassC(serviceB);
    expect(service instanceof ClassB).toBe(false);
    expect(service instanceof ClassC).toBe(true);
    expect(serviceC.classB instanceof ClassB).toBe(true);
    expect(service.classB.classA instanceof ClassA).toBe(true);
  }));
});
