import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Location } from '../shared/location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() location: Location
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showLocationList() {
    this.showListEvent.emit();
  }

}