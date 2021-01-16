import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent {
  @Output() submitTask = new EventEmitter();

  name: any;

  addTask() {
    if (this.name === "") {
      alert("The title is empty");
      return;
    }

    this.submitTask.emit({
      title: this.name,
      description: null,
      dueTime: null,
      done: false
    });

    this.name = '';
  }
}
