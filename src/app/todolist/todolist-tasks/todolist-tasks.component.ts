import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.scss']
})
export class TodolistTasksComponent {
  @Input() list: any;
  selectedTask: any;

  addTask(task: any) {
    this.list.tasks.push(task);
  }

  isTaskSelected(task: any) {
    return this.selectedTask === task;
  }

  selectTask(task: any) {
    if (this.selectedTask) {
      // TODO: prompt should we save the data
    }

    this.selectedTask = task;
  }

  isThereAreNoTasks() {
    return this.list.tasks.length == 0;
  }

  isListAvailable() {
    return this.list ? true : false;
  }

  isListNotAvailable() {
    return !this.isListAvailable();
  }
}
