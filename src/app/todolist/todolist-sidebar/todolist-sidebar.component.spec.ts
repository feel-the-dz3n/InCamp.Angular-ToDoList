import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistSidebarComponent } from './todolist-sidebar.component';

describe('TodolistSidebarComponent', () => {
  let component: TodolistSidebarComponent;
  let fixture: ComponentFixture<TodolistSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
