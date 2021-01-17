import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  static id: any = 1;

  constructor() { }

  getId() {
    IdService.id++;
    return IdService.id;
  }
}
