import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-admin-viewuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-viewuser.component.html',
  styleUrl: './admin-viewuser.component.css'
})
export class AdminViewuserComponent {

  users:any

  constructor(private api:UserServiceService){}
  ngOnInit():void{
    this.api.getallusers().subscribe((res:any) =>{
      this.users=res
    })

  }
  userdelete(id:any){
    this.api.userdelete(id).subscribe((res:any) => {
      window.location.reload();
    })
  }

  

}
