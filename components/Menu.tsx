import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className="bg-amber-100">
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'/users'} >Users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;