import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/pages/HomePage";
import UsersPage from "../components/pages/UsersPage";
import PostsPage from "../components/pages/PostsPage";
import CommentsPage from "../components/pages/CommentsPage";
import ShowUsersJsonPlaceholder from "../components/users/ShowUsersJsonPlaceholder.tsx";
import ShowUsersDummy from "../components/users/ShowUsersDummy.tsx";
import ShowPostsDummy from "../components/posts/ShowPostsDummy.tsx";
import ShowPostsJsonPlaceholder from "../components/posts/ShowPostsJsonPlaceholder.tsx";
import ShowCommentsJsonPlaceholder from "../components/comments/ShowCommentsJsonPlaceholder.tsx";
import ShowCommentsDummy from "../components/comments/ShowCommentsDummy.tsx";

export const routs = createBrowserRouter([

        {
            path: '/', element: <MainLayout/>, children: [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage/> , children:[
                        { path:'jsonplaceholder', element: <ShowUsersJsonPlaceholder/>},
                        { path:'dummyjson', element: <ShowUsersDummy/>}
                    ]},
                {path: 'posts', element: <PostsPage/>, children:[
                        {path: 'jsonplaceholder', element: <ShowPostsJsonPlaceholder/>},
                        {path: 'dummyjson', element: <ShowPostsDummy />}
                    ]},
                {path: 'comments', element: <CommentsPage/>, children:[
                        {path: 'jsonplaceholder', element: <ShowCommentsJsonPlaceholder/>},
                        {path: 'dummyjson', element: <ShowCommentsDummy/>}
                    ]},
            ]
        }
    ]
)