import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.scss']
})
export class TodolistTasksComponent {
  @Input() list: any;

  isTasksListEmpty() {
    return this.list.tasks.length === 0;
  }
}
