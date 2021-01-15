import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistTasksComponent } from './todolist-tasks.component';

describe('TodolistTasksComponent', () => {
  let component: TodolistTasksComponent;
  let fixture: ComponentFixture<TodolistTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
