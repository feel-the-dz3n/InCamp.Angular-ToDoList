import { Component, Input } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskList } from 'src/app/tasklist.model';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.scss']
})
export class TodolistTasksComponent {
  @Input() list: TaskList;

  constructor() {
    this.list = new TaskList();
  }

  getTasks() {
    if (this.list) return this.list.tasks;
    else return [];
  }

  modelUpdated(newTask: Task) {
    for (let oldTask of this.list.tasks) {
      if (oldTask.id === newTask.id) {
        console.log("old", oldTask, " -> ", newTask);
        Object.assign(oldTask, newTask);
        return;
      }
    }
  }

  addTask(task: Task) {
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
