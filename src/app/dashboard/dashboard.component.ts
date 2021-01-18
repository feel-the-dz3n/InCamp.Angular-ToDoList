import { Component } from '@angular/core';
import { TaskListInfo } from '../task-list-info.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isLoading: boolean = false;
  todoLists: TaskListInfo[] | undefined;

  constructor(
    private taskService: TaskService) {
  }

  ngOnInit() {
    this.isLoading = true;

    this.taskService.getDashboard().subscribe(
      r => {
        this.todoLists = r.taskLists;
        this.isLoading = false;
      },
      e => {
        alert("Failed to fetch task lists");
        console.log(e);
        this.isLoading = false;
      });
  }
}
