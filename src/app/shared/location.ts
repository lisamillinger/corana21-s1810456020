import { Vaccination } from "./vaccination";

export class Location {
  constructor(
    public id: number,
    public post_code: number,
    public city: string,
    public address: string,
    public description: string,
    public title: string,
    public vaccinations: Vaccination[]
  ) {}
}
