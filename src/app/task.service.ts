import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Dashboard } from './dashboard.model';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private endpoint: string = 'http://192.168.1.10:8080/';
  private dashboardEndpoint: string = this.endpoint + "dashboard";
  private tasksEndpoint: string = this.endpoint + "tasks";
  private listsEndpoint: string = this.endpoint + "lists";

  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.dashboardEndpoint);
  }

  putTask(taskId: number, task: Task): Observable<Task> {
    return this.http.put<Task>(this.tasksEndpoint + `/${taskId}`, task);
  }

  getTaskListTasks(taskListId: number, all: boolean): Observable<Task[]> {
    return this.http.get<Task[]>(this.listsEndpoint + `/${taskListId}/tasks?all=${all}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksEndpoint, task);
  }

  removeTask(taskId: number) {
    return this.http.delete(this.tasksEndpoint + `/${taskId}`);
  }
}
