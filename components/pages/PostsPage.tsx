import {Outlet} from "react-router-dom";

const PostsPage = () => {

    return (
        <div>
            <h1 className="text-center">PostsPage</h1>
            <Outlet/>
        </div>
    );
};

export default PostsPage;