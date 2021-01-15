import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent {
  @Output() submit = new EventEmitter();

  name: any;
  description: any;
  dueTime: any;

  addTask() {
    this.submit.emit({
      title: this.name,
      description: this.description,
      dueTime: this.dueTime,
      done: false
    });
    
    this.name = '';
    this.description = '';
    this.dueTime = null;
  }
}
