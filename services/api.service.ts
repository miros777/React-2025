import type {IComment} from "../models/IComment.ts";
// import type IProduct from "../models/IProduct.ts";
import type {ResponseProduct} from "../models/ResponseProduct.ts";
import type IProduct from "../models/IProduct.ts";
import type ResponseComments from "../models/ResponseComments.ts";
const endPointComments = import.meta.env.VITE_API_URL + '/comments';
const endPointProducts = import.meta.env.VITE_API_URL + '/products';


export const getComments = async (): Promise<IComment[]> => {
    const response:ResponseComments =  await fetch(endPointComments)
        .then(res => res.json());

    return response.comments;
};

export const getProducts = async (): Promise<IProduct[]> => {
    const response:ResponseProduct =  await fetch(endPointProducts)
        .then(res => res.json());

    return response.products;
};