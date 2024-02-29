import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { log } from 'console';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  posts: any;
  uploadform!: FormGroup;
  ss: any;
  likes: any;
  constructor(
    private api: UserServiceService,
    private form: FormBuilder,
    private service: AdminServiceService
  ) {}
  ngOnInit(): void {
    this.uploadform = this.form.group({
      comments: [''],
    });

    this.api.getallpost().subscribe((res: any) => {
      console.log(res, 'posts');
      this.posts = res;
      console.log('posts', this.posts);
    });

    // this.api.getallpost().subscribe((res: any) => {
    //   console.log(res, 'like');
    //   this.likes = res;
    //   console.log('likes', this.likes);
    // });
  }

  like(l:any) {
    let s = {
      id:l._id,
      like:(l.like)+1
    }
    this.service.postupdate(s).subscribe((res: any) => {
      console.log('res', res);
    });
  }

  comment() {
    this.api.comments(this.uploadform.value).subscribe((res: any) => {
      console.log(res, 'usercheck');
    });
  }
}
