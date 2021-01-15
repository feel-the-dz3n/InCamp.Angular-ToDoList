import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistSidebarComponent } from './todolist/todolist-sidebar/todolist-sidebar.component';
import { TodolistTasksComponent } from './todolist/todolist-tasks/todolist-tasks.component';
import { TaskComponent } from './todolist/task/task.component';
import { NewTaskFormComponent } from './todolist/new-task-form/new-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistSidebarComponent,
    TodolistTasksComponent,
    TaskComponent,
    NewTaskFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
