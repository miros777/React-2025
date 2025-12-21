import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import Homepage from "../pages/home-page/Homepage.tsx";
import CarsPage from "../pages/cars-page/CarsPage.tsx";

const routes = createBrowserRouter([{
    path: "/", element: <MainLayout/>, children: [
        {index: true, element: <Homepage/>},
        {path: "cars", element: <CarsPage/>},
    ]
}])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
  ,
)
