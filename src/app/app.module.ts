import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './main-list/main-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    EditListComponent,
    ButtonComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
