import { Injectable } from "@angular/core";
import { Location } from "./location";
import { Vaccination } from "./vaccination";
import { People } from "./people";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class allLocationsService {
  private api = "https://corana21.s1810456020.student.kwmhgb.at/api";
totalAngularPackages: any;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Location>> {

    return this.http
      .get(`${this.api}/locations`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));  
  }

  getAllVaccinations(): Observable<Array<Vaccination>> {
    return this.http
      .get(`${this.api}/vaccinations`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));  
  }

  getSingle(title: string): Observable<Location> {
    return this.http
      .get<Location>(`${this.api}/locations/${title}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingleVaccination(title: string): Observable<Vaccination> {
    return this.http
      .get<Vaccination>(`${this.api}/vaccination/${title}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  create(location: Location): Observable<any> {
    return this.http
      .post(`${this.api}/location`, location)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  update(location: Location): Observable<any> {
    return this.http
      .put(`${this.api}/location/${location.title}`, location)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  remove(title: string): Observable<any> {
    return this.http
      .delete(`${this.api}/location/${title}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
