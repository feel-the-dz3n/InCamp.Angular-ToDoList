import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { TaskListInfo } from '../task-list-info.model';
import { TaskService } from '../task.service';
import { TaskList } from '../tasklist.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isLoading: boolean = false;
  todoLists: TaskListInfo[] | undefined;
  selectedListId: any;

  constructor(
    private router: Router,
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
