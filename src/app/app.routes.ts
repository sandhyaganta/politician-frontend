import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"mainpage",component:MainpageComponent},
    {path:"about",component:AboutComponent}
];
