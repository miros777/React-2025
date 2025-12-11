import {useEffect, useState} from "react";
import type ITodo from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.service.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodosComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos().then(todos => setTodos(todos))
    }, []);

    return (
        <div className="flex flex-wrap">
            {todos.map(todo=> <TodoComponent key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodosComponent;