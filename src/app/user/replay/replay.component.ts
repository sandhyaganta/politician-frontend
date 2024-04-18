import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { AdminServiceService } from '../../admin-service.service';
import { CommonModule } from '@angular/common';
import { unzip } from 'zlib';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-replay',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './replay.component.html',
  styleUrl: './replay.component.css',
})
export class ReplayComponent implements OnInit {
  Replayform!: FormGroup;
  data: any;
  ss: any;
  cid: any;

  constructor(
    private api: UserServiceService,
    private service: AdminServiceService,
    private form: FormBuilder,
    private route: ActivatedRoute,
    private common: CommonService
  ) {
  }
  ngOnInit(): void {
    const uid = localStorage.getItem('id');
    const comId = this.common.getComplient();
    this.service.getreplay(comId).subscribe((res: any) => {
      this.data = res;
    });
    this.Replayform = this.form.group({
      replay: [''],
      role: ['user'],
      date: [''],
      complientsid: comId,
      roleid: uid
    });
  }

  userreplay() {
    this.service.adminreplay(this.Replayform.value).subscribe((res: any) => {
      console.log('complients', res);
    });
  }
}
