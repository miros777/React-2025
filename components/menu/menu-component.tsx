import {Link} from "react-router-dom";
import type {FC} from "react";

export const MenuComponent:FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={""}>Home page</Link></li>
                <li><Link to={"posts"}>Posts</Link></li>
                <li><Link to={"users"}>Users</Link></li>
                <li><Link to={"comments"}>Comments</Link></li>
                <li><Link to={"products"}>Products</Link></li>
            </ul>
        </div>
    );
};