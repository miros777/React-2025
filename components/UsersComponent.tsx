import UserComponent from "./UserComponent";
import {useCallback, useMemo, useState} from "react";
import type {IUser} from "../models/IUser";
import {useFetch} from "../hooks/useFetch.tsx";
import type {IResponseUser} from "../models/IResponseUser.ts";

const UsersComponent = () => {


    const {users} = useFetch<IResponseUser>('https://dummyjson.com/users?limit=5',
        {
            users: [],
            total: 0,
            skip: 0,
            limit: 0,
        }
    );


    const [user, setUser] = useState<IUser>();

    const foo = useCallback(
        (user: IUser) => {
            setUser(user);
        }, []);
    const arrNum: number[] = useMemo(() => {
        return [2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, [])

    const testFunc = useCallback((): void => {
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