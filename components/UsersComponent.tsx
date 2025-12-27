import UserComponent from "./UserComponent";
import {useCallback, useEffect, useMemo, useState} from "react";
import type {IUser} from "../models/IUser";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=5')
            .then(res => res.json())
            .then(res => setUsers(res.users))
    }, [])


    const foo = useCallback(
        (user: IUser) => {
            setUser(user);
    }, []);
    const arrNum:number[] = useMemo(() => {
        return[2,3,4,5,6,7,8,9,10]
    },[])

    const testFunc = useCallback(():void => {
        console.log('000000')
    }, []);


    return (
        <div>
            UsersComponent
            {users.map(user =>
                <div key={user.id}>
                    <UserComponent foo={foo} user={user} testFunc={testFunc} arrNum={arrNum}/>
                </div>
            )}

            <div>
                <div>{user?.email}</div>
                <div>{user?.firstName}</div>
            </div>

        </div>
    );
};
export default UsersComponent;