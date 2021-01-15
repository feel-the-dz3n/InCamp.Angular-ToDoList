import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todoLists: { name: any }[] = [
    { name: "Important Tasks" },
    { name: "Future Plans" },
    { name: "Work" },
    { name: "Ideas" },
    { name: "Stuff" },
  ];
}
