import { Component, OnInit } from '@angular/core';
import { IdService } from './id.service';
import { Task } from './task.model';
import { TaskList } from './tasklist.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  selectedList: any;
  todoLists: TaskList[] = [];

  constructor(private idService: IdService) {
  }

  ngOnInit() {
    this.todoLists = [
      {
        id: this.idService.getId(),
        name: "Important Tasks", tasks: [
          new Task(this.idService.getId(), false, "Buy Goods", "Bread, water, cat feed, etc.", null),
          new Task(this.idService.getId(), true, "Wash a Car", null, new Date("2022.01.01 00:00:00")),
          new Task(this.idService.getId(), false, "Write a Poem", "About programming patterns.", new Date("2022.05.01 22:28:00"))
        ]
      },
      { id: this.idService.getId(), name: "Future Plans", tasks: [] },
      { id: this.idService.getId(), name: "Work", tasks: [] },
      { id: this.idService.getId(), name: "Ideas", tasks: [] },
      { id: this.idService.getId(), name: "Stuff", tasks: [] },
    ];
  }

  selectTodoList(list: any) {
    this.selectedList = list;
  }
}
