import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LocationListComponent, LocationListItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
