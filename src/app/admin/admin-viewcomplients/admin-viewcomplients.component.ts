import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-viewcomplients',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admin-viewcomplients.component.html',
  styleUrl: './admin-viewcomplients.component.css'
})
export class AdminViewcomplientsComponent {
  complients:any
  Replayform!:FormGroup
  post:any
  uid:any
  cid:any
  aid:any

  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder,private common: CommonService){}
  ngOnInit():void{
     this.aid = localStorage.getItem('id');
    
   

    this.Replayform=this.form.group({
      replay:[''],
      role:['admin'],
      date:[''],
      complientsid:[''],
      roleid: ['']
      
    })
    this.api.getcomplients().subscribe((res:any) => {

      this.complients=res
      

      console.log("res",this.complients);
      
      
      
    })

    // this.service.getreplay().subscribe((res:any) => {
    //   this.replay=res
    // })


  }

  replay(r:any){
    let rr={
      complientid:r.id,
      replay:this.Replayform.value.replay,
      role:'admin',
      date:this.Replayform.value.date,
      roleid:this.aid

    }
    this.service.adminreplay(rr).subscribe((res:any) => {
      this.post=res
      console.log("replay",this.post);
      
    })
  }

  

}
