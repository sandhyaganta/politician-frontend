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

    console.log('uuuuu', this.uid);

    this.api.getcomplient().subscribe((res: any) => {
      this.allcomplient = res;
      console.log('res', this.allcomplient);

      // this.cid=this.complients.map((cc:any) =>cc._id)
      // console.log("allcomplients",this.cid);
    });

    this.Registrationform = this.form.group({
      date: [''],
      complients: [''],
      userid: [''],
    });
  }

  complient() {
    let cc = {
      date: this.Registrationform.value.date,
      userid: this.uid,
      complients: this.Registrationform.value.complients,
    };
    console.log(cc);

    this.api.usercomplients(cc).subscribe((res: any) => {
      console.log('complients', res);
    });
  }

  replies(id:any) {
    console.log("id",id);
    this.common.setComplient(id);
    this.router.navigate(['dash1/replay'])
  }
}
