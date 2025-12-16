import type IUserJsonPlaceholder from "../models/jsonplaceholder/user/IUserJsonPlaceholder.ts";
import type IUserDummy from "../models/dummy/user/IUserDummy.ts";
import type IPostDummy from "../models/dummy/post/IPostDummy.ts";
import type {IPostDummyBaseModel} from "../models/dummy/post/IPostDummyBaseModel.ts";
import type {IUserDummyBaseModel} from "../models/dummy/user/IUserDummyBase.ts";
import type ICommentDummy from "../models/dummy/comment/ICommentDummy.tsx";
import type {ICommentDummyBase} from "../models/dummy/comment/ICommentDummyBase.ts";
import type ICommentJsonPlaceholder from "../models/jsonplaceholder/comment/ICommentJsonPlaceholder.ts";

const baseUrlPlaceholder = 'https://jsonplaceholder.typicode.com';
const baseUrlDummy = 'https://dummyjson.com';

const userServicesDummy = {
    getUsers: async (): Promise<IUserDummyBaseModel & { users: IUserDummy[] }> => {
        return await fetch(baseUrlDummy + '/' + 'users')
            .then(res => res.json());
    }
}

const userServicesPlaceholder = {
    getUsers: async (): Promise<IUserJsonPlaceholder[]> => {
        return await fetch(baseUrlPlaceholder + '/' + 'users')
            .then(res => res.json())
    }
}

const postServicesDummy = {
    getPosts: async (): Promise<IPostDummyBaseModel & { posts: IPostDummy[] }> => {
        return await fetch(baseUrlDummy + '/' + 'posts')
            .then(res => res.json());
    }
}

const postServicesPlaceholder = {
    getPosts: async (): Promise<IUserJsonPlaceholder[]> => {
        return await fetch(baseUrlPlaceholder + '/' + 'posts')
            .then(res => res.json())
    }
}

const commentServicesDummy = {
    getComments: async (): Promise<ICommentDummyBase & { comments: ICommentDummy[] }> => {
        return await fetch(baseUrlDummy + '/' + 'comments')
            .then(res => res.json());
    }
}

const commentServicesPlaceholder = {
    getComments: async (): Promise<ICommentJsonPlaceholder[]> => {
        return await fetch(baseUrlPlaceholder + '/' + 'comments')
            .then(res => res.json());
    }
}

export {
    userServicesPlaceholder,
    userServicesDummy,
    postServicesDummy,
    postServicesPlaceholder,
    commentServicesDummy,
    commentServicesPlaceholder
}