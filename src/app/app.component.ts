import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  selectedList: any;

  selectTodoList(list: any) {
    this.selectedList = list;
  }
}
