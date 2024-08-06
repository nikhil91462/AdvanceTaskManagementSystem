import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' }
  ];

  getUsers(): any {
    return of(this.users);
  }

  getUser(id: number): any {
    return of(this.users.find(user => user.id === id));
  }

  createUser(user: any): any {
    this.users.push(user);
    return of(user);
  }

  updateUser(id: number, user: any): any {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = user;
    }
    return of(user);
  }

  deleteUser(id: number): any {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    return { message: 'User deleted successfully' };
  }

}
