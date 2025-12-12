import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/menu-component.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;