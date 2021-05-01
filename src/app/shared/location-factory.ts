import { Location } from "./location";
import { Vaccination } from "./vaccination";

export class LocationFactory {
  static empty(): Location {
    return new Location(null, 0, '', '', '', '', [{id: 0, title: '', date: new Date(), max_participants: 0, 
    current_registrations: 0, full: false}]);
  }

  static fromObject(rawLocation: any): Location {
    return new Location(
      rawLocation.id,
      rawLocation.post_code,
      rawLocation.city,
      rawLocation.address,
      rawLocation.description,
      rawLocation.title,
      rawLocation.vaccinations
    );
  }
}
