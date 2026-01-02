import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import ComplexPage from "../pages/ComplexPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routs = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <HomePage/>},
        {path: "complex", element: <ComplexPage/>},
        {path: "posts", element: <PostsPage/>},
        {path: "users", element: <UsersPage/>},
        {path: "comments", element: <CommentsPage/>},
    ]
}])