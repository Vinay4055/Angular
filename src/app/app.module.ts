import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AssignmentModule } from '../05_assignment/assignment.module';

const FEATURE_MODULES_TAUGHT = [

  AssignmentModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...FEATURE_MODULES_TAUGHT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
