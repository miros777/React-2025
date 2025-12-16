import {Link} from "react-router-dom";
import type {FC} from "react";
import './menu.css'

export const MenuComponent:FC = () => {
    return (
        <div>
            <ul className="flex justify-between bg-teal-300 font-bold top-menu">
                <li><Link to={""}>Home page</Link></li>
                <li><Link to={"posts/jsonplaceholder"}>Posts Jsonplaceholder</Link></li>
                <li><Link to={"posts/dummyjson"}>Posts Dummyjson</Link></li>
                <li><Link to={"users/jsonplaceholder"}>Users Jsonplaceholder</Link></li>
                <li><Link to={"users/dummyjson"}>Users Dummyjson</Link></li>
                <li><Link to={"comments/jsonplaceholder"}>Comments Jsonplaceholder</Link></li>
                <li><Link to={"comments/dummyjson"}>Comments Dummyjson</Link></li>
            </ul>
        </div>
    );
};