import {IUserCoordinates} from "./IUserCoordinates";

export class IUserAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUserCoordinates;
    country: string;
}