import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks = [
    { id: 1, name: 'Task 1', projectId: 1, status: 'In Progress' },
    { id: 2, name: 'Task 2', projectId: 1, status: 'Completed' },
    { id: 3, name: 'Task 3', projectId: 2, status: 'In Progress' },
    { id: 4, name: 'Task 4', projectId: 3, status: 'Not Started' }
  ];

  getTasks(): any {
    return of(this.tasks);
  }

  getTask(id: number): any {
    return of(this.tasks.find(task => task.id === id));
  }

  createTask(task: any): any {
    this.tasks.push(task);
    return of(task);
  }

  updateTask(id: number, task: any): any {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
    return of(task);
  }

  deleteTask(id: number): any {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    return of({ message: 'Task deleted successfully' });
  }

}
