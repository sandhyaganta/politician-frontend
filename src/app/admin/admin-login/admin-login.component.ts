import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import Module from 'module';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  Loginform!: FormGroup;
  constructor(
    private form: FormBuilder,
    private api: AdminServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.Loginform = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  get Username(): FormControl {
    return this.Loginform.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.Loginform.get('password') as FormControl;
  }

  adminlogin() {
    this.api.adminLogin(this.Loginform.value).subscribe((res: any) => {
      console.log('res', res);
      console.log(res.token);
      localStorage.setItem('token', res.token);

      if (res) {
        alert('login succesfuly');
        this.router.navigate(['/dashboard']);
      } else {
        alert('login failed');
      }
    });
  }
}
