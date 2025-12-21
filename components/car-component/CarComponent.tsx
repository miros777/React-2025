import type {FC} from "react";
import type ICar from "../../models/ICar.ts";

type PropsCar = {
    car: ICar;
}
const CarComponent:FC<PropsCar> = ({car}) => {
    return (
        <div className="bg-amber-100 p-6 m-2">
            <div>{car.id}</div>
            <div>{car.brand}</div>
            <div>{car.price}</div>
            <div>{car.year}</div>
        </div>
    );
};

export default CarComponent;