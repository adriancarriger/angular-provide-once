import { Injectable } from '@angular/core';

@Injectable()
export class CountingService {
  total = 0;
  increment() {
    this.total++;
  }
}
