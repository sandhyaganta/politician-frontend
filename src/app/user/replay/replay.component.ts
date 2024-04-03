import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { CommonModule } from '@angular/common';
import { unzip } from 'zlib';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-replay',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './replay.component.html',
  styleUrl: './replay.component.css'
})
export class ReplayComponent implements OnInit{
  Replayform!:FormGroup
  data:any
  ss:any
  cid: any;
  
  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(paramss => {
      this.cid = paramss['id']
   });
   console.log("cidcidcidcid",this.cid)

    const u=localStorage.getItem("id");
    
    console.log("userid",u)


    this.service.getreplay(this.cid).subscribe((res:any) =>{
      this.data=res
      console.log("res",this.data);
      
      
    })


    this.Replayform=this.form.group({
      replay:[''],
      date:['']

    })
   
  }

  userreplay(c:any){

    let cc={
      role:'user',
      replay:this.Replayform.value.replay,
      date:this.Replayform.value.date,
      complientid:c._id,
      

    }
    console.log(cc);
    
    this.service.adminreplay(cc).subscribe((res:any) => {
      console.log("complients",res)
    })

  }


  
}
