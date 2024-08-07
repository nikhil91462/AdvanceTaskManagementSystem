import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';




@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {




  

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

  


  projects!: any[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }


}
