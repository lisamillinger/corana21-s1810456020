import { Component } from "@angular/core";
@Component({
  selector: "bs-home",
  template: `
    <div class="ui container">
      <h1>Happy Impfen :)</h1>
      <a routerLink="../locations" class="ui red button">
        Impfungen
      </a>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
