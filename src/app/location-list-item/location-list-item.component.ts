import { Component, OnInit, Input } from "@angular/core";
import { Location } from "../shared/location";
import { Vaccination } from "../shared/vaccination";

@Component({
  selector: "a.app-location-list-item",
  templateUrl: "./location-list-item.component.html",
  styleUrls: ["./location-list-item.component.css"]
})
export class LocationListItemComponent implements OnInit {
  @Input() location: Location;

  constructor() {}

  ngOnInit() {
    console.log("hello");
    console.log(this.location["vaccination"]);
  }
}
