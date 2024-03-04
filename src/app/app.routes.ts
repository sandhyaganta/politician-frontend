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
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { Home1Component } from './user/home1/home1.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { ViewPostComponent } from './user/view-post/view-post.component';
import { ComplientsComponent } from './user/complients/complients.component';
import { AdminViewuserComponent } from './admin/admin-viewuser/admin-viewuser.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { AdminViewcomplientsComponent } from './admin/admin-viewcomplients/admin-viewcomplients.component';
import { AdminViewlikesComponent } from './admin/admin-viewlikes/admin-viewlikes.component';
import { ReplayComponent } from './user/replay/replay.component';

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
        {path:"home",component:HomeComponent},
        {path:"user",component:AdminViewuserComponent},
        {path:"post",component:AdminPostComponent},
        {path:"complients1",component:AdminViewcomplientsComponent},
        {path:"viewlikes",component:AdminViewlikesComponent}
    ]},
    {path:"user-log",component:UserLoginComponent},
    {path:"user-reg",component:UserRegistrationComponent},
    {path:"dash1",component:UserDashboardComponent,children:[
        {path:"",component:Home1Component},
        {path:"home1",component:Home1Component},
        {path:"profile",component:ViewProfileComponent},
        {path:"viewpost",component:ViewPostComponent},
        {path:"complients",component:ComplientsComponent},
        {path:"replay",component:ReplayComponent}
    ]}
    
    
];
