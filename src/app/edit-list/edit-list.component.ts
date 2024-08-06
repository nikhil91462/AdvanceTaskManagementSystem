import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent {

  project: any;
  tasks!: any[];
  users!: any[];
  taskToAssign: any;
  isModalOpen:boolean = false;

  constructor(private projectService: ProjectService, private taskService: TaskService, private userService: UserService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const projectId = parseInt(this.route.snapshot.paramMap.get('id')!);
    if (projectId) {
      this.projectService.getProject(projectId).subscribe((project: any) => {
        this.project = project;
        this.taskService.getTasks().subscribe((tasks: any[]) => {
          this.tasks = tasks.filter(task => task.projectId === projectId);
          this.tasks.forEach(task => {
            if (!task.comments) {
              task.comments = [];
            }
          });
        });
      });
      this.userService.getUsers().subscribe((users: any[]) => {
        this.users = users;
      });
    }
  }

  showAssignUserModal(task: any) {
    this.taskToAssign = task;
    // Show the modal
    // You can use a modal service or a boolean flag to show the modal
    this.isModalOpen = true;
  }
  
  assignUserToTask(user: any) {
    this.taskToAssign.assignedTo = user;
    // Update the task in the database
    this.taskService.updateTask(this.taskToAssign.id, this.taskToAssign).subscribe(() => {
      // Hide the modal
      this.isModalOpen = false;
    });
  }

  newTaskName!: string;

  addTask() {
    const newTask = {
      name: this.newTaskName,
      projectId: this.project.id
    };
    this.taskService.createTask(newTask).subscribe((task: any) => {
      this.tasks.push(task);
      this.newTaskName = '';
    });
  }

  commentFlag:boolean= false;
  comment(){
    this.commentFlag = true;
  }

}
