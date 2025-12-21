import {Link} from "react-router-dom";
import "./menu.css";

const MainMenu = () => {
    return (
        <div>
            <ul className="flex justify-center bg-indigo-300 p-3">
                <li><Link to={"/"}>Home page</Link></li>
                <li><Link to={"/cars"}>Cars</Link></li>
                <li><Link to={"/addcar"}>Add car</Link></li>
            </ul>

        </div>
    );
};

export default MainMenu;