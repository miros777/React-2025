import axios, {type AxiosResponse} from 'axios';
import type IUserWithToken from "../models/IUserWithToken.ts";
import type {ILoginData} from "../models/ILoginData.ts";
import {retrieveTokens} from "../helper/helper.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObj) => {
    if (requestObj.method?.toUpperCase() === 'GET') {
            requestObj.headers.Authorization = 'Bearer ' + retrieveTokens<IUserWithToken>('user').accessToken;
        }
        return requestObj;
    }
)

export const login = async (requestObj: ILoginData): Promise<IUserWithToken> => {
    const {data: userWithToken} = await axiosInstance.post('auth/login', requestObj);
    localStorage.setItem('user', JSON.stringify(userWithToken));

    return userWithToken
}

export const getAuthData = async <T>():Promise<T> => {
   const allProductsResponse:AxiosResponse<T> = await axiosInstance.get('auth/products');

   return allProductsResponse.data;
}
export const refreshToken = async () => {
    const userWithToken = retrieveTokens<IUserWithToken>('user');
    const {data: {accessToken, refreshToken}}  = await axiosInstance.post('auth/refresh', {
        refreshToken: userWithToken.refreshToken,
        expiresInMins: 1
    });

    userWithToken.accessToken = accessToken;
    userWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(userWithToken));
}