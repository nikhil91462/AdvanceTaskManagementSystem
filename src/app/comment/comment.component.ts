import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() task: any;
  newCommentText!: string;

  ngOnInit(): void {
    if (!this.task.comments) {
      this.task.comments = [];
    }
  }

  addComment() {
    const newComment = {
      text: this.newCommentText,
      taskId: this.task.id
    };
    this.task.comments.push(newComment);
    this.newCommentText = '';
  }
}
