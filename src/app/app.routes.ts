import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';
import { VedioComponent } from './vedio/vedio.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"mainpage",component:MainpageComponent},
    {path:"about",component:AboutComponent},
    {path:"media",component:MediaComponent,children:[
        {path:"images",component:ImagesComponent},
        {path:"vedio",component:VedioComponent}
    ]}
];
