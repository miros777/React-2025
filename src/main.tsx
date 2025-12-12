import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../components/pages/UsersPage.tsx";
import PostsPage from "../components/pages/PostsPage.tsx";
import CommentsPage from "../components/pages/CommentsPage.tsx";
import ProductsPage from "../components/pages/ProductsPage.tsx";
import HomePage from "../components/pages/HomePage.tsx";


const router = createBrowserRouter([

        {
            path: '/', element: <MainLayout/>, children: [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage/>},
                {path: 'comments', element: <CommentsPage/>},
                {path: 'products', element: <ProductsPage/>},
                {path: 'posts', element: <PostsPage/>},
            ]
        }
    ]
)

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
    ,
)
