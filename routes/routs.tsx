import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/pages/HomePage";
import UsersPage from "../components/pages/UsersPage";
import PostsPage from "../components/pages/PostsPage";
import CommentsPage from "../components/pages/CommentsPage";
import ShowUsersJsonPlaceholder from "../components/users/ShowUsersJsonPlaceholder.tsx";
import ShowUsersDummy from "../components/users/ShowUsersDummy.tsx";

export const routs = createBrowserRouter([

        {
            path: '/', element: <MainLayout/>, children: [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage/> , children:[
                        { path:'jsonplaceholder', element: <ShowUsersJsonPlaceholder/>},
                        { path:'dummyjson', element: <ShowUsersDummy/>}
                    ]},
                {path: 'posts', element: <PostsPage/>, children:[
                        {path: 'jsonplaceholder', element: <div>Content jsonplaceholder</div>},
                        {path: 'dummyjson', element: <div>Content dummyjson</div>}
                    ]},
                {path: 'comments', element: <CommentsPage/>, children:[
                        {path: 'jsonplaceholder', element: <div>Content jsonplaceholder</div>},
                        {path: 'dummyjson', element: <div>Content dummyjson</div>}
                    ]},
            ]
        }
    ]
)