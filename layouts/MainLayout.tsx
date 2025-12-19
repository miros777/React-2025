import {Outlet} from "react-router-dom";
import TopMenu from "../components/menu/TopMenu.tsx";

const MainLayout = () => {
    return (
        <div>
            <TopMenu/>
            <h1>Main Layout</h1>
            <Outlet/>
        </div>
    );
};

export default MainLayout;