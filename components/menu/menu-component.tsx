import {Link} from "react-router-dom";
import type {FC} from "react";

export const MenuComponent:FC = () => {
    return (
        <div>
            <ul className="flex justify-between">
                <li><Link to={""}>Home page</Link></li>
                <li><Link to={"posts"}>Posts</Link></li>
                <li><Link to={"users"}>Users</Link></li>
                <li><Link to={"comments"}>Comments</Link></li>
            </ul>
        </div>
    );
};