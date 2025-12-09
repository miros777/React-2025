import type {FC} from "react";
import type ITodo from "../../models/TodoModel.ts";

type PropTypeTodo = {
    todo: ITodo
}
const TodoComponent:FC<PropTypeTodo> = ({todo}) => {
    return (
        <div className="bg-blue-500 mb-2 p-3 text-white text-center border-4">
            <div className="text-5xl text-yellow-600">{todo.id}</div>
            <div>{todo.userId}</div>
            <div>{todo.title}</div>
            {/*<div>toString(todo.completed)</div>*/}
        </div>
    );
};

export default TodoComponent;