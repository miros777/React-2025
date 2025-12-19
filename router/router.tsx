import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../components/pages/HomePage/HomePage.tsx";
import UsersPage from "../components/pages/UsersPage/UsersPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>}
        ]
    },
])