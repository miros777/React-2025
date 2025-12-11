import type {IComment} from "../models/IComment.ts";
// import type IProduct from "../models/IProduct.ts";
import type {ResponseProducts} from "../models/ResponseProducts.ts";
import type IProduct from "../models/IProduct.ts";
import type ResponseComments from "../models/ResponseComments.ts";
import type {ResponseTodos} from "../models/ResponseTodos.ts";
import type ITodo from "../models/ITodo.ts";
const endPointComments = import.meta.env.VITE_API_URL + '/comments';
const endPointProducts = import.meta.env.VITE_API_URL + '/products';
const endPointTodos = import.meta.env.VITE_API_URL + '/todos';


export const getComments = async (): Promise<IComment[]> => {
    const response:ResponseComments =  await fetch(endPointComments)
        .then(res => res.json());

    return response.comments;
};

export const getProducts = async (): Promise<IProduct[]> => {
    const response:ResponseProducts =  await fetch(endPointProducts)
        .then(res => res.json());

    return response.products;
};

export const getTodos = async (): Promise<ITodo[]> => {
    const response:ResponseTodos =  await fetch(endPointTodos)
        .then(res => res.json());

    return response.todos;
};