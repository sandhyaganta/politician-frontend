import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';
import { VedioComponent } from './vedio/vedio.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"mainpage",component:MainpageComponent},
    {path:"about",component:AboutComponent},
    {path:"media",component:MediaComponent,children:[
        {path:"images",component:ImagesComponent},
        {path:"vedio",component:VedioComponent}
    ]},
    {path:"admin-log",component:AdminLoginComponent},
    {path:"dash",component:AdminDashboardComponent,children:[
        {path:"",component:HomeComponent},
        {path:"home",component:HomeComponent}
    ]},
    {path:"user-log",component:UserLoginComponent},
    {path:"user-reg",component:UserRegistrationComponent}
    
    
];
