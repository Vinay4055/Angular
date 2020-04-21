import { NgModule } from '@angular/core';
import { Assignment2Component } from './containers/assignment2.component';
import { CommonModule } from '@angular/common';
import { TodoStatusPipe } from './shared/todo-status.pipe';
@NgModule({
  declarations: [
    Assignment2Component,
    TodoStatusPipe
],
  exports: [
    Assignment2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Assignment2Module {

}
