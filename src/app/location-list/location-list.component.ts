import { Component, OnInit } from "@angular/core";
import { Vaccination } from "../shared/vaccination";
import { Location } from "../shared/location";

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.css"]
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  ngOnInit() {
    this.locations = [
      new Location(
        1,
        5020,
        "Salzburg",
        "Zaunergasse 11",
        "free vaccinations!",
        "TEST",
        [new Vaccination(1, "IMPFUNG01", new Date(2021, 4, 5), 10, 5, false),
        new Vaccination(4, "Impfung3", new Date(2032, 1, 1), 500, 499, false)]
      ),
      new Location(
        2,
        4232,
        "Hagenberg",
        "Softwarepark 23",
        "study and impf",
        "HGBIMPFTEST",
        [new Vaccination(2, "Impfung02", new Date(2021, 1, 1), 50, 50, true)]
      ),
      new Location(
        3,
        4020,
        "Linz",
        "Pfarrgasse",
        "eat and impf",
        "FRONTFOOD IMPFUNG",
        [new Vaccination(3, "Impfung03", new Date(2022, 9, 9), 12, 1, false)]
      )
    ];
  }
}
