import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class CountingService {
  total = 0;
  constructor(private logger: LoggerService) { }
  increment() {
    this.total++;
    this.logger.log(`The new total is ${this.total}`);
  }
}
