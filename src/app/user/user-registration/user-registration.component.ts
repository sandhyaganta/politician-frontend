import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { log } from 'console'; 
import { UserServiceService } from '../../user-service.service';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
Registrationform!:FormGroup
photo1:any;
selectedFile!:File

  constructor(private form:FormBuilder,private api:UserServiceService, private router:Router){}
  ngOnInit():void{
    this.Registrationform=new FormGroup({
      photo: new FormControl('',Validators.required),
      fristname:new FormControl('',[Validators.required, Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required, Validators.minLength(3)]),
      username:new FormControl('',[Validators.required, Validators.minLength(3)]),
      password:new FormControl('',[Validators.required, Validators.minLength(3)]),
      fathername:new FormControl('',[Validators.required, Validators.minLength(3)]),
      mobileno:new FormControl('',Validators.required),
      caste:new FormControl('',Validators.required ),
      gender:new FormControl("",Validators.required),
      village:new FormControl('',[Validators.required, Validators.minLength(3)]),
      mandal:new FormControl('',[Validators.required, Validators.minLength(3)]),
      district:new FormControl('',[Validators.required, Validators.minLength(3)]),

    })
  }
get photo():FormControl{
  return this.Registrationform.get('photo') as FormControl;
}
get fristname():FormControl{
  return this.Registrationform.get('fristname') as FormControl;
}
get lastname():FormControl{
  return this.Registrationform.get('lastname') as FormControl;
}
get username():FormControl{
  return this.Registrationform.get('username') as FormControl;
}
get password():FormControl{
  return this.Registrationform.get('password') as FormControl;
}
get fathername():FormControl{
  return this.Registrationform.get('fathername') as FormControl;
}
get mobileno():FormControl{
  return this.Registrationform.get('mobileno') as FormControl;
}
get caste():FormControl{
  return this.Registrationform.get('caste') as FormControl;
}
get gender():FormControl{
  return this.Registrationform.get('gender') as FormControl;
}

get village():FormControl{
  return this.Registrationform.get('village') as FormControl;
}
get mandal():FormControl{
  return this.Registrationform.get('mandal') as FormControl;
}
get district():FormControl{
  return this.Registrationform.get('district') as FormControl;
}

select(event:any){
  this.selectedFile=event.target.files[0] as  File ; 
  console.log(this.selectedFile)
}


uploadFile(){

  const data=new FormData();
  data.append("photo",this.selectedFile)
  data.append('fristname',this.Registrationform.value.fristname)
  data.append('lastname',this.Registrationform.value.lastname)
  data.append('username',this.Registrationform.value.username)
  data.append('password',this.Registrationform.value.password)
  data.append('fathername',this.Registrationform.value.fathername)
  data.append('mobileno',this.Registrationform.value.mobileno)
  data.append('caste',this.Registrationform.value.caste)
  data.append('village',this.Registrationform.value.village)
  data.append('mandal',this.Registrationform.value.mandal)
  data.append('district',this.Registrationform.value.district)



  // const f=this.selectedFile.item[0]
  console.log(data,'data');
  
  this.api.userCreate(data).subscribe((res:any) =>{
    console.log(res,"usercheck");
    this.router.navigate(["/user-log"])
  })
}

}
