import type {IUserGeo} from "./IUserGeo.ts";

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserGeo;
}