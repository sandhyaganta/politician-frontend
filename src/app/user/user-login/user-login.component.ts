import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  Loginform!:FormGroup;
  constructor(private form:FormBuilder){}
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
   
}
