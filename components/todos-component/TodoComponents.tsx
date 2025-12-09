import {useEffect, useState} from "react";
import {getTodos} from "../../services/api.service";
import TodoComponent from "../todo-component/TodoComponent";
import type ITodo from "../../models/TodoModel.ts";

const TodoComponents = () => {

    const [todos, setTodo] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos().then(response => setTodo(response))
    }, [])

    return (
        <div className="flex justify-center flex-wrap p-6">
            {todos.map((todo, index) => <TodoComponent key={index} todo={todo}/>)}
        </div>
    );
};

export default TodoComponents;