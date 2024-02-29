import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complients',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './complients.component.html',
  styleUrl: './complients.component.css'
})
export class ComplientsComponent {
  Registrationform!:FormGroup
  data:any
  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder){}
  ngOnInit():void{
    let uid=localStorage.getItem("id")
    let uname=localStorage.getItem("username")
    let village=localStorage.getItem("village")
    let mandal=localStorage.getItem("mandal")
    let district=localStorage.getItem("district")
    this.Registrationform=this.form.group({
      date:[''],
    complients:[''],
    username:uname,
    village:village,
    mandal:mandal,
    district:district,
    id:uid,
    })
    
  }


  complients(){
    this.api.usercomplients(this.Registrationform.value).subscribe((res:any) => {
      this.data=res
      console.log("complients",this.data)
    })
    

  }

}
