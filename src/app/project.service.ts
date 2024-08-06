import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = [
    { id: 1, name: 'Project 1', description: 'This is project 1', startDate: '2022-01-01', endDate: '2022-01-31', progress: 40 },
    { id: 2, name: 'Project 2', description: 'This is project 2', startDate: '2022-02-01', endDate: '2022-02-28', progress: 50 },
    { id: 3, name: 'Project 3', description: 'This is project 3', startDate: '2022-03-01', endDate: '2022-03-31', progress: 60 },
    { id: 4, name: 'Project 4', description: 'This is project 4', startDate: '2022-01-01', endDate: '2022-01-31', progress: 40 },
    { id: 5, name: 'Project 5', description: 'This is project 5', startDate: '2022-02-01', endDate: '2022-02-28', progress: 50 },
    { id: 6, name: 'Project 6', description: 'This is project 6', startDate: '2022-03-01', endDate: '2022-03-31', progress: 60 },
  ];

  getProjects(): any {
    return of(this.projects);
  }

  getProject(id: number): any {
    return of(this.projects.find(project => project.id === id));
  }

  createProject(project: any): any {
    this.projects.push(project);
    return of(project);
  }

  updateProject(id: number, project: any): any {
    const index = this.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.projects[index] = project;
    }
    return of(project);
  }

  deleteProject(id: number): any {
    const index = this.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
    return of({ message: 'Project deleted successfully' });
  }

  
}
