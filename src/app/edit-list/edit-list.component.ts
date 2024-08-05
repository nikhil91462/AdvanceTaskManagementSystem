import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent {

  selectedTask: any;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  
  ngOnInit(): void {
    console.log(history.state.Task,"history.state.Task");
    
    this.selectedTask = history.state.Task;
    // this.selectedTask.forEach((item:any) => {
    //   item.dueDate = new Date(ite)
    // });
  }

  addRow() {
    this.selectedTask.push({});
  }


  DeleteRow(i:any){
    this.selectedTask.splice(i,1);
  }

  saveDetails() {
    this.router.navigate(['/main-list'], { state: { Task: this.selectedTask } });
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
