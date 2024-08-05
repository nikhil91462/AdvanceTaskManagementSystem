import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Task {
  id?: number;
  title: string;
  status: string;
  StartDate: string;
  dueDate: string;
  description?: string;
  checked: boolean;
}


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {

  tasks:Task[] = [];
  // TaskList: any;
  statusFilter:string = '';
  sortOrder:'asc' | 'desc' = 'asc';
  selectedRows:any = [];


  

  TaskList = [{
    title: 'task1', status: 'Pending' , StartDate: '2026-10-20',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task2', status: 'In Progress' , StartDate: '2026-10-20',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task3', status: 'In Progress' , StartDate: '2026-10-20',dueDate:'2026-10-20', checked:false,
  },
  {
    title: 'task4', status: 'Done' , StartDate: '2026-10-20',dueDate:'2026-10-20', checked:false,
  },]

  

  constructor(private router:Router){

  }

  ngOnInit():void{
    // this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.filterTasks();
    if (history.state.Task) {
      this.TaskList = history.state.Task;
      this.filteredTaskList = history.state.Task;
      
    }
  }


  showDetails() {
    // this.router.navigate(['/task-detail'], { state: { Task: this.TaskList } });
    this.router.navigate(['/edit-list'], { state: { Task: this.filteredTaskList } });
  }

  filteredTaskList: Task[] = [];
  dueDateFilter: string = '';

  filterTasks() {
    let filteredList = this.TaskList;

    if (this.statusFilter !== '') {
      filteredList = filteredList.filter(task => task.status == this.statusFilter);
    }

    if (this.dueDateFilter !== '') {
      filteredList = filteredList.filter(task => new Date(task.dueDate) <= new Date(this.dueDateFilter));
    }

    this.filteredTaskList = filteredList;
  }


}
