import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: any;
  modificableTask: any;
  isModified: any;

  constructor() {
    this.isModified = false;
    this.modificableTask = {
      title: "Unknown Task"
    };
  }

  private toDateString(date: Date): any {
    return date ? ((date.getFullYear().toString() + '-'
      + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
      + ("0" + (date.getDate())).slice(-2))
      + 'T' + date.toTimeString().slice(0, 5))
      : null;
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

    // since datettime-local input can only understand yyyy-MM-ddTHH:mm 
    // we have to replace existing value with that type string
    this.modificableTask.dueTime = this.toDateString(this.modificableTask.dueTime);

    this.isModified = false;
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

  }

  removeTask() {

  }

  isNoDescription() {
    return this.task.description ? false : true;
  }

  isNoDueTime() {
    return this.task.dueTime ? false : true;
  }
}
