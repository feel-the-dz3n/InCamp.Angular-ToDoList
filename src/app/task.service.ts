import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Dashboard } from './dashboard.model';

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
}
