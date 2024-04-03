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
  pid:any
  uid:any
  constructor(
    private api: UserServiceService,
    private form: FormBuilder,
    private service: AdminServiceService
  ) {}
  ngOnInit(): void {
    this.uid =localStorage.getItem('id')
    console.log(this.uid, 'uid');
    this.uploadform = this.form.group({
      comments: [''],
      userid:[''],
      postid:['']
    });

    this.api.getallpost().subscribe((res: any) => {
      console.log(res, 'posts');
      this.posts = res;
      this.pid=this.posts.map((p:any) =>p._id)
      console.log("pid",this.pid)
      console.log('posts', this.posts);
    });


    this.api.getcomment().subscribe((res: any) => {
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
  
    
    let dd = {
      userid:this.uid,
      postid:this.pid,
      comments:this.uploadform.value.comments
    }
    this.api.comments(dd).subscribe((res: any) => {
      console.log(res, 'usercheck');
    });
  }
}
