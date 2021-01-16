import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: any;

  isNoDescription() {
    return this.task.description ? false : true;
  }

  isNoDueTime() {
    return this.task.dueTime ? false : true;
  }
}
