import { Component, VERSION } from "@angular/core";

@Component({
  selector: "bs-root",
  template: "<app-location-list></app-location-list>",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  title = 'corana21';
}
