import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthDataPage from "../pages/AuthDataPage";
import LoginPage from "../pages/LoginPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "login", element: <LoginPage/>},
            {path: "login/data", element: <AuthDataPage/>},
        ]
    }
])