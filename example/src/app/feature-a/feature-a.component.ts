import { Component, OnInit } from '@angular/core';
import { ProvideOnce } from 'angular-provide-once';

import { CountingService } from '../counting.service';

@Component({
  selector: 'app-feature-a',
  providers: [
    ...ProvideOnce(CountingService)
  ],
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.css']
})
export class FeatureAComponent implements OnInit {

  constructor(public countingService: CountingService) { }

  ngOnInit() {
  }

}
