import type {IUser} from "./IUser.ts";

export interface IResponseUser {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}
