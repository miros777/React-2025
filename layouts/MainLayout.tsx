import MainMenu from "../components/main-menu/MainMenu";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <MainMenu/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;