import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { TaskList } from 'src/app/tasklist.model';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.scss']
})
export class TodolistTasksComponent implements OnChanges {
  @Input() list: TaskList;
  tasks: Task[] | undefined;
  isLoading: boolean = false;

  constructor(private taskService: TaskService) {
    this.list = new TaskList(0, "Unknown");
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["list"]) {
      let newList = changes["list"].currentValue;
      if (newList) {
        this.isLoading = true;
        this.refreshList(newList);
      }
    }
  }

  refreshList(list: TaskList) {
    this.taskService.getTaskListTasks(list.id).subscribe(
      (r) => { this.tasks = r; },
      (e) => { alert("Failed to get tasks"); console.log(e); },
      () => { this.isLoading = false; }
    );
  }

  modelUpdated(newTask: Task) {
    // TODO
  }

  taskAdded(task: Task) {
    this.tasks?.push(task);
  }

  taskRemoved(task: Task) {
    this.tasks?.splice(this.tasks?.indexOf(task), 1);
  }

  getTasks() {
    return this.isThereAreNoTasks() ? [] : this.tasks;
  }

  isThereAreNoTasks() {
    return this.tasks && this.tasks.length == 0;
  }

  isListAvailable() {
    return this.list ? true : false;
  }

  isListNotAvailable() {
    return !this.isListAvailable();
  }
}
