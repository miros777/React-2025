import type IUser from "../../models/UserModel.ts";
import {useEffect, useState} from "react";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const TodoComponents = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(response => setUsers(response))
    }, [])

    return (
        <div>
            {users.map((user, index) => <TodoComponent key={index} user={user}/>)}
        </div>
    );
};

export default TodoComponents;