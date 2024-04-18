import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-complients',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './complients.component.html',
  styleUrl: './complients.component.css',
})
export class ComplientsComponent {
  Registrationform!: FormGroup;
  data: any;
  uid: any;
  allcomplient: any;
  cid: any;

  constructor(
    private api: UserServiceService,
    private service: AdminServiceService,
    private form: FormBuilder,
    private router:Router,
    private common: CommonService
  ) {}
  ngOnInit(): void {
    this.uid = localStorage.getItem('id');
    this.api.getcomplient(this.uid).subscribe((res: any) => {
      this.allcomplient = res;
    });

    this.Registrationform = this.form.group({
      date: [''],
      complient: [''],
      userid: [''],
    });
  }

  complient() {
    let cc = {
      date: this.Registrationform.value.date,
      userid: this.uid,
      complient: this.Registrationform.value.complient,
    };
    this.api.usercomplients(cc).subscribe((res: any) => {
      console.log('complients', res);
    });
  }

  replies(id:any) {
    this.common.setComplient(id);
    this.router.navigate(['dash1/replay'])
  }
}
