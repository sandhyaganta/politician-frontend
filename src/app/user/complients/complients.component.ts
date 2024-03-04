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
  uid:any
  
  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder){}
  ngOnInit():void{
    this.uid=localStorage.getItem("id");
    
 console.log("uuuuu",this.uid)

   
    
    this.Registrationform=this.form.group({
      date:[''],
    complients:[''],
    userid:['']
   
    })

    
    
  }


  complient(){
    let cc={
      date:this.Registrationform.value.date,
      userid:this.uid,
      complients:this.Registrationform.value.complients

    }
    console.log(cc);
    
    this.api.usercomplients(cc).subscribe((res:any) => {
      console.log("complients",res)
    })
    

  }

}
