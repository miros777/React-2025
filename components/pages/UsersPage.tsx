import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div className="text-center">
            <h1>UsersPage</h1>
            <Outlet/>
        </div>
    );
};

export default UsersPage;