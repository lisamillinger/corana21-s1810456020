import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Location } from '../shared/location';
import { ActivatedRoute, Router } from "@angular/router";
import { allLocationsService } from "../shared/all-locations.service";
import { LocationFactory } from '../shared/location-factory';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})

export class LocationDetailsComponent implements OnInit {
  location: Location = LocationFactory.empty();

  constructor(
    private app: allLocationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("hello");
    const params = this.route.snapshot.params;
    this.app.getSingle(params['title']).subscribe(l => this.location = l);
     }

     removeLocation() {
    if (confirm('Ort wirklich löschen?')) {
    this.app.remove(this.location.title).subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
}
     }




}