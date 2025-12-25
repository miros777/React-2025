import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul className="flex justify-around">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'login'}>Login</Link></li>
                <li><Link to={'login/data'}>Login Data</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;