/* tslint:disable:no-unused-variable */
import { Injectable, ReflectiveInjector } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';

import { ProvideOnce } from '../src/provide-once';

describe('Function: ProvideOnce', () => {
  it('should create a provider', () => {
    const service = new ClassA();
    const provider = ProvideOnce(ClassA);
    const factory = provider.useFactory;
    const newService = factory(service);
    expect(newService).toBe(service);
  });

  it('should create a provider that creates a new service if one does not exist', () => {
    const service = new ClassA();
    const provider = ProvideOnce(ClassA);
    const factory = provider.useFactory;
    const newService = factory(null);
    expect(newService instanceof ClassA).toBe(true);
  });
});

@Injectable()
export class ClassA { }
