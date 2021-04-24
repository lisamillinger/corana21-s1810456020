import { Component, VERSION } from "@angular/core";
import { Location } from "./shared/location";

@Component({
  selector: "bs-root",
  template: `
    <app-location-list
      *ngIf="listOn"
      (showDetailsEvent)="showDetails($event)"></app-location-list>
    <app-location-details *ngIf="detailsOn"
      [location]="location"
      (showListEvent)="showList()"
    ></app-location-details>
  `
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  location: Location;

  showList() {
    this.detailsOn = false;
    this.listOn = true;
  }

  showDetails(location: Location) {
    this.listOn = false;
    this.detailsOn = true;
  }

  name = "Angular " + VERSION.major;

  title = "corana21";
}
