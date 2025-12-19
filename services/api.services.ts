import type {IBaseUserModel} from "../models/IBaseUserModel";

const baseUrl = "https://dummyjson.com";

export const userServices = {
     getUsers: async (pg:string):Promise<IBaseUserModel> => {
         const limit = 30;
         let skip = 0;

         if(+pg > 0) {
              skip = limit * (+pg) - limit;
         }

         const response = await fetch(baseUrl + "/users?skip=" + skip)
             .then((res) => res.json());

         return response;

    }
}