import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { CommonModule } from '@angular/common';
import { unzip } from 'zlib';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

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
  
  constructor(private api:UserServiceService,private service:AdminServiceService,private form:FormBuilder,private route: ActivatedRoute,private common: CommonService){
    this.getReplays();
  }
  ngOnInit(): void {
    const u=localStorage.getItem("id");
    
    console.log("userid",u)

this.getReplays();
    this.Replayform=this.form.group({
      replay:[''],
      date:['']

    })
   
  }
  getReplays(){
    this.cid = this.common.getComplient();
    console.log("cidcidcidcid",this.cid)


    this.service.getreplay(this.cid).subscribe((res:any) =>{
      this.data=res
      console.log("res",this.data);
      
      
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
