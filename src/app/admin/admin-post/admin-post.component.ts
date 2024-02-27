import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AdminServiceService } from '../../admin-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-admin-post',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './admin-post.component.html',
  styleUrl: './admin-post.component.css',
})
export class AdminPostComponent {
  uploadform!: FormGroup;
  selectedFile!: File;
  post: any;
  constructor(private form: FormBuilder, private api: AdminServiceService) {}
  ngOnInit(): void {
    this.uploadform = this.form.group({
      files: [''],
      title: [''],
      type:[''],
      like:0,
      comments:[''],
      
    });

    this.api.getallpost().subscribe((res: any) => {
      this.post = res;
      console.log(this.post)
    });
  }

  select(event: any) {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile.name);
  }

  uploadFile() {
    console.log(this.uploadform.value);
    
    let uploadData = new FormData;
    uploadData.append('title', this.uploadform.value.title);
    uploadData.append('files', this.selectedFile);
    uploadData.append('type',this.uploadform.value.type);
    uploadData.append('like',this.uploadform.value.like);
    uploadData.append('comments',this.uploadform.value.comments)
    console.log('data', uploadData);

    this.api.adminpost(uploadData).subscribe((res: any) => {
      console.log('admincheck', res);
    });
  }
}
