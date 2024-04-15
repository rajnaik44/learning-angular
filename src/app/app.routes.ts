import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenorfoundComponent } from './pagenorfound/pagenorfound.component';

export const routes: Routes = [
    {path:'home', component:DashboardComponent,title:'home page'},
    {path:'aboutus',component:AboutusComponent,title:'about page'},
    {path:'contactus',component:ContactusComponent,title:'contact page'},
    {path:'**',component:PagenorfoundComponent,title:'page not found'}
];
