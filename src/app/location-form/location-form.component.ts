import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl
} from "@angular/forms";

import { LocationFactory } from "../shared/location-factory";
import { allLocationsService } from "../shared/all-locations.service";
import { Location } from "../shared/location";
import { Vaccination } from "../shared/vaccination";



@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  locationForm: FormGroup;
  location = LocationFactory.empty();

  errors: { [key: string]: string } = {};
  isUpdatingLocation = false;
  vaccinations: FormArray;

  constructor(
    private fb: FormBuilder,
    private app: allLocationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm() {}

}