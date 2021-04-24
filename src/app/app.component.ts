import { Component, VERSION } from "@angular/core";
import { Location } from "./shared/location";

@Component({
  selector: "bs-root",
  templateUrl: './app.component.html'})
  
export class AppComponent {
  listOn = true;
  detailsOn = false;

  location: Location;

  showList() {
    this.detailsOn = false;
    this.listOn = true;
  }

  showDetails(location: Location) {
    this.location = location;
    this.listOn = false;
    this.detailsOn = true;
  }

  name = "Angular " + VERSION.major;

  title = "corana21";
}
