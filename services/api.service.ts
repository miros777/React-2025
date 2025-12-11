import type {IComment} from "../models/IComment.ts";
const endPointComments = import.meta.env.VITE_API_URL + '/comments';



export const getComments = async (): Promise<IComment[]> => {
    const response =  await fetch(endPointComments)
        .then(res => res.json());

    return response.comments;
};