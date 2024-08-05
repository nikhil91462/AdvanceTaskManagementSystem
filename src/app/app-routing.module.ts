import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { MainListComponent } from './main-list/main-list.component';

const routes: Routes = [
  
  { path: '',component: MainListComponent},
  { path: 'edit-list',component: EditListComponent },
  { path: 'main-list',component: MainListComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
