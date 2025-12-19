import {Link} from "react-router-dom";
import type {FC} from "react";

const TopMenu:FC = () => {
    return (
        <ul className="flex bg-amber-100 text-red-900 p-5">
            <li><Link to={""}>Home Page</Link></li>
            <li><Link to={"/users"}>User Page</Link></li>
        </ul>
    );
};

export default TopMenu;