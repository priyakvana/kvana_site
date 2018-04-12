import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from'@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';

import { ServicesComponent } from './services/services.component';
const appRoutes:Routes=[
    {
    path:'',
    component:HomeComponent
    },
    {
    path:'about',
    component:AboutComponent
    },
    {
    path:'career',
    component:CareerComponent
    },
   
    {
    path:'contact',
    component:ContactComponent
    },
    {
    path:'services',
    component:ServicesComponent
    }
    
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
