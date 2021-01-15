import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todolist-sidebar',
  templateUrl: './todolist-sidebar.component.html',
  styleUrls: ['./todolist-sidebar.component.scss']
})
export class TodolistSidebarComponent {
  selectedList: any;
  @Input() todoLists: any;
  @Output() select = new EventEmitter();

  selectTodoList(list: any) {
    this.selectedList = list;
    this.select.emit(list);
  }

  isTodoListSelected(list: any) {
    return this.selectedList === list;
  }
}
