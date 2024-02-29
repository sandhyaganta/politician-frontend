import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  Loginform!:FormGroup;
  users:any
  constructor(private form:FormBuilder,private api:UserServiceService,private router:Router){}
  ngOnInit():void{
    this.Loginform=new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3)])

    })
    
  }

  get username():FormControl{
    return this.Loginform.get('username') as FormControl;
  }
  get password() :FormControl{
    return this.Loginform.get('password') as FormControl;
  }
  user(){
    // console.log("userloginsucessfuly",this.Loginform.value)
    this.api.userLogin(this.Loginform.value).subscribe((res:any) =>{
      console.log("res",res);
      console.log(res.token);
      console.log(res.users._id);
      localStorage.setItem("token",res.token)
      localStorage.setItem("id",res.users._id)
      localStorage.setItem("username",res.username)
      localStorage.setItem("village",res.village)
      localStorage.setItem("mandal",res.mandal)
      localStorage.setItem("district",res.district)
      if(res){
        alert("login successfuly")
        this.router.navigate(['/dash1'])

      }
      else{
        alert("login failed")

      }
    })
  }
   
}
