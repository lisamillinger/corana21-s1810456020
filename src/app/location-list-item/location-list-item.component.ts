import { Component, OnInit, Input } from '@angular/core';
import {Location} from '../shared/location';

@Component({
  selector: 'a.app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.css']
})
export class LocationListItemComponent implements OnInit {
  @Input() location: Location

  constructor() { }

  ngOnInit() {
    console.log(this.location['vaccination']['0']);
    console.log(this.location['vaccination']['1']);
  
}

}