import type {IUserAddress} from "./IUserAdress";
import type {IUserCompany} from "./IUserCompany";

export default interface IUserJsonPlaceholder {
   id: number;
   name: string;
   username: string;
   email: string;
   address: IUserAddress;
   phone: string;
   website: string;
   company: IUserCompany;
}





