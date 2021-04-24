import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Location } from '../shared/location';
import { ActivatedRoute } from "@angular/router";
import { allLocationsService } from "../shared/all-locations.service";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})

export class LocationDetailsComponent implements OnInit {
  location: Location;

  constructor(
    private app: allLocationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.location = this.app.getSingle(params['title']);
     }


}