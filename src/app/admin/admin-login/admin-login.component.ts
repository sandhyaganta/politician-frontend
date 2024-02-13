import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Module from 'module';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  Loginform!:FormGroup
  constructor(private form:FormBuilder){}
  ngOnInit():void{
    this.Loginform= new FormGroup({
     username: new FormControl('',[Validators.required, Validators.minLength(3)]),
     password: new FormControl('',[Validators.required, Validators.minLength(3)])
    })
      
  }
  get Username():FormControl {
    return this.Loginform.get('username') as FormControl;
  }
  get password():FormControl{
    return this.Loginform.get('password') as FormControl;
  }

}
