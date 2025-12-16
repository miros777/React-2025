import type IUserJsonPlaceholder from "../models/jsonplaceholder/user/IUserJsonPlaceholder.ts";
import type IUserDummy from "../models/dummy/user/IUserDummy.ts";

const baseUrlPlaceholder = 'https://jsonplaceholder.typicode.com';
const baseUrlDummy = 'https://dummyjson.com';

const userServicesDummy =  {
    getUsers: async ():Promise<IUserDummy[]> => {
        const res =  await fetch(baseUrlDummy + '/' + 'users')
           .then(res => res.json());
        return res.users;
    }
}

const userServicesPlaceholder =  {
    getUsers: async ():Promise<IUserJsonPlaceholder[]>=> {
        return  await fetch(baseUrlPlaceholder + '/' + 'users')
            .then(res => res.json())
    }
}

const postServicesDummy =  {
    getPosts: async ()=> {
        return  await fetch(baseUrlDummy + '/' + 'posts')
            .then(res => res.json())
    }
}

const postServicesPlaceholder =  {
    getPosts: async ()=> {
        return  await fetch(baseUrlPlaceholder + '/' + 'posts')
            .then(res => res.json())
    }
}

const commentServicesDummy =  {
    getComments: async ()=> {
        return  await fetch(baseUrlDummy + '/' + 'comments')
            .then(res => res.json())
    }
}

const commentServicesPlaceholder =  {
    getComments: async ()=> {
        return  await fetch(baseUrlPlaceholder + '/' + 'comments')
            .then(res => res.json())
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