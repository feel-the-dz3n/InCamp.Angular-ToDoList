import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.scss']
})
export class TodolistTasksComponent {
  @Input() list: any;

  getTasks() {
    if (this.list) return this.list.tasks;
    else return [];
  }

  addTask(task: any) {
    this.list.tasks.push(task);
  }

  isThereAreNoTasks() {
    return this.list && this.list.tasks.length == 0;
  }

  isListAvailable() {
    return this.list ? true : false;
  }

  isListNotAvailable() {
    return !this.isListAvailable();
  }
}
