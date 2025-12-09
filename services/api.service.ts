import type IPostModel from "../models/PostModel.ts";

const postsUrl = import.meta.env.VITE_API_URL + '/posts';

export const getPosts =  async ():Promise<IPostModel[]> => {
    return  await fetch(postsUrl)
        .then(value => value.json())
}