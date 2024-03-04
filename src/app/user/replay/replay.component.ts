import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { CommonModule } from '@angular/common';
import { unzip } from 'zlib';

@Component({
  selector: 'app-replay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './replay.component.html',
  styleUrl: './replay.component.css'
})
export class ReplayComponent implements OnInit{
  data:any
  ss:any
  
  constructor(private api:UserServiceService,private service:AdminServiceService){}
  ngOnInit(): void {
    const u=localStorage.getItem("id");
    
    console.log("userid",u)


    this.service.getreplay(u).subscribe((res:any) =>{
      this.data=res
      console.log("res",this.data);
      
      // this.ss=res.map((a:any) =>a.complientsdetails)

      // console.log("ss",this.ss);
      
      // this.data=this.ss.map((b:any)=>b.complientsdetails ,
      // u==this.data.userid,
      // console.log("u",u)
      

      // )

      
      

    })
   
  }
  
}
