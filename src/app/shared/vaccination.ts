import { Location } from "./location";

export class Vaccination {
  constructor(
    public id: number,
    public title: string,
    public date: Date,
    public max_participants: number,
    public current_registrations: number,
    public location_id: number,
    public full: boolean
  ) {}
}
