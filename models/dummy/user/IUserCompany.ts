import {IUserAddress} from "./IUserAddress";

export interface IUserCompany {
    department: string;
    name: string;
    title: string;
    address: IUserAddress;
}