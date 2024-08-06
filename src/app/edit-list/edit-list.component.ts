import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent {

  project: any;
  tasks!: any[];

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const projectId = parseInt(this.route.snapshot.paramMap.get('id')!);
    if (projectId) {
      this.projectService.getProject(projectId).subscribe((project: any) => {
        this.project = project;
        this.tasks = project.tasks;
      });
      
    }
  }


  
  TaskList = [{
    title: 'task1', status: 'Pending', priority: 'Low', dueDate: '10-10-2026', checked: false,
  },
  {
    title: 'task2', status: 'Pending', priority: 'High', dueDate: '10-10-2026', checked: false,
  },
  {
    title: 'task3', status: 'Pending', priority: 'Low', dueDate: '10-10-2026', checked: false,
  },
  {
    title: 'task4', status: 'Pending', priority: 'Low', dueDate: '10-10-2026', checked: false,
  },]


}
