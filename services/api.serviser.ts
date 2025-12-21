import axios from "axios";
import type ICar from "../models/ICar";

const instance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});

// instance.interceptors.request.use();

export const carsServices = {
    getCars: async ():Promise<ICar[]> => {
        const response = await instance.get<ICar[]>('/cars');
        const cars = response.data;

        return cars
    },

    addCar: async (car: ICar) => {
         await instance.post<ICar>('/cars', car);
    }
}


