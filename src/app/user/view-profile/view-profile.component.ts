import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  user:any
  updateForm!:FormGroup
  constructor(private api:UserServiceService,private form:FormBuilder){}
  ngOnInit():void{
    const u=localStorage.getItem("id");
    
 console.log("uuuuu",u)
 this.api.getUser(u).subscribe((res:any) => {
  this.user=res
 console.log("user",this.user)
 })


 this.updateForm=this.form.group({
  
  fristname:[''],
  lastname:[''],
  username:[''],
  fathername:[''],
  mobileno:[''],
  caste:[''],
  village:[''],
  mandal:[''],
  district:[''],
  id:['']

 })

  }
  useredit(d:any){
    console.log("d",d)
 this.updateForm.patchValue({
  fristname:d.fristname,
  lastname:d.lastname,
  username:d.username,
  fathername:d.fathername,
  mobileno:d.mobileno,
  caste:d.caste,
  village:d.village,
  mandal:d.mandal,
  district:d.district,
  id:d._id

 })
  }


  update(){
    console.log(this.updateForm.value, 'updated values');
    this.api.userupdate(this.updateForm.value).subscribe((res:any)=>{
      window.location.reload();
    });
  }
  

}
