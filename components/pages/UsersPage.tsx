import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            UsersPage
            <ul>
                <li>
                    <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default UsersPage;