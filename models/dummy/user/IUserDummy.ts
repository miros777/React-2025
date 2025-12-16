import type {IUserCompany} from "./IUserCompany";
import type {IUserCrypto} from "./IUserCrypto";
import type {IUserBank} from "./IUserBank";
import type {IUserAddress} from "./IUserAddress";
import type {IUserHair} from "./IUserHair";

export default interface IUserDummy {
   id: number;
   firstName: string;
   lastName: string;
   maidenName: string;
   age: number;
   gender: string;
   email: string;
   phone: string;
   username: string;
   password: string;
   birthDate: string;
   image: string;
   bloodGroup: string;
   height: number;
   weight: number;
   eyeColor: string;
   hair: IUserHair;
   ip: string;
   address: IUserAddress;
   macAddress: string;
   university: string;
   bank: IUserBank;
   company: IUserCompany;
   ein: string;
   ssn: string;
   userAgent: string;
   crypto: IUserCrypto;
   role: string;
}
