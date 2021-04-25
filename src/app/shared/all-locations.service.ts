import { Injectable } from "@angular/core";
import { Location } from "./location";
import { Vaccination } from "./vaccination";
import { People } from "./people";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class allLocationsService {

  private api = "http://corana21.s1810456020.student.kwmhgb.at/api";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Location>> {
    return this.http.get(`${this.api}/locations`).
    pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllVaccinations(): Observable<Array<Vaccination>> {
    return this.http.get(`${this.api}/vaccinations`).
    pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(title: string): Observable<Location> {
    return this.http.get<Location>(`${this.api}/location/${title}`).
    pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingleVaccination(id: number): Observable<Vaccination> {
    return this.http.get<Vaccination>(`${this.api}/vaccination/${id}`).
    pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(location: Location): Observable<any> {
  return this.http.post(`${this.api}/location`, location)
  .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

   createVaccination(vaccination: Vaccination): Observable<any> {
  return this.http.post(`${this.api}/vaccination`, vaccination)
  .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  update(location: Location): Observable<any> {
  return this.http.put(`${this.api}/location/${location.title}`, location)
.pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  updateVaccination(vaccination: Vaccination): Observable<any> {
  return this.http.put(`${this.api}/vaccination/${vaccination.id}`, vaccination)
.pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

remove(title: string): Observable<any> {
return this.http.delete(`${this.api}/location/${title}`)
.pipe(retry(3)).pipe(catchError(this.errorHandler));
}

removeVaccination(id: number): Observable<any> {
return this.http.delete(`${this.api}/vaccination/${id}`)
.pipe(retry(3)).pipe(catchError(this.errorHandler));
}

private errorHandler(error: Error | any): Observable<any> {
return throwError(error);
}
}





  /*locations: Location[];*/

  /*constructor() {
    this.locations = [
      new Location(
        1,
        5020,
        "Salzburg",
        "Zaunergasse 11",
        "free vaccinations!",
        "TEST",
        [
          new Vaccination(1, "IMPFUNG01", new Date(2021, 4, 5), 10, 5, false),
          new Vaccination(4, "Impfung3", new Date(2032, 1, 1), 500, 499, false)
        ]
      ),
      new Location(
        2,
        4232,
        "Hagenberg",
        "Softwarepark 23",
        "study and impf",
        "HGBIMPFTEST",
        [new Vaccination(2, "Impfung02", new Date(2021, 1, 1), 50, 50, true)]
      ),
      new Location(
        3,
        4020,
        "Linz",
        "Pfarrgasse",
        "eat and impf",
        "FRONTFOOD IMPFUNG",
        [new Vaccination(3, "Impfung03", new Date(2022, 9, 9), 12, 1, false)]
      )
    ];
  }*/

  /*getAll() {
    return this.locations;
  }

  getSingle(title : string) : Location {
    return this.locations.find(location => location.title === title);
  }*/

