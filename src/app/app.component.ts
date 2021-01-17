import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskList } from './tasklist.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  selectedList: any;
  todoLists: TaskList[] = [
    {
      id: 1,
      name: "Important Tasks", tasks: [
        new Task(1, false, "Buy Goods", "Bread, water, cat feed, etc.", null),
        new Task(2, true, "Wash a Car", null, new Date("2022.01.01 00:00:00")),
        new Task(3, false, "Write a Poem", "About programming patterns.", new Date("2022.05.01 22:28:00"))
      ]
    },
    { id: 2, name: "Future Plans", tasks: [] },
    { id: 3, name: "Work", tasks: [] },
    { id: 4, name: "Ideas", tasks: [] },
    { id: 5, name: "Stuff", tasks: [] },
  ];

  selectTodoList(list: any) {
    this.selectedList = list;
  }
}
