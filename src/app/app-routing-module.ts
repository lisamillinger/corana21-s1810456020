import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LocationDetailsComponent } from
'./location-details/location-details.component';
import { LocationListComponent } from './location-list/location-list.component';
import { HomeComponent } from './home/home.component';
import { LocationFormComponent } from './location-form/location-form.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'locations', component: LocationListComponent },
{ path: 'locations/:title', component: LocationDetailsComponent },
{ path: 'admin', component: LocationFormComponent },
{ path: 'admin/:title', component: LocationFormComponent },
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }
