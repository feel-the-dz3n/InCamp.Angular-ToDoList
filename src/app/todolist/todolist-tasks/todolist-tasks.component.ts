import { Component, Input } from '@angular/core';
import { IdService } from 'src/app/id.service';
import { Task } from 'src/app/task.model';
import { TaskList } from 'src/app/tasklist.model';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.scss']
})
export class TodolistTasksComponent {
  @Input() list: TaskList;

  constructor(private idService: IdService) {
    this.list = new TaskList(0, "Unknown");
  }

  getTasks() {
    /* if (this.list) return this.list.tasks;
    else return []; */
    return [];
  }

  modelUpdated(newTask: Task) {
    /* for (let oldTask of this.list.tasks) {
      if (oldTask.id === newTask.id) {
        console.log("old", oldTask, " -> ", newTask);
        Object.assign(oldTask, newTask);
        return;
      }
    } */
  }

  addTask(task: Task) {
    // task.id = this.idService.getId();
    // this.list.tasks.push(task);
  }

  removeTask(task: Task) {
    /* setTimeout(() => {
      let idx = this.list.tasks.indexOf(task);
      this.list.tasks.splice(idx, 1);
    }, 500); */
  }

  isThereAreNoTasks() {
    return true;// return this.list && this.list.tasks.length == 0;
  }

  isListAvailable() {
    return this.list ? true : false;
  }

  isListNotAvailable() {
    return !this.isListAvailable();
  }
}
