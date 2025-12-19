import type IUser from "./IUser";

export interface IBaseUserModel {
    users: IUser[]
    total: number,
    skip: number,
    limit: number
}