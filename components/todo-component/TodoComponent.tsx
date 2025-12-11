import type ITodo from "../../models/ITodo.ts";
import type {FC} from "react";

type PropsTodo = {
    todo: ITodo
}
const TodoComponent:FC<PropsTodo> = ({todo:{todo,completed,userId}}) => {
    return (
        <div className="bg-indigo-300 text-black p-6 m-2 w-80">
            <div className="font-bold">{todo}</div>
            <div className="italic text-red-600">{completed}</div>
            <div className="italic text-red-600">{userId}</div>
        </div>
    );
};

export default TodoComponent;