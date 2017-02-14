import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProvideOnce } from 'angular-provide-once';

import { AppComponent } from './app.component';
import { CountingService } from './counting.service';
import { FeatureAComponent } from './feature-a/feature-a.component';
import { FeatureBComponent } from './feature-b/feature-b.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureAComponent,
    FeatureBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ...ProvideOnce(CountingService, [LoggerService]),
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
