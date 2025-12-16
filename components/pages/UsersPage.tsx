import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <h1 className="text-center">UsersPage</h1>
            <Outlet/>
        </div>
    );
};

export default UsersPage;