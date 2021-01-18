import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistSidebarComponent } from './todolist/todolist-sidebar/todolist-sidebar.component';
import { TodolistTasksComponent } from './todolist/todolist-tasks/todolist-tasks.component';
import { TaskComponent } from './todolist/task/task.component';
import { NewTaskFormComponent } from './todolist/new-task-form/new-task-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistSidebarComponent,
    TodolistTasksComponent,
    TaskComponent,
    NewTaskFormComponent,
    DashboardComponent,
    TodayTasksComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
