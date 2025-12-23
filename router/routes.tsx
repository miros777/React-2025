import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/home-page/Homepage";
import CarsPage from "../pages/cars-page/CarsPage";
import CreateCar from "../pages/create-car/CreateCar.tsx";

export const routes = createBrowserRouter([{
    path: "/", element: <MainLayout/>, children: [
        {index: true, element: <Homepage/>},
        {path: "cars", element: <CarsPage/>},
        {path: "addcar", element: <CreateCar/>},
    ]
}])