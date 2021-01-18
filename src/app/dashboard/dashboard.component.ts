import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskList } from '../tasklist.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedList: TaskList | undefined;
  todoLists: TaskList[] | undefined;
  @Output() select = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getDashboard().subscribe(
      r => {
        this.todoLists = r.taskLists.map(x => new TaskList(x.id, x.name));
      },
      e => {
        alert("Failed to fetch task lists");
        console.log(e);
      });
  }

  selectTodoList(list: any) {
    if (this.selectedList === list) {
      this.selectedList = undefined; // uncheck
    } else {
      this.selectedList = list;
    }

    this.select.emit(this.selectedList);
  }

  isTodoListSelected(list: any) {
    return this.selectedList === list;
  }
}
