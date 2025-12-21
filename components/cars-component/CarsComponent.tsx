import {carsServices} from "../../services/api.serviser.ts";
import {useEffect, useState} from "react";
import type ICar from "../../models/ICar.ts";
import CarComponent from "../car-component/CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
         carsServices.getCars().then(cars => setCars(cars));
    }, []);
    return (
        <div className="flex flex-wrap justify-around">
            {cars.map((car, index) => <CarComponent key={index} car={car} />)}
        </div>
    );
};

export default CarsComponent;