import {useEffect, useState} from "react";
import type IUserDummy from "../../models/dummy/user/IUserDummy.ts";
import {userServicesDummy} from "../../services/api.servises";
import ShowUserDummy from "./ShowUserDummy.tsx";

const ShowUsersDummy = () => {

    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        userServicesDummy.getUsers().then(({users})=> {
            setUsers(users)
        })
    }, [])

    return (
        <div className="flex flex-wrap justify-between">
            {users.map((user:IUserDummy) => <ShowUserDummy key={user.id} user={user} />)}
        </div>
    );
};

export default ShowUsersDummy;