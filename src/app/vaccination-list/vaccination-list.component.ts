import { Component, OnInit } from '@angular/core';
import { Location  } from '../shared/location';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'app-vaccination-list',
  templateUrl: './vaccination-list.component.html',
  styleUrls: ['./vaccination-list.component.css']
})
export class VaccinationListComponent implements OnInit {

  vaccinations: Vaccination[];

  ngOnInit() {
    this.vaccinations = [
      new Vaccination(1,
      'Testimpfung',
      new Date(2021, 22, 8),
      50,
      20,
      1,
      false),
    ]
  }

}