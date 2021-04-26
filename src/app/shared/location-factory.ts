import { Location } from './location';
import { Vaccination } from './vaccination';

export class VaccinationFactory {

  static empty(): Vaccination {
    return new Vaccination(null, "", new Date(), 0, 0, false);
  }

  static fromObject(rawVaccination: any): Vaccination {
    return new Vaccination(
      rawVaccination.id,
      rawVaccination.title,
      rawVaccination.date,
      rawVaccination.max_participants,
      rawVaccination.current_registrations,
      rawVaccination.full 
    );
  }
}
