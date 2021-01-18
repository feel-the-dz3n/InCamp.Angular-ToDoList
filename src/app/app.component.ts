import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { TaskList } from './tasklist.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  selectedList: any;
  todoLists: TaskList[] | undefined;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getDashboard().subscribe(o => {
      // this.todoLists = o.taskLists.map(x => new TaskList(x.id, x.name));
    });
  }

  selectTodoList(list: any) {
    this.selectedList = list;
  }
}
