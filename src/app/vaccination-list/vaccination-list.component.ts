import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Vaccination } from "../shared/vaccination";
import { Location } from "../shared/location";
import { allLocationsService } from '../shared/all-locations.service';

@Component({
  selector: "app-vaccination-list",
  templateUrl: "./vaccination-list.component.html",
  styleUrls: ["./vaccination-list.component.css"]
})
export class VaccinationListComponent implements OnInit {
  
  vaccinations: Vaccination[];
  @Output() showDetailsEvent = new EventEmitter<Vaccination>();

  constructor(private app: allLocationsService) {}

  ngOnInit() {
    console.log("hello from location-list ngOnInit");
    this.app.getAllVaccinations().subscribe(res => this.vaccinations = res);
    console.log(this.app);
  }
}