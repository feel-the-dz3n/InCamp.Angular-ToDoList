import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  selectedList: any;
  todoLists: any[] = [
    {
      name: "Important Tasks", tasks: [
        { title: "Buy Goods", description: "Bread, water, cat feed, etc.", done: false, dueTime: null },
        { title: "Wash Car", done: true, dueTime: new Date("2022.01.01 00:00:00") },
        { title: "Write a Poem", description: "About programming patterns", done: false, dueTime: new Date("2022.05.01 22:28:00") }
      ]
    },
    { name: "Future Plans", tasks: [] },
    { name: "Work", tasks: [] },
    { name: "Ideas", tasks: [] },
    { name: "Stuff", tasks: [] },
  ];

  selectTodoList(list: any) {
    this.selectedList = list;
  }
}
