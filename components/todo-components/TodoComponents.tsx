import type IUser from "../../models/UserModel.ts";
import {useEffect, useState} from "react";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodoComponents = () => {

    const baseUrl = "https://jsonplaceholder.typicode.com/todos";

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const getUsers = async (): Promise<void | IUser[]> => {
            return await fetch(baseUrl)
                .then(res => res.json())
                .then( res => setUsers(res))
        };
        getUsers();
    },[])

    console.log('rerender')

    return (
        <div>
            {users.map((user, index) => <TodoComponent key={index} user={user}/> )}
        </div>
    );
};

export default TodoComponents;