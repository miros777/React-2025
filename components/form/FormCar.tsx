import {useForm} from "react-hook-form";
import type ICar from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/validator.new.cars.ts";
import {carsServices} from "../../services/api.serviser.ts";

const FormCar = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const formSubmit = (data: ICar) => {
        console.log(data);
        carsServices.addCar(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)}>

                <div>
                    <input className="border-2 border-gray-700 focus:border-pink-600" type="text" {...register('brand')} placeholder="Brend"/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input className="border-2 border-gray-700 focus:border-pink-600" type="number" {...register('price')} placeholder="Price"/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input className="border-2 border-gray-700 focus:border-pink-600" type="number" {...register('year')} placeholder="Year"/>
                    <div>{errors.year?.message}</div>
                </div>
                <button className="bg-red-500 flex">Create Car</button>
            </form>
        </div>
    );
};

export default FormCar;