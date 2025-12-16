import {userServicesPlaceholder} from "../../services/api.servises";
import {useEffect, useState} from "react";
import type IUserJsonPlaceholder from "../../models/jsonplaceholder/user/IUserJsonPlaceholder.ts";
import ShowUserJsonPlaceholder from "./ShowUserJsonPlaceholder";

const ShowUsersJsonPlaceholder = () => {
    const [users, setUsers] = useState<IUserJsonPlaceholder[]>([]);
    
    useEffect(() => {
        userServicesPlaceholder.getUsers().then(users => {
            setUsers(users)
        });
    }, []);
    
    return (
        <div className="flex flex-wrap justify-between">
            {users.map((user) => <ShowUserJsonPlaceholder key={user.id} user={user} />)}
        </div>
    );
};

export default ShowUsersJsonPlaceholder;