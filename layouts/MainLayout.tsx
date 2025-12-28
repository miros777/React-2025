import LeftComponent from "../components/left-components/LeftComponent.tsx";
import RightComponent from "../components/right-components/RightComponent.tsx";
import { MyContext} from "../context/MyContext.tsx";
import {useState} from "react";

const MainLayout = () => {

    const [themColor, setThemColor] = useState<string>('white-them');
    return (
        <div>
            <MyContext.Provider value={{
                theme: themColor,
                themChange: (themValue) => {
                    setThemColor(themValue)
                }
            } }>

            <LeftComponent/><hr/>
            <RightComponent/><hr/>

            </MyContext.Provider>
        </div>
    );
};

export default MainLayout;