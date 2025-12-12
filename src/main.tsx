import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../components/pages/UsersPage.tsx";
import PostsPage from "../components/pages/PostsPage.tsx";
import CommentsPage from "../components/pages/CommentsPage.tsx";
import ProductsPage from "../components/pages/ProductsPage.tsx";
import HomePage from "../components/pages/HomePage.tsx";


// const router = createBrowserRouter([
//
//         {
//             path: '/', element: <MainLayout/>, children: [
//                 {index: true, element: <HomePage/>},
//                 {path: 'users', element: <UsersPage/>},
//                 {path: 'comments', element: <CommentsPage/>},
//                 {path: 'products', element: <ProductsPage/>},
//                 {path: 'posts', element: <PostsPage/>},
//             ]
//         }
//     ]
// )

createRoot(document.getElementById('root')!)
    .render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>

                    <Route index element={<HomePage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="comments" element={<CommentsPage />} />
                    <Route path="products" element={<ProductsPage />} />

                    <Route path="posts" element={<PostsPage />}>
                        <Route path="1" element={<div>cont 1</div>} />
                        <Route path="2" element={<div>cont 2</div>} />
                        <Route path="3" element={<div>cont 3</div>} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>)
