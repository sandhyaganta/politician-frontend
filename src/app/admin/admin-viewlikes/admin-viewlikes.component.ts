import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { FormBuilder } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-admin-viewlikes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-viewlikes.component.html',
  styleUrl: './admin-viewlikes.component.css'
})
export class AdminViewlikesComponent {
  posts:any
  data:any
  allcomments: any = [];
  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder){}
  ngOnInit():void{
    this.api.getcomment().subscribe((res: any) => {
      console.log(res, 'posts');
      this.posts = res;
      console.log('posts', this.posts);
    });
    
  }

}
