import type {IUser} from "../models/IUser";
import {type FC, memo} from "react";

type PropsUser = {
    foo: (user:IUser) => void,
    user: IUser,
    testFunc:()=>void,
    arrNum: number[]
}

const UserComponent:FC<PropsUser> = memo(({user, foo, testFunc, arrNum}:PropsUser) => {

    //test (how works useMemo and useCallBack)
        testFunc();
        console.log(arrNum)

    return (
        <div className="bg-blue-50">
            <div>{user.firstName}</div>
            <button className="bg-red-500" onClick={()=>{foo(user)}}>Show User {user.id}</button>

            <hr/>
        </div>
    );
});

export default UserComponent;