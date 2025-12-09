import type ITodo from "../models/TodoModel.ts";
import type IComments from "../models/IComments.ts";
const endPointTodos = import.meta.env.VITE_API_URL + '/todos';
const endPointComments = import.meta.env.VITE_API_URL + '/comments';

export const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(endPointTodos)
        .then(res => res.json())
};

export const getComments = async (): Promise<IComments[]> => {
    return await fetch(endPointComments)
        .then(res => res.json())
};