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
  textForm!:FormGroup;
  selectedFile!: File;
  post: any;
  data:any
  description:any
  constructor(private form: FormBuilder, private api: AdminServiceService) {}
  ngOnInit(): void {
    this.uploadform = this.form.group({
      filepath: [''],
      title: [''],
      filetype:[''],
      like:0,
      
      
    });
    this.textForm=this.form.group({
      // messages: Message[] = [];
      // newMessage: string = '';
      mobileno: [],
      description:['']


    });

    // this.api.getallpost().subscribe((res: any) => {
    //   this.post = res;
    //   console.log(this.post)
    // });
  }

  select(event: any) {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile.name);
  }

  uploadFile() {
    console.log(this.uploadform.value);
    
    let uploadData = new FormData;
    uploadData.append('title', this.uploadform.value.title);
    uploadData.append('filepath', this.selectedFile);
    uploadData.append('filetype',this.uploadform.value.filetype);
    uploadData.append('like',this.uploadform.value.like);
    console.log('data', uploadData);

    this.api.adminpost(uploadData).subscribe((res: any) => {
      console.log('admincheck', res);
    });
  }


  whatsup(){
      
      
      // if(this.description.trim === '')
      // {
        this.api.whasupmessage(this.textForm.value).subscribe((res:any)=>{
          this.data=res
          .console.log("res",this.data);
          
          // this.description = '' ;


        })

    // }
    

  }
  

    

  }

// if (this.newMessage.trim() === '') return; // Don't send empty messages
//     this.chatService.sendMessage(this.newMessage)
//       .subscribe(() => {
//         this.newMessage = ''; // Clear the input field after sending message
//         this.getMessages(); // Refresh messages after sending
//       });