import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { allLocationsService } from './shared/all-locations.service';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LocationListComponent, LocationListItemComponent, LocationDetailsComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [allLocationsService]
})
export class AppModule { }
