import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <h1 className="text-center text-red-600">MENU</h1>
            <ul className="flex flex-wrap justify-between border-cyan-300 border-2">
                <li><Link to={""}>Home</Link></li>
                <li><Link to={"/comments"}>Comments</Link></li>
                <li><Link to={"/posts"}>Posts</Link></li>
                <li><Link to={"/users"}>Users</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;