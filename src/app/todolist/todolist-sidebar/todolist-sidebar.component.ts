import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist-sidebar',
  templateUrl: './todolist-sidebar.component.html',
  styleUrls: ['./todolist-sidebar.component.scss']
})
export class TodolistSidebarComponent {

  @Input() todoLists:any;

}
