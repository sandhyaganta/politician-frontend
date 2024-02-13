import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
Registrationform!:FormGroup
  constructor(private form:FormBuilder){}
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
get village():FormControl{
  return this.Registrationform.get('village') as FormControl;
}
get mandal():FormControl{
  return this.Registrationform.get('mandal') as FormControl;
}
get district():FormControl{
  return this.Registrationform.get('district') as FormControl;
}

}
