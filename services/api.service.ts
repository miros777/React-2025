import type ITodo from "../models/TodoModel.ts";
const endPointTodos = import.meta.env.VITE_API_URL + '/todos';

export const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(endPointTodos)
        .then(res => res.json())
};