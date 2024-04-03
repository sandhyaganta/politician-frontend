import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder){}
  ngOnInit():void{
   

    this.Replayform=this.form.group({
      replay:[''],
      date:[''],
      
    })
    this.api.getcomplients().subscribe((res:any) => {

      this.complients=res
      this.cid=this.complients.map((cc:any) =>cc._id)
      console.log("allcomplients",this.cid);
      
    })

    // this.service.getreplay().subscribe((res:any) => {
    //   this.replay=res
    // })


  }

  replay(r:any){
    let rr={
      complientid:r._id,
      replay:this.Replayform.value.replay,
      role:'admin',
      date:this.Replayform.value.date,

    }
    this.service.adminreplay(rr).subscribe((res:any) => {
      this.post=res
      console.log(rr,"replay",this.post);
      
    })
    

  }

}
