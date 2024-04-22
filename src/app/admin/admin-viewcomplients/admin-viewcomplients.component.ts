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
  aid:any
  replays:any

  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder,private common: CommonService){}
  ngOnInit():void{
     this.aid = localStorage.getItem('id');
    
   

    this.Replayform=this.form.group({
      replay:[''],
      role:['admin'],
      date:[''],
      roleid: [this.aid]
      
    })
    this.api.getcomplients().subscribe((res:any) => {

      this.complients=res
       console.log("res",this.complients);
       })

  }

  getreplays(id:any){
     this.api.getreplay(id).subscribe((res:any) =>{
        this.replays=res
        console.log("replays",this.replays);
        
       })
  }

  replay(r:any){
    let rr={
      complientsid:r.complient[0]?._id,
      replay:this.Replayform.value.replay,
      role:this.Replayform.value.role,
      date:this.Replayform.value.date,
      roleid:this.aid

    }
    this.service.adminreplay(rr).subscribe((res:any) => {
      this.post=res
      console.log("replay",this.post);
      
    })
  }

  

}
