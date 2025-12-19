import {useEffect, useState} from "react";
import {userServices} from "../../../services/api.services";
import type IUser from "../../../models/IUser";
import {useSearchParams} from "react-router-dom";
import UserComponent from "../user-component/user-component.tsx";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const [query] = useSearchParams();
    const pg = query.get('pg') || '1';

    useEffect(() => {
        if(pg){
            userServices.getUsers(pg).then(users => setUsers(users.users));
        }
    }, [query]);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent user={user} key={user.id} />
            )}
        </div>
    );
};

export default UsersComponent;