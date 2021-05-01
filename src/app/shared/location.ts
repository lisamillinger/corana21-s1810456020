import { Vaccination } from "./vaccination";
export { Vaccination } from "./vaccination";
import { People } from "./people";
export { People } from "./people";

export class Location {
  constructor(
    public id: number,
    public post_code: number,
    public city: string,
    public address: string,
    public description: string,
    public title: string,
    public vaccinations?: Vaccination[]
  ) {}
}
