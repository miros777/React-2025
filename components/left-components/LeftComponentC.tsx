import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftComponentC = () => {

    const {themChange} = useContext(MyContext);
    const handlerBlack = ()=>{
        themChange('them-black');
    }

    const handlerWhite = ()=>{
        themChange('them-white');
    }
    return (
        <div className="mb-8">
            <div className="font-bold">LeftComponentC</div>
            <hr/>

            <button className="bg-red-500 p-3 text-white" onClick={handlerBlack}>Black</button>
            <button className="bg-red-500 p-3 text-white" onClick={handlerWhite}>White</button>
        </div>
    );
};

export default LeftComponentC;