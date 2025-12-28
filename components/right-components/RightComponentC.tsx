import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import './right-component-c.css'

const RightComponentC = () => {
    const {theme} = useContext(MyContext);

    return (
        <div>
            <div className="font-bold">RightComponentC</div>
            <div className={theme}>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Deserunt, distinctio enim fuga impedit inventore iusto labore laboriosam
                laborum laudantium maxime nam nisi
                nobis, possimus provident quae quaerat repellat rerum voluptatem!</div>

            <div className="mt-6 font-bold uppercase">now color our them is <span className={`italic ${theme}`}>{theme}</span></div>
        </div>
    );
};

export default RightComponentC;