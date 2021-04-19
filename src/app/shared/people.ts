import { Vaccination } from "./vaccination";

export class People {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public date: Date,
    public sex: string,
    public sv_number: number,
    public address: string,
    public email: string,
    public password: string,
    public telephone_number: number,
    public vaccinated: boolean,
    public admin: boolean,
    public vaccinations?: Vaccination
  ) {}
}
