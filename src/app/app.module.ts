import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { allLocationsService } from './shared/all-locations.service';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationFormErrorMessagesComponent } from './location-form-error-messages/location-form-error-messages.component';
import { LocationValidatorsComponent } from './location-validators/location-validators.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LocationListComponent, LocationListItemComponent, LocationDetailsComponent, HomeComponent,  LocationFormComponent, LocationFormErrorMessagesComponent, LocationValidatorsComponent],
  bootstrap:    [ AppComponent ],
  providers: [allLocationsService]
})
export class AppModule { }
