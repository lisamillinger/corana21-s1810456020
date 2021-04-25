import { Component, VERSION } from "@angular/core";
import { Location } from "./shared/location";
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "bs-root",
  templateUrl: './app.component.html'
})

export class AppComponent {
  myValue: string;

  location: Location;

  /*constructor(private http: HttpClient) {
   
  }*/

  /*showList() {
    this.detailsOn = false;
    this.listOn = true;
  }

  showDetails(location: Location) {
    this.location = location;
    this.listOn = false;
    this.detailsOn = true;
  }*/

  //listOn = true;
  //detailsOn = false;

  name = "Angular " + VERSION.major;

  title = "corana21";
}
