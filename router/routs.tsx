import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const routs = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <HomePage/>},
        {path: "posts", element: <PostsPage/>},
        {path: "comments", element: <CommentsPage/>},
    ]
}])