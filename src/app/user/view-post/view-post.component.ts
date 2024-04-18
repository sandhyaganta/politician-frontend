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
  notification: any;
  notificationreplay: any;
  uploadform!: FormGroup;
  ss: any;
  likes: any;
  nid: any;
  uid: any;
  constructor(
    private api: UserServiceService,
    private form: FormBuilder,
    private service: AdminServiceService
  ) {}
  ngOnInit(): void {
    this.uid = localStorage.getItem('id');
    this.uploadform = this.form.group({
      comments: [''],
      userid: [''],
      notificationid: [''],
    });

    this.api.getallpost().subscribe((res: any) => {
      console.log(res, 'posts');
      this.notification = res;
    });
  }

  like(l: any) {
    let s = {
      id: l._id,
      like: l.like + 1,
    };
    this.service.postupdate(s).subscribe((res: any) => {
      console.log('res', res);
    });
  }

  comment(r: any) {
    let dd = {
      userid: this.uid,
      notificationid: r._id,
      comments: this.uploadform.value.comments,
    };
    this.api.comments(dd).subscribe((res: any) => {
      console.log(res, 'usercheck');
    });
  }
}
