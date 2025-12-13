import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            CommentsPage
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;