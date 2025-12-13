import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {

    return (
        <div>
            PostsPage
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'dummyjson'}>dummyjson</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default PostsPage;