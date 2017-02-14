import { Component, OnInit } from '@angular/core';
import { ProvideOnce } from 'angular-provide-once';

import { CountingService } from '../counting.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-feature-b',
  providers: [
    ...ProvideOnce(CountingService, [LoggerService])
  ],
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.css']
})
export class FeatureBComponent implements OnInit {

  constructor(public countingService: CountingService) { }

  ngOnInit() {
  }

}
