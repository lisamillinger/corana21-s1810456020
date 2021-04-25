import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Vaccination } from "../shared/vaccination";
import { Location } from "../shared/location";
import { allLocationsService } from '../shared/all-locations.service';

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.css"]
})
export class LocationListComponent implements OnInit {
  
  locations: Location[];
  @Output() showDetailsEvent = new EventEmitter<Location>();

  constructor(private app: allLocationsService) {}

  ngOnInit() {
    console.log("hello from location-list ngOnInit");
    this.app.getAll().subscribe(res => this.locations = res);
    console.log(this.app);
  }

  showDetails(location: Location) {
    this.showDetailsEvent.emit(location);
  }
}
