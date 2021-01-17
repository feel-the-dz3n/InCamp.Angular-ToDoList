import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Output() modelUpdated = new EventEmitter();
  modificableTask: Task;
  isModified: boolean;
  isUpdating: boolean;
  dateString: string;

  constructor() {
    this.dateString = "";
    this.isModified = false;
    this.isUpdating = false;
    this.task = new Task(0, false, "Unknown Task", null, null);
    this.modificableTask = new Task(0, false, "Unknown Task", null, null);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["task"]) {
      let newTask = changes["task"].currentValue;
      this.resetForm(newTask);
    }
  }

  resetForm(newTask: any) {
    // modificableTask is the copy of original model
    // that can be modified and submit then
    // or modifications can canceled and reverted instead
    Object.assign(this.modificableTask, newTask);

    this.isModified = false;
  }

  doneChanged() {
    // If user is not editing this form, but press checkbox
    // Probably he wants to mark task as completed in fastest way
    // So this means that this change is the only one in this model
    // So immediately send an update request
    if (!this.isModified) {
      // Workaround:
      // For some reason, ngModel doesn't set value on done at this point
      // And if we call updateTask right now, it will use old value
      // So we gonna wait 500ms before sending a request
      // But setting this form type is already updating
      this.isUpdating = true;
      setTimeout(() => this.updateTask(), 500);
    }
  }

  edit(canBeCanceled: boolean) {
    if (canBeCanceled && this.isModified) {
      this.cancelEdits();
    }
    else {
      this.isModified = true;
    }
  }

  cancelEdits() {
    this.resetForm(this.task);
  }

  updateTask() {
    this.isUpdating = true;
    let updatedModel = Object.assign({}, this.modificableTask);

    // Assign a new date, because ngModel at datetime-local 
    // can't work with Date objects
    updatedModel.dueTime = new Date(this.dateString);

    // simulating request delay
    setTimeout(() => {
      this.isUpdating = false;
      this.modelUpdated.emit(updatedModel);
      this.isModified = false;
    }, 500);
  }

  removeTask() {

  }

  isNoDescription() {
    return this.task.description ? false : true;
  }

  isDueTimeValid() {
    let dateTime = this.task.dueTime;
    return dateTime && dateTime > new Date(0)
  }
}
