import type IUser from "../models/UserModel";
const baseUrl = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch(baseUrl)
        .then(res => res.json())
};