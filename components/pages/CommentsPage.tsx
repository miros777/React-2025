import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <h1 className="text-center">CommentsPage</h1>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;